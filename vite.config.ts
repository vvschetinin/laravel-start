import path from "path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import type { UserConfig } from "vite";

const aliases = {
  "@": fileURLToPath(new URL("./resources", import.meta.url)),
  "@scss": fileURLToPath(new URL("./resources/assets/scss", import.meta.url)),
};

export default defineConfig(
  ({ mode }) =>
  ({
    plugins: [
      laravel({
        input: ["resources/main.ts"], // Исправлено на resources/css, если не менял структуру
        refresh: true,
      }),
    ],
    resolve: {
      alias: aliases,
    },
    css: {
      postcss: "./postcss.config.js",
      devSourcemap: mode === "development",
    },
  }) as UserConfig,
);
