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
npm run preview    # serves dist/ at http://localhost:4321
```

Needs Node 22.23.4 or newer. In Astro 7, `npm run preview` keeps running
in the background after the command returns; stop it with
`npx astro preview stop`.

## The page

One landing page (`src/pages/index.astro`), built from sections in
`src/components/`, top to bottom:

| Component | Section |
| --- | --- |
| `Hero.astro` | Full-screen exterior image, wordmark, tagline, cities, waitlist button |
| `Practice.astro` | "Balance, as a practice": the statement fills in as you scroll |
| `Lineage.astro` | From Avicenna to now: Mizaj and Mizan |
| `Pillars.astro` | The five pillars, with a sticky image that changes per pillar |
| `Spaces.astro` | Sideways-scrolling gallery of the club's spaces |
| `Cities.astro` | Dotted map (drawn at build time) and live local time per city |
| `Waitlist.astro` | Waitlist sign-up form (Netlify Forms) |

Copy comes from the public brochure. No figures, opening dates, team or
investor material.

## Where things are

| Path | What it is |
| --- | --- |
| `src/site.config.ts` | Name, tagline, cities, URL, launch switch, analytics ID |
| `src/data/club.ts` | Pillars, spaces and city suggestions (used by the page and `llms.txt`) |
| `src/styles/global.css` | Brand tokens, base styles, scroll reveals |
| `src/layouts/Base.astro` | `<head>`, self-hosted fonts, meta tags, header and footer |
| `src/components/` | Page sections, plus `Header`, `Footer`, `Photo`, `Analytics` |
| `src/assets/photos/` | Photography (see below) |
| `public/` | Files served as-is (favicon) |
| `netlify.toml` | Build command, Node version, security headers |

## Photos

Images live in `src/assets/photos/`, named after the slot they fill. To
swap a picture, replace the file and keep its name:

| Slot | Used for |
| --- | --- |
| `exterior` | Hero, and the link-preview image |
| `outdoor-lounge` | Full-width image after the opening statement |
| `tea-circle` | Avicenna section |
| `courts`, `recovery-lounge`, `assessment`, `nourishment`, `lounge-people` | The five pillars, in order |
| `lounge`, `courts-hall`, `studio`, `gym`, `wet-recovery`, `hammam`, `mizaj-suite`, `dry-recovery`, `treatment` | Spaces gallery, in order |
| `threshold` | Waitlist section |

Any of `.jpg`, `.png`, `.webp` or `.avif` works, e.g. `lounge.jpg`. The
build turns each into responsive AVIF and WebP at several sizes. A slot
with no file shows a placeholder panel labelled "photo to come".

The current images are 90%-quality JPEG copies of the brochure's concept
renders. The original PNGs are kept locally in `photo-originals/`, which
Git ignores (they total about 55MB).

The renders are concept renders, and the page says so (gallery note and
footer). Keep that wording while the images are renders.

## Waitlist

The form is handled by Netlify Forms, so there's no backend to run.
Netlify finds the form in the built HTML on each deploy (form detection is
turned on for the project). Submissions appear in the Netlify dashboard
under **Forms → waitlist**, and can be exported as CSV.

Each sign-up is also emailed to hale@lumiapartners.com with the subject
"Mizan waitlist: new sign-up" (Netlify → **Project configuration →
Notifications → Emails and webhooks**). Netlify only sends form emails to
members of the Netlify team, so it can't email an address like
waitlist@mizanexperience.com directly.

Fields: first name, last name, email, city (the six cities or "Somewhere
else"), `other_city` (a "Which city?" box with suggestions that appears
only for "Somewhere else"; the suggestion list is in `src/data/club.ts`)
and a required consent box. A hidden honeypot field filters bots, on top
of Netlify's own spam filtering.

## Before launch

1. **Privacy notice.** The waitlist collects names and emails from the UK,
   EU, Türkiye and the US; publish a privacy notice and link it from the
   form before launch.
2. **Analytics.** Create a new website in Umami for this site and put its ID
   in `umamiWebsiteId`. Don't reuse the data room's ID.

## Domain

**https://mizanexperience.com**, with `www.mizanexperience.com` redirecting
to it. Registered at Namecheap, which also keeps the DNS (so Namecheap's
email forwarding keeps working). In Namecheap → Advanced DNS:

| Type | Host | Value |
| --- | --- | --- |
| A Record | `@` | `75.2.60.5` (Netlify's load balancer) |
| CNAME Record | `www` | `mizan-website.netlify.app` |

Netlify issues and renews the HTTPS certificate automatically. The
Netlify address, https://mizan-website.netlify.app, redirects to the
domain (set in `netlify.toml`) so search engines see one site.

## Search engines

Indexing is on (`indexable: true` in `src/site.config.ts`). The build
publishes `robots.txt` (allows crawlers, points to the sitemap),
`sitemap.xml`, and schema.org structured data for the organisation on the
home page. Deploy previews stay out of search results: Netlify sends
`X-Robots-Tag: noindex` on them.

AI assistants and answer engines (ChatGPT, Claude, Perplexity, Google's AI
results) are welcome too: `robots.txt` doesn't block any crawler, the page
content is plain HTML that needs no JavaScript to read, and
[`/llms.txt`](https://mizanexperience.com/llms.txt) gives them a Markdown
summary of Mizan, the cities, pillars and spaces. It's generated from
`src/data/club.ts` and `src/site.config.ts`, the same data the page uses,
so it stays in step with the site.

## Deploy

Hosted on Netlify as the `mizan-website` project (Lumia Partners team).

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
- **The cities list is the website's own.** `cities` in
  `src/site.config.ts` was set for the website (Miami, Ankara, Istanbul,
  London, Dallas, New York) and differs from the data room's markets line,
  which has Doha instead of London. Changing it updates the hero, map, city
  list, waitlist options and footer together.
