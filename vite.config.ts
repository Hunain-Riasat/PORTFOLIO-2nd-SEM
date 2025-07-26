import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import react from "@vitejs/plugin-react-swc";

import { fileURLToPath } from "url";
import { dirname, resolve } from "path";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Add more plugins here if needed
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  resolve: {
    alias: {
      "@": resolve(dirname(fileURLToPath(import.meta.url)), "src"),
    },
  },
  build: {
    minify: "esbuild",
    cssCodeSplit: true,
    sourcemap: false,
    // Enable better performance for animations and gradients
    assetsInlineLimit: 8192,
  },
}));
