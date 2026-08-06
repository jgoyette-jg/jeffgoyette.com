// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jeffgoyette.com',

  // Fonts are downloaded and self-hosted at build time: no Google CDN request,
  // no render-blocking stylesheet, no layout shift. Referenced via the CSS
  // variables below (see src/styles/global.css).
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Familjen Grotesk',
      cssVariable: '--font-display',
      weights: [400, 500, 600, 700],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Newsreader',
      cssVariable: '--font-body',
      weights: [300, 400, 500],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      subsets: ['latin'],
    },
  ],
});
