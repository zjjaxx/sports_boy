import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";
import styleImport from "vite-plugin-style-import";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.resolve(
          __dirname,
          "./src/assets/styles/theme.scss"
        )}";`,
      },
    },
  },
  plugins: [
    vue(),
    Components(),
    styleImport({
      include: ["**/*.ts", "**/*.vue"],
      libs: [
        {
          libraryName: "sports_boy",
          esModule: true,
          resolveStyle: (name) => {
            return `../src/theme/${name}.scss`;
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
