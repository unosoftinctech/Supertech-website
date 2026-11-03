# Hostinger Deployment

The site is exported as static HTML, CSS, JS, and assets. Hostinger only needs to
serve the contents of `out/` from the domain's document root (`public_html`).
No Node.js runtime, database, or server process is required.

## 1. Build locally (optional check)

```bash
npm ci
npm run typecheck
npm run build
npm run preview
```

Confirm that `out/index.html`, `out/404.html`, `out/.htaccess`, `out/robots.txt`,
and `out/sitemap.xml` exist before deploying.

## 2. Prepare Hostinger

1. Log in to hPanel and open **Websites -> Manage -> File Manager**.
2. Confirm the domain's document root is `public_html` (or note the correct folder
   for an addon domain, for example `domains/example.com/public_html`).
3. Open **Files -> FTP Accounts** and create a dedicated FTP user for deployment.
   Note the FTP host, username, password, and port (usually 21).
4. Open **Security -> SSL** and make sure the free SSL certificate is active.
5. Point the domain's DNS records to Hostinger if they are not already.

## 3. Add GitHub secrets

In the GitHub repository, go to **Settings -> Secrets and variables -> Actions**
and add the following repository secrets:

| Secret           | Required | Example                    | Notes                                      |
| ---------------- | -------- | -------------------------- | ------------------------------------------ |
| `FTP_SERVER`     | Yes      | `ftp.supertechengg.in`     | FTP host from hPanel                       |
| `FTP_USERNAME`   | Yes      | `deploy@supertechengg.in`  | FTP account username                       |
| `FTP_PASSWORD`   | Yes      | —                          | FTP account password                       |
| `FTP_SERVER_DIR` | No       | `/public_html/`            | Must end with `/`                          |
| `FTP_PORT`       | No       | `21`                       | Defaults to 21                             |
| `FTP_PROTOCOL`   | No       | `ftps`                     | Use `ftp` if FTPS is unavailable            |

Use an environment named `production` under **Settings -> Environments** if you
want manual approval before each deployment.

## 4. Deploy

- Push to `main`, or run **Actions -> Deploy to Hostinger -> Run workflow**.
- The workflow runs a typecheck and static build, verifies the export, and mirrors
  `out/` to the configured Hostinger directory.
- `.well-known`, `.git`, and `cgi-bin` are excluded so SSL validation files are
  never removed.

## 5. Verify after the first deployment

- `https://www.supertechengg.in/` loads over HTTPS.
- `https://www.supertechengg.in/about/` loads directly (not only through the home page).
- A non-existent URL shows the styled 404 page.
- `https://www.supertechengg.in/robots.txt` and `/sitemap.xml` are reachable.
- The canonical host redirect works (bare domain -> `www`).

## Manual deployment

If GitHub Actions is unavailable, build locally and upload the contents of `out/`
with File Manager or FileZilla. Upload the files **inside** `out/`, not the folder
itself, so `index.html` sits directly in `public_html`.

`out/.htaccess` must be uploaded as well. Enable "show hidden files" in FileZilla
or the Hostinger File Manager if it is not visible.

## Rollback

The workflow mirrors the current build, so a rollback is another deployment:

1. Revert the bad commit on `main`.
2. Push the revert, or run the deploy workflow from the last good commit.
3. Alternatively, restore the previous `out/` artifact from the CI workflow run
   (**Actions -> CI -> Artifacts -> static-site**) and upload it manually.

## Deploying to a Hostinger VPS instead

For a VPS with Nginx, use the same `out/` directory:

1. Build in CI or locally with `npm run build`.
2. Copy `out/` to `/var/www/supertech/` (for example with `rsync` over SSH).
3. Point the Nginx `root` at `/var/www/supertech` and add `try_files $uri $uri/ =404;`.
4. Use Certbot for TLS, or terminate TLS at a reverse proxy.

A Node.js process is not needed. If an SSH-based workflow is preferred, replace
the FTP step with an `rsync` action and store the SSH key in GitHub secrets.
