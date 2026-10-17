import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Pour GitHub Pages : définir VITE_BASE=/solay-beauty-frontend/ au build.
// En local (dev / preview) la base reste "/".
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  server: { host: "::", port: 8080 },
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
