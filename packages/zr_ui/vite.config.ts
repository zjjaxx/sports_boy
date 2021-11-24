import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import { babel } from '@rollup/plugin-babel';
// https://vitejs.dev/config/
const isWatch = process.env.build == "watch"
export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    watch: isWatch ? {} : null,
    lib: {
      entry: path.resolve(__dirname, './src/main.ts'),
      name: 'zr_ui'
    },
    rollupOptions: {
      external: ['vue'],
      plugins: [
        babel({
          skipPreflightCheck: true,
          babelHelpers: 'runtime',
          extensions: ['.js', '.jsx', 'ts', "vue"],
          exclude: '**/node_modules/**' // 只编译我们的源代码
        }),
      ]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
