"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";

import { buttonClass } from "@/components/ui/button-styles";
import { company } from "@/data/site";

const field =
  "w-full rounded-[4px] border border-line bg-white px-[14px] py-[13px] font-[inherit]";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const whatsappText = `Hello SuperTech, I am ${name || "[name]"} (${phone || "[phone]"}). ${message}`;
  const whatsappHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          message,
          company: honeypot,
          startedAt: startedAt.current,
        }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(
          result.message ||
            "We could not send your enquiry. Please call us or use WhatsApp.",
        );
      }

      setStatus("success");
      setFeedback(
        result.message || "Thank you for your enquiry. We will contact you shortly.",
      );
      setName("");
      setPhone("");
      setMessage("");
      setHoneypot("");
      startedAt.current = Date.now();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please call us or use WhatsApp.",
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      method="post"
      action="/contact/"
      className="grid gap-3"
    >
      <noscript>
        <p className="rounded-[4px] border border-line bg-white p-3 text-[14px]">
          JavaScript is required for the contact form. Please call{" "}
          <a href={company.phoneHref} className="font-bold text-brand">
            {company.phone}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${company.email}`} className="font-bold text-brand">
            {company.email}
          </a>
          .
        </p>
      </noscript>

      <input
        className={field}
        name="name"
        placeholder="Your name"
        aria-label="Your name"
        autoComplete="name"
        maxLength={100}
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={field}
        name="phone"
        type="tel"
        placeholder="Phone number"
        aria-label="Phone number"
        autoComplete="tel"
        inputMode="tel"
        maxLength={30}
        pattern="[0-9+() -]{7,30}"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <textarea
        className={field}
        name="message"
        rows={5}
        placeholder="Component, quantity, material and application details"
        aria-label="Enquiry details"
        maxLength={5000}
        minLength={10}
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {/* Honeypot: hidden from people, filled in by bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company-field">Company</label>
        <input
          id="company-field"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className={buttonClass(
          "primary",
          "disabled:cursor-not-allowed disabled:opacity-60",
        )}
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Enquiry"}
      </button>

      {feedback ? (
        <p
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={
            status === "error"
              ? "text-[14px] font-bold text-accent"
              : "text-[14px] font-bold text-brand"
          }
        >
          {feedback}
        </p>
      ) : null}

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener"
        className={buttonClass("outline")}
      >
        Send on WhatsApp
      </a>

      <small>
        We reply by phone or WhatsApp. To attach a drawing, email it to{" "}
        <a href={`mailto:${company.email}`} className="font-bold text-brand">
          {company.email}
        </a>
        .
      </small>
    </form>
  );
}
