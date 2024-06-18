import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), icon({
    include: {
      lucide: ["*"]
    }
  }), sitemap()]
});