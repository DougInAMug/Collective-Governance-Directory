import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      // allow data download to not break dev build
      allow: ['/home/doug/Collective-Governance-Directory/static'],
    },
  },
});
