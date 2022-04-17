import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/web-components/index.ts'),
      name: 'BarChart',
      fileName: (format) => `bar-chart.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'd3', '@faker-js/faker'],
      output: {
        globals: {
          vue: 'vue',
          d3: 'd3',
          faker: '@faker-js/faker'
        }
      }
    }
  }
})
