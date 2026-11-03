# SuperTech Engineering Corporation — Website

Marketing website for SuperTech Engineering Corporation, built with Next.js
(App Router), TypeScript, Tailwind CSS v4, and a server-side contact form that
sends enquiries by email.

## Requirements

- Node.js 22 LTS (`.nvmrc` pins Node 22; Next.js requires 20.9+)
- npm 10+
- An SMTP mailbox for contact-form delivery

## Local setup

```bash
npm install
```

Create the local environment file:

```powershell
Copy-Item .env.example .env
```

Fill in the SMTP values in `.env` (see [Environment variables](#environment-variables)),
then start the dev server:

```bash
npm run dev        # http://localhost:3000
```

## Scripts

| Command             | Purpose                                       |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Development server with hot reload            |
| `npm run lint`      | ESLint (Next.js + TypeScript rules)           |
| `npm run typecheck` | Generate route types and run TypeScript       |
| `npm run build`     | Production build (`.next/`)                   |
| `npm run start`     | Serve the production build (Node.js required) |
| `npm run clean`     | Remove `.next/` and the legacy `out/` folder  |

## Contact form backend

The form posts JSON to `POST /api/contact/` and the server sends the enquiry by
SMTP. It does not use `mailto:` for the main submit action.

The endpoint:

- accepts same-origin JSON only, with a 32 KB body limit;
- validates name, phone, message, and rejects messages containing more than two links;
- uses a hidden honeypot field and a minimum form-fill time;
- rate-limits to 5 submissions per IP per 15 minutes;
- escapes all values in the HTML email;
- returns a friendly success/error message for the UI.

`GET /api/health/` returns a small JSON health response for deployment checks.

### Environment variables

| Variable               | Required | Default                     | Purpose                                      |
| ---------------------- | -------- | --------------------------- | -------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Yes      | —                           | Canonical site URL and origin check          |
| `SMTP_HOST`            | Yes      | —                           | SMTP server, e.g. `smtp.gmail.com`           |
| `SMTP_PORT`            | No       | `587`                       | SMTP port (`465` for implicit TLS)           |
| `SMTP_SECURE`          | No       | `true` when port is `465`   | Use implicit TLS                             |
| `SMTP_USER`            | Yes      | —                           | SMTP login                                   |
| `SMTP_PASS`            | Yes      | —                           | SMTP password or app password                |
| `MAIL_FROM`            | No       | `SMTP_USER`                 | Sender shown in the email                    |
| `MAIL_TO`              | No       | `supertech074@gmail.com`    | Enquiry recipient (comma-separated allowed)  |

Never commit `.env`; it is ignored by git. Keep a copy on the server only.
`NEXT_PUBLIC_SITE_URL` is inlined during `next build`, so redeploy after changing it.

### Gmail SMTP

Gmail requires an App Password, not the normal account password:

1. Enable 2-Step Verification on the Google account.
2. Open **Google Account → Security → App passwords**.
3. Create an app password for "SuperTech Website".
4. Put the 16-character password in `SMTP_PASS` (without spaces).
5. Keep `SMTP_USER` and `MAIL_FROM` on the same authenticated Gmail address.

If the VPS blocks outbound SMTP ports, test with:

```bash
nc -vz smtp.gmail.com 465
```

Use a transactional email API or an allowed SMTP relay if the port is blocked.

### Rate limiting note

Rate limiting is in-memory, so `ecosystem.config.cjs` runs **one** PM2 instance.
If you scale to multiple instances or servers, move the limiter to Redis.

## Project structure

```
src/
  app/
    api/contact/route.ts       Contact form endpoint (validation + SMTP)
    api/health/route.ts        Health check
    layout.tsx                 Fonts, header, footer, floating buttons
    page.tsx                   Home (/)
    about/ team/ products/ gallery/ blogs/ contact/
    sitemap.ts                 Generated sitemap.xml
    icon.svg                   Favicon
    globals.css                Tailwind theme
  components/                  Layout, page sections, shared UI
  data/                        site.ts, team.ts
  lib/mail.ts                  Nodemailer transport
  assets/images/               Product, client, team, and about photos
deploy/nginx.conf.example      Reverse-proxy example
ecosystem.config.cjs           PM2 process definition
```

## Editing content

- Phone, email, address, WhatsApp number: `src/data/site.ts` → `company`
- Products, services, industries, clients, blog posts: `src/data/site.ts`
- Team members: `src/data/team.ts`
- Colours, fonts, breakpoints: `src/app/globals.css` (`@theme`)

If the domain changes, update `company.website` in `src/data/site.ts`,
`public/robots.txt`, and `NEXT_PUBLIC_SITE_URL`.

## Deployment

The site runs as a Node.js app behind Nginx on a Hostinger VPS. GitHub Actions
deploys over SSH, builds on the server, and reloads PM2.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for server setup, GitHub secrets, Nginx,
SSL, and rollback steps.

> A static-only Hostinger shared-hosting plan is not sufficient because the
> contact form needs a Node.js runtime and an API route.
