import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import styleImport from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components(),
    styleImport({
      include: ['**/*.ts', '**/*.vue'],
      libs: [
        {
          libraryName: 'sports_boy',
          esModule: true,
          resolveStyle: name => {
            return `../theme/${name}.css`
          },
        }
      ]
    })
  ]
})
