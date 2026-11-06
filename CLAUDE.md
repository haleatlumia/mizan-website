# Mizan website

Public marketing site for Mizan. Astro, static output, Netlify deploy.
See README.md for commands and layout.

## Hard rules

- The GitHub repo is public (Netlify won't auto-build it while private; see
  README). Never commit secrets, API keys, tokens or `.env` files.
- This repo is public-facing. Never add data room material: financial model
  figures, returns, valuations, raise terms, cap table, operating standards,
  feasibility work or anything from `mizan/dataroom`. If a page needs a number,
  ask before adding it.
- Site-wide settings live in `src/site.config.ts` only. Don't hard-code the
  name, tagline, URL or analytics ID anywhere else.
- Brand tokens live in `src/styles/global.css` and mirror the data room
  front door (`mizan/dataroom/source/index.html`). Use the CSS variables,
  not raw hex values.
- Keep `indexable: false` until the user says the site is launching.
- Analytics must stay cookie-free (Umami only, no localStorage), so the
  site needs no consent banner.

## Before saying a change is done

Run `npm run build` and confirm it succeeds.
