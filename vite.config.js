import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "shri2025-task",
  plugins: [react()],
  //   build: {
  //     assetsInlineLimit: 0,
  //     rollupOptions: {
  //       output: {
  //         manualChunks: {
  //           react: ["react", "react-dom"],
  //         },
  //       },
  //     },
  //   },
});
