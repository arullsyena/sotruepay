import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(
        path.resolve(__dirname, "sotruepay/nginx/ssl/cert.key")
      ), // Path to your key file
      cert: fs.readFileSync(
        path.resolve(__dirname, "sotruepay/nginx/ssl/cert.pem")
      ), // Path to your cert file
    },
    port: 3000, // Change this to your desired port, e.g., 3000
  },
});
