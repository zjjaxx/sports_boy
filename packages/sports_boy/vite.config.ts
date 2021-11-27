import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import { babel } from '@rollup/plugin-babel';
import vueJsx from '@vitejs/plugin-vue-jsx'
//打包自动生成声明文件
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
const isWatch = process.env.build == "watch"
export default defineConfig({
  plugins: [
    vue(),
    dts(),
    vueJsx({})
  ],
  build: {
    watch: isWatch ? {} : null,
    lib: {
      entry: path.resolve(__dirname, './src/main.ts'),
      name: 'sports_boy'
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
