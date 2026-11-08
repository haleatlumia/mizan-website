import type { APIRoute } from 'astro';
import { site } from '../site.config';
import { pillars, spaces } from '../data/club';

// llms.txt (https://llmstxt.org): a plain-Markdown summary of the site for
// AI assistants and answer engines, built from the same data as the page.
export const GET: APIRoute = () => {
  const home = new URL('/', site.url).href;
  const body = `# ${site.name}

> ${site.description}

Mizan is ${site.tagline.replace(/^A /, 'a ').replace(/\.$/, '')}. The name is an old word for balance: not something you reach once and hold, but something you practise a little every day. Mizan is a membership, not a clinic, gym or spa: it brings five parts of preventive health into one club and one plan, with measurement at the centre.

The idea draws on Ibn Sina (Avicenna), whose Canon of Medicine described mizaj (each person's unique constitution) and mizan (health as the ongoing work of keeping that constitution in balance). Mizan adds modern measurement to that tradition.

## Cities

Membership opens city by city:

${site.cities.map((c) => `- ${c.name}, ${c.country}`).join('\n')}

## The five pillars

${pillars.map((p) => `- **${p.name}** (${p.native}) ${p.role} ${p.body}`).join('\n')}

## The club

${spaces.map((s) => `- **${s.name}** (${s.wing}): ${s.line}`).join('\n')}

Images on the site are concept renders. Spaces, amenities and programming may vary by location.

## Join

- [Join the waitlist](${home}#waitlist): first and last name, email and preferred city.
- [Website](${home})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
