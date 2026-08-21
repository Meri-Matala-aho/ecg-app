// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://meri-matala-aho.github.io/ecg-app',
  base: '/ecg-app',
  integrations: [react()]
});