import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, searchForWorkspaceRoot } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      // allow data download to not break dev build
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        '/home/doug/Collective-Governance-Directory/static/CollectiveGovernanceDirectoryData.json',
        '/home/doug/Collective-Governance-Directory/static/CollectiveGovernanceDirectoryData.csv',
      ],
    },
  },
});
