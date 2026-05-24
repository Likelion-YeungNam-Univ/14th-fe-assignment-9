import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 아래 내용을 추가합시다!
  server: {
    open: true,
  },
});
