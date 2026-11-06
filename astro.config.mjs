import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config.ts';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  // Temporaneo: finché la home non è costruita, la root manda alla landing del sito.
  redirects: { '/': '/sito/' },
  integrations: [sitemap({ filter: (page) => !/\/(privacy|cookie)\/?$/.test(page) })],
  vite: { plugins: [tailwindcss()] },
});
