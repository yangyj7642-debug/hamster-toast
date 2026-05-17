import { defineConfig } from "@apps-in-toss/web-framework/config";
export default defineConfig({
  appName: "hamster-toast",
  brand: {
    displayName: "Toast Toss",
    primaryColor: "#FF8C42",
    icon: "",
  },
  web: {
    host: "localhost",
    port: 5173,
    commands: {
      dev: "vite dev",
      build: "vite build",
    },
  },
  webViewProps: {
    type: "game",
  },
  permissions: [],
  outdir: "dist",
});