// @ts-check
import { defineConfig } from 'astro/config';
import { site } from './src/site.config.ts';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: site.url,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
