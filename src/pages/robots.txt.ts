import type { APIRoute } from 'astro';
import { site } from '../site.config';

// Blocks all crawlers until site.indexable is switched on at launch.
export const GET: APIRoute = () => {
  const body = site.indexable
    ? `User-agent: *\nAllow: /\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
