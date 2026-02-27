# Simple Component Site (Eleventy + Sanity)

A minimal starter for building pages from reusable components in Sanity and rendering them with Eleventy.

## What this includes

- Sanity Studio schema for `page` documents
- Slug-based routing (`home` resolves to `/`, all others resolve to `/<slug>/`)
- A componentized page builder (`hero`, `richText`, `cta`)
- A basic component library page at `/components/`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root with your Sanity settings (used by Eleventy):

```bash
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2024-10-01
SANITY_USE_CDN=true
SANITY_READ_TOKEN=
```

3. Create `studio/.env` for the Studio (Sanity only exposes `SANITY_STUDIO_*` in the browser):

```bash
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

4. Start both Eleventy and Studio:

```bash
npm run dev
```

5. Open:

- Site: `http://localhost:8080`
- Studio: `http://localhost:3333`

## Content model

- `page` document
  - `title`
  - `slug`
  - `pageBuilder` (array of block objects)
- `siteSettings` document
  - `title`
  - `siteUrl`
  - `navigation` (header items + dropdowns)
  - `footerLinks`
  - `homepage`
  - `defaultDescription`
  - `defaultOgImage`
  - `analyticsId`
- Block types:
  - `fullWidthHero`
  - `hero`
  - `richText`
  - `featureGrid`
  - `imageWithText`
  - `testimonial`
  - `stats`
  - `logoCloud`
  - `pricing`
  - `faq`
  - `sandBand`
  - `darkBand`
  - `marketoSignup`
  - `showcase`
  - `mediaMosaic`
  - `timeline`
  - `cta`

## How page generation works

- Eleventy pulls all Sanity pages from `src/_data/sanity.js`
- `src/pages.njk` paginates through those pages
- Each block in `pageBuilder` is rendered using a matching component template in `src/_includes/components/`

## Files to customize

- Eleventy config: `.eleventy.js`
- Sanity query: `src/_data/sanity.js`
- Components:
  - `src/_includes/components/hero.njk`
  - `src/_includes/components/richText.njk`
  - `src/_includes/components/cta.njk`
- Page template: `src/pages.njk`
- Sanity schema: `studio/schemaTypes/`

## Rebuild button (optional)

Add a build hook URL so the Studio can trigger Eleventy rebuilds:

```
SANITY_STUDIO_REBUILD_HOOK=https://your-build-hook
```

## SEO + Analytics

- Set `siteUrl` in Site Settings for canonical URLs, sitemap, and robots.txt.
- Optional `analyticsId` (GA4) injects a gtag script.
- `noIndex` is available on each page (SEO fieldset).
