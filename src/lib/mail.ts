import nodemailer, { type Transporter } from "nodemailer";

type MailGlobal = typeof globalThis & {
  __supertechMailTransporter?: Transporter;
};

const globalForMail = globalThis as MailGlobal;

const DEFAULT_MAIL_TO = "supertech074@gmail.com";

export function getMailTransporter(): Transporter | null {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return null;

  if (!globalForMail.__supertechMailTransporter) {
    const parsedPort = Number(process.env.SMTP_PORT ?? 587);
    const port =
      Number.isInteger(parsedPort) && parsedPort > 0 ? parsedPort : 587;
    const secureSetting = process.env.SMTP_SECURE?.trim().toLowerCase();
    const secure = secureSetting
      ? secureSetting === "true" || secureSetting === "1"
      : port === 465;

    globalForMail.__supertechMailTransporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
  }

  return globalForMail.__supertechMailTransporter;
}

export function getMailFrom(): string {
  return process.env.MAIL_FROM?.trim() || process.env.SMTP_USER?.trim() || "";
}

export function getMailTo(): string {
  return process.env.MAIL_TO?.trim() || DEFAULT_MAIL_TO;
}
