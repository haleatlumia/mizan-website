// Site-wide settings. Change these here, nowhere else.

export const site = {
  name: 'Mizan',
  eyebrow: 'Precision Health & Wellness',
  tagline: "A precision health and wellness members' club for the practice of balance.",
  description: "Mizan is a precision health and wellness members' club for the practice of balance.",

  // Final public URL. Used for canonical links and the sitemap.
  // TODO: set this once the domain is decided.
  url: 'https://example.com',

  // Keep false until launch. While false, every page ships with
  // <meta name="robots" content="noindex, nofollow"> and robots.txt
  // blocks crawlers, so search engines don't index the site early.
  indexable: false,

  // Umami website ID for THIS site (create a new website in Umami;
  // don't reuse the data room's ID, or the two sites' numbers mix).
  // Leave empty to ship with no analytics at all.
  umamiWebsiteId: '',

  // Shown in the footer.
  markets: ['Ankara', 'Doha', 'Istanbul', 'Miami', 'Dallas', 'New York'],
} as const;
