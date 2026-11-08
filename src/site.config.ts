// Site-wide settings. Change these here, nowhere else.

export const site = {
  name: 'Mizan',
  pillars: ['Movement', 'Recovery', 'Measurement', 'Nourishment', 'Community'],
  tagline: "A members' club for the practice of balance.",
  description:
    "Mizan is a precision health and wellness members' club bringing movement, recovery, measurement, nourishment and community into one membership. Join the waitlist.",

  // Public URL, used for canonical links and the link-preview image.
  // The domain is registered at Namecheap; DNS points it at Netlify.
  url: 'https://mizanexperience.com',

  // Search engines may index the site (switched on 2026-11-08). Set to
  // false to add <meta name="robots" content="noindex, nofollow"> to every
  // page and block crawlers in robots.txt.
  indexable: true,

  // Umami website ID for this site: "Mizan website" in the
  // hale@lumiapartners.com Umami Cloud account. (The data room has its own
  // ID in the hale0yildiz@gmail.com account; don't mix them.)
  // Leave empty to ship with no analytics at all.
  umamiWebsiteId: '32c24b81-f643-4f6f-a63f-bce590a2d630',

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
