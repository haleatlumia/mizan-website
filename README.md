# Mizan website

The public website for Mizan, built with [Astro](https://astro.build) as a
static site and deployed on Netlify.

The investor data room is **not** here. It lives in the separate `mizan`
repo (`mizan/dataroom`), has its own build and deploy, and is
password-protected. Keep the two apart.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs dist/
npm run preview    # serves dist/ locally
```

Needs Node 22.23.4 or newer.

## Where things are

| Path | What it is |
| --- | --- |
| `src/site.config.ts` | Name, tagline, URL, launch switch, analytics ID, markets |
| `src/styles/global.css` | Brand tokens and base styles |
| `src/layouts/Base.astro` | `<head>`, fonts, meta tags, header and footer |
| `src/components/` | Header, Footer, Analytics |
| `src/pages/` | One file per page (`about.astro` becomes `/about/`) |
| `public/` | Files served as-is (favicon, images, video) |
| `netlify.toml` | Build command, Node version, security headers |

## Before launch

1. **Domain.** Set `url` in `src/site.config.ts`. If the site takes the main
   domain, decide where the data room goes (for example a `dataroom.`
   subdomain on its own Netlify site).
2. **Indexing.** Set `indexable: true` in `src/site.config.ts`. Until then
   every page is `noindex` and `robots.txt` blocks crawlers.
3. **Analytics.** Create a new website in Umami for this site and put its ID
   in `umamiWebsiteId`. Don't reuse the data room's ID.

## Deploy

Hosted on Netlify as the `mizan-website` project (Lumia Partners team):
https://mizan-website.netlify.app

- Every push to `main` deploys to production.
- Every pull request gets its own preview link
  (`deploy-preview-<number>--mizan-website.netlify.app`).
- Build settings live in `netlify.toml`: build command, `dist` folder,
  Node version and headers.

The repo is connected through the Netlify GitHub App.

**This GitHub repo is public on purpose.** Netlify blocks automatic builds
from private repos on this account ("Build blocked: Unrecognized Git
contributor"), even with GitHub linked. If the repo is made private again,
pushes will stop deploying. Because it's public, never commit secrets,
unreleased investor material or anything else that shouldn't be seen.

The Netlify CLI isn't installed globally; run it through npx:

```bash
npx -y netlify-cli@27.16.2 status
```

## Rules

- **Public content only.** No financial model figures, IRR, valuations,
  raise amounts or other data room material.
- **Brand tokens are copied from the data room.** If the palette or fonts
  change, update `src/styles/global.css` here and
  `mizan/dataroom/source/index.html` there.
- **Markets list is copied too.** `markets` in `src/site.config.ts` mirrors
  the data room's `markets_line` fact. Keep them in sync.
