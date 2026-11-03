import { NextResponse } from "next/server";

import { getMailFrom, getMailTo, getMailTransporter } from "@/lib/mail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 32 * 1024;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MIN_FILL_MS = 2000;

const submissions = new Map<string, number[]>();

function json(
  body: Record<string, unknown>,
  status = 200,
  extraHeaders?: Record<string, string>,
) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...extraHeaders },
  });
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  if (first) return first;
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    submissions.set(ip, recent);
    return true;
  }

  recent.push(now);
  submissions.set(ip, recent);

  // Keep the in-memory map from growing without bound on a long-running server.
  if (submissions.size > 10_000) {
    for (const [key, times] of submissions) {
      if (times.every((time) => now - time >= RATE_LIMIT_WINDOW_MS)) {
        submissions.delete(key);
      }
    }
  }

  return false;
}

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  let originHost: string;
  try {
    originHost = new URL(origin).host.toLowerCase();
  } catch {
    return false;
  }

  const allowedHosts = new Set<string>();
  const host = request.headers.get("host");
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0].trim();
  if (host) allowedHosts.add(host.toLowerCase());
  if (forwardedHost) allowedHosts.add(forwardedHost.toLowerCase());

  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (configuredUrl) {
    try {
      allowedHosts.add(new URL(configuredUrl).host.toLowerCase());
    } catch {
      // Ignore an invalid optional URL rather than blocking every request.
    }
  }

  return allowedHosts.has(originHost);
}

function readString(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return json({ ok: false, message: "Invalid request origin." }, 403);
  }

  const contentType = request.headers.get("content-type")?.toLowerCase();
  if (!contentType?.includes("application/json")) {
    return json({ ok: false, message: "Unsupported request format." }, 415);
  }

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return json({ ok: false, message: "Your message is too large." }, 413);
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return json({ ok: false, message: "Invalid request body." }, 400);
  }

  // Content-Length can be absent on chunked requests, so also check the actual size.
  if (Buffer.byteLength(rawBody, "utf8") > MAX_BODY_BYTES) {
    return json({ ok: false, message: "Your message is too large." }, 413);
  }

  let data: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(rawBody);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("Body must be a JSON object.");
    }
    data = parsed as Record<string, unknown>;
  } catch {
    return json({ ok: false, message: "Invalid request body." }, 400);
  }

  const name = readString(data.name, 100);
  const phone = readString(data.phone, 30);
  const message = readString(data.message, 5000);
  const honeypot = readString(data.company, 200);

  // Hidden field only bots fill in: accept silently and do not send anything.
  if (honeypot) {
    return json({ ok: true, message: "Thank you for your enquiry." });
  }

  if (typeof data.message === "string" && data.message.trim().length > 5000) {
    return json(
      {
        ok: false,
        message: "Your message is too long. Please keep it under 5,000 characters.",
      },
      413,
    );
  }

  if (name.length < 2) {
    return json({ ok: false, message: "Please enter your name." }, 400);
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (
    !/^[0-9+\-()\s]{7,30}$/.test(phone) ||
    phoneDigits.length < 7 ||
    phoneDigits.length > 15
  ) {
    return json({ ok: false, message: "Please enter a valid phone number." }, 400);
  }

  if (message.length < 10) {
    return json(
      { ok: false, message: "Please add a few details about your requirement." },
      400,
    );
  }

  if ((message.match(/https?:\/\//gi) ?? []).length > 2) {
    return json({ ok: false, message: "Please remove links from your message." }, 400);
  }

  const startedAt = Number(data.startedAt);
  if (
    Number.isFinite(startedAt) &&
    startedAt > 0 &&
    Date.now() - startedAt < MIN_FILL_MS
  ) {
    return json({ ok: false, message: "Please take a moment and try again." }, 400);
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return json(
      {
        ok: false,
        message: "Too many enquiries. Please try again later or call us directly.",
      },
      429,
      { "Retry-After": String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)) },
    );
  }

  const transporter = getMailTransporter();
  const from = getMailFrom();

  if (!transporter || !from) {
    console.error(
      "Contact form unavailable: set SMTP_HOST, SMTP_USER, SMTP_PASS and MAIL_FROM.",
    );
    return json(
      {
        ok: false,
        message:
          "The contact form is temporarily unavailable. Please call us or use WhatsApp.",
      },
      500,
    );
  }

  const receivedAt = new Date().toISOString();
  const page = readString(request.headers.get("referer"), 500) || "unknown";
  const userAgent = readString(request.headers.get("user-agent"), 300) || "unknown";
  const safeName = name.replace(/[\r\n]+/g, " ");

  const text = [
    "New enquiry from the SuperTech website",
    "",
    `Name:    ${name}`,
    `Phone:   ${phone}`,
    `Page:    ${page}`,
    `Time:    ${receivedAt}`,
    `IP:      ${ip}`,
    `Browser: ${userAgent}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2 style="margin:0 0 16px;font-family:Arial,sans-serif;color:#0a2a5e;">New website enquiry</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;color:#26344d;">
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Name</td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Phone</td><td>${escapeHtml(phone)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Page</td><td>${escapeHtml(page)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Received</td><td>${escapeHtml(receivedAt)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:bold;">IP</td><td>${escapeHtml(ip)}</td></tr>
    </table>
    <p style="margin:18px 0 6px;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;color:#26344d;">Message</p>
    <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;color:#26344d;">${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    await transporter.sendMail({
      from,
      to: getMailTo(),
      subject: `Website enquiry from ${safeName}`,
      text,
      html,
    });
  } catch (error) {
    console.error(
      "Contact form email failed:",
      error instanceof Error ? error.message : error,
    );
    return json(
      {
        ok: false,
        message:
          "We could not send your enquiry. Please call us or use WhatsApp instead.",
      },
      502,
    );
  }

  return json({
    ok: true,
    message: "Thank you for your enquiry. We will contact you shortly.",
  });
}
