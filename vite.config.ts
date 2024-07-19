import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "./",
  plugins: [react(), viteTsConfigPaths()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
