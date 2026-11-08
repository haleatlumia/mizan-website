import type { APIRoute } from 'astro';
import { site } from '../site.config';

// Lets crawlers in (and points them at the sitemap) when site.indexable is
// on; blocks them entirely when it's off.
export const GET: APIRoute = () => {
  const body = site.indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site.url)}\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
