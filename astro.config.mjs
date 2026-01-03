// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://dainty-entremet-014c1e.netlify.app/",
  integrations: [preact()]
});