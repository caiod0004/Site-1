import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config.ts';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (page) => !/\/(privacy|cookie)\/?$/.test(page) })],
  vite: { plugins: [tailwindcss()] },
});
