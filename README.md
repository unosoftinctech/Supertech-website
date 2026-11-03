# SuperTech Engineering Corporation — Website

Marketing website for SuperTech Engineering Corporation, built with Next.js (App Router),
TypeScript, and Tailwind CSS v4. The site is fully static and deploys to Hostinger.

## Requirements

- Node.js 20.9 or newer (`.nvmrc` pins Node 22)
- npm 10+

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build

```bash
npm run typecheck  # TypeScript check
npm run build      # static export to out/
npm run preview    # serve out/ locally
```

`next build` writes a complete static site to `out/`. This folder is what gets
uploaded to Hostinger; no Node.js runtime is required on the hosting account.

## Project structure

```
public/
  .htaccess                     Apache/LiteSpeed rules (HTTPS, caching, 404, headers)
  robots.txt                    Search-engine directives
  videos/hero.mp4               Hero background video
src/
  app/                          Routes (one folder = one URL)
    layout.tsx                  Fonts, top bar, header, footer, floating buttons
    page.tsx                    Home (/)
    about/ team/ products/ gallery/ blogs/ contact/
    sitemap.ts                  Generated sitemap.xml
    icon.svg                    Favicon
    globals.css                 Tailwind theme: colours, fonts, breakpoints
  components/
    layout/    TopBar, Header, Footer, Brand, FloatingButtons
    home/      Hero, IntroBand, FeatureCards, JubileeBadge, ProductsPreview,
               AboutPreview, HowWeWork, Services, Industries, Clients, CtaBanner
    about/     WhoWeAre, WhyChooseUs, Commitment
    team/      TeamGrid
    products/  ProductCard, ProductGrid
    gallery/   GalleryGrid, GalleryItem
    blogs/     BlogList
    contact/   ContactDetails, ContactForm
    ui/        Container, Section, SectionHeading, PageBanner, CardGrid,
               InfoCard, ZoomImage, Lightbox, button-styles
  data/        site.ts (company, products, services, clients, blogs...)
               team.ts
  assets/images/               Product, client, team and about photos
```

## Editing content

- Phone, email, address, WhatsApp number: `src/data/site.ts` -> `company`
- Products, services, industries, clients, blog posts: `src/data/site.ts`
- Team members: `src/data/team.ts`
- Colours / fonts / breakpoints: `src/app/globals.css` (`@theme`)

After changing the domain, update it in:

- `src/data/site.ts` -> `company.website`
- `public/robots.txt`
- `public/.htaccess` (canonical host redirect)

## Deployment

Deployment is automated with GitHub Actions. Every push to `main` builds the
site and uploads `out/` to Hostinger over FTPS.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for:

- Hostinger account and FTP setup
- Required GitHub secrets
- Domain, SSL, and DNS checks
- Manual deployment and rollback
- Deploying to a VPS instead of shared hosting
