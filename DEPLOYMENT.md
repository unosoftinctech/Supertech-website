# Hostinger VPS Deployment

The website is a Next.js Node.js app. Nginx terminates TLS and proxies requests
to the app on `127.0.0.1:3000`; PM2 keeps the process alive. The contact form is
served by `POST /api/contact/` and sends email through SMTP.

```
Visitor → Nginx (443) → Next.js on 127.0.0.1:3000 → SMTP → business inbox
```

## 1. Server prerequisites

Use Ubuntu 22.04/24.04 on a Hostinger VPS. As a sudo user:

```bash
# Node.js 22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs nginx rsync curl certbot python3-certbot-nginx

# PM2
sudo npm install -g pm2
```

Use at least 2 GB RAM (or add swap) because Next.js builds are memory-hungry.

Create a deploy user and application directory:

```bash
sudo adduser deploy
sudo mkdir -p /var/www/supertech
sudo chown -R deploy:deploy /var/www/supertech
```

## 2. SSH access for GitHub Actions

Generate a dedicated key on your workstation:

```bash
ssh-keygen -t ed25519 -C "github-actions-supertech" -f supertech_deploy -N ""
ssh-copy-id -i supertech_deploy.pub deploy@YOUR_VPS_IP
```

Use an empty passphrase for this dedicated automation key, keep `supertech_deploy`
private, and add its contents to GitHub as `VPS_SSH_KEY`.
You can also verify the server fingerprint and store it as `VPS_KNOWN_HOSTS`:

```bash
ssh-keyscan -p 22 -H YOUR_VPS_IP
```

## 3. GitHub secrets

In **Settings → Secrets and variables → Actions**, add:

| Secret            | Required | Example                | Notes                                  |
| ----------------- | -------- | ---------------------- | -------------------------------------- |
| `VPS_HOST`        | Yes      | `203.0.113.10`         | VPS IP or hostname                     |
| `VPS_USER`        | Yes      | `deploy`               | SSH user                               |
| `VPS_SSH_KEY`     | Yes      | —                      | Private key from step 2                |
| `VPS_PORT`        | No       | `22`                   | Defaults to 22                         |
| `VPS_APP_DIR`     | No       | `/var/www/supertech`   | Defaults to `/var/www/supertech`       |
| `VPS_KNOWN_HOSTS` | No       | output of `ssh-keyscan`| Avoids trust-on-first-use              |

Create an environment named `production` under **Settings → Environments** if
you want manual approval before each deployment.

## 4. Server environment file

Create `/var/www/supertech/.env` on the server. It is excluded from rsync, so
deployments never overwrite it:

```bash
sudo -u deploy nano /var/www/supertech/.env
```

```dotenv
NEXT_PUBLIC_SITE_URL=https://www.supertechengg.in

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=supertech074@gmail.com
SMTP_PASS=your-16-character-google-app-password
MAIL_FROM="SuperTech Website <supertech074@gmail.com>"
MAIL_TO=supertech074@gmail.com
```

```bash
sudo chmod 600 /var/www/supertech/.env
```

See the README for Gmail App Password steps. Never commit this file.

## 5. First deployment

Push to `main`, or run **Actions → Deploy to Hostinger VPS → Run workflow**.
The workflow:

1. installs dependencies, lints, and typechecks;
2. creates the app directory on the server;
3. rsyncs the source, excluding `.env`, `node_modules`, `.next`, and `out`;
4. runs `deploy/remote-deploy.sh`, which backs up the last `.next`, runs
   `npm ci --include=dev`, `npm run build`, and `npm prune --omit=dev`;
5. reloads PM2 with `ecosystem.config.cjs` and saves the process list;
6. checks `http://127.0.0.1:3000/api/health/`.

If the build fails, the script restores the previous `.next` and exits before
reloading PM2. Check the failed workflow log and the server build output.

## 6. Nginx and SSL

Copy the example configuration:

```bash
sudo cp /var/www/supertech/deploy/nginx.conf.example /etc/nginx/sites-available/supertech
sudo nano /etc/nginx/sites-available/supertech   # set the real domain
sudo ln -s /etc/nginx/sites-available/supertech /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Before obtaining the certificate, point both DNS records at the VPS:

- `A` record for `supertechengg.in` → VPS IPv4 address
- `A` record for `www.supertechengg.in` → VPS IPv4 address

Wait for DNS to propagate, then run:

```bash
sudo certbot --nginx -d supertechengg.in -d www.supertechengg.in
```

Certbot adds the TLS block and HTTP-to-HTTPS redirect. If you prefer the bare
domain to redirect to `www`, add a separate redirect server block after Certbot
has issued the certificate.

Open the firewall:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

## 7. PM2 on boot

```bash
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u deploy --hp /home/deploy
sudo -u deploy pm2 save
```

## 8. Verify

```bash
curl https://www.supertechengg.in/api/health/
```

Then submit a test enquiry and confirm the email arrives at `MAIL_TO` (check
spam on the first run). The success message should appear under the form.

Useful commands:

```bash
sudo -u deploy pm2 status
sudo -u deploy pm2 logs supertech-website
sudo journalctl -u nginx -f
```

## 9. Updating and rollback

- **Normal update:** push to `main`; the workflow rebuilds and reloads PM2.
- **SMTP environment change:** edit `/var/www/supertech/.env`, then
  `sudo -u deploy pm2 restart supertech-website --update-env`.
- **Site URL change:** `NEXT_PUBLIC_SITE_URL` is baked in at build time. Change
  `.env` and redeploy (or run `npm run build` on the server) so metadata uses it.
- **Rollback:** revert the bad commit and push, or re-run the workflow from the
  last good commit in the Actions tab.

The deploy uses `rsync --delete` but excludes `.env` and `node_modules`, so the
server environment file and installed dependencies are preserved.

## Troubleshooting

| Symptom                              | Check                                                                 |
| ------------------------------------ | --------------------------------------------------------------------- |
| `502 Bad Gateway`                    | `pm2 status`, `pm2 logs supertech-website`, app binding to `127.0.0.1:3000` |
| Contact form says temporarily unavailable | `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM` in `.env`; restart PM2 |
| Email not received                   | SMTP credentials, spam folder, `MAIL_TO`, outbound port 465/587       |
| `npm: command not found` over SSH    | Node installed for the wrong user; ensure `bash -lc` loads Node 22     |
| Rate limit hit during testing        | Wait 15 minutes or restart PM2 (the limiter is in-memory)             |
