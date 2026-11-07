// Site-wide settings. Change these here, nowhere else.

export const site = {
  name: 'Mizan',
  pillars: ['Movement', 'Recovery', 'Measurement', 'Nourishment', 'Community'],
  tagline: "A members' club for the practice of balance.",
  description:
    "Mizan is a precision health and wellness members' club bringing movement, recovery, measurement, nourishment and community into one membership. Join the waitlist.",

  // Final public URL. Used for canonical links.
  // TODO: set this once the domain is decided.
  url: 'https://mizan-website.netlify.app',

  // Keep false until launch. While false, every page ships with
  // <meta name="robots" content="noindex, nofollow"> and robots.txt
  // blocks crawlers, so search engines don't index the site early.
  indexable: false,

  // Umami website ID for THIS site (create a new website in Umami;
  // don't reuse the data room's ID, or the two sites' numbers mix).
  // Leave empty to ship with no analytics at all.
  umamiWebsiteId: '',

  // Cities shown on the site and offered in the waitlist form, in display
  // order. Set by Hale for the website; this list differs from the data
  // room's markets line (London here, Doha there).
  cities: [
    { name: 'Miami', country: 'United States', tz: 'America/New_York', lat: 25.7617, lng: -80.1918 },
    { name: 'Ankara', country: 'Türkiye', tz: 'Europe/Istanbul', lat: 39.9334, lng: 32.8597 },
    { name: 'Istanbul', country: 'Türkiye', tz: 'Europe/Istanbul', lat: 41.0082, lng: 28.9784 },
    { name: 'London', country: 'United Kingdom', tz: 'Europe/London', lat: 51.5072, lng: -0.1276 },
    { name: 'Dallas', country: 'United States', tz: 'America/Chicago', lat: 32.7767, lng: -96.797 },
    { name: 'New York', country: 'United States', tz: 'America/New_York', lat: 40.7128, lng: -74.006 },
  ],
} as const;

export type City = (typeof site.cities)[number];
