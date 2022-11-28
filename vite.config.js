import { defineConfig } from 'vite'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, 'lib'),
      // vue: 'vue/dist/vue.esm.js',
    }
  },
  plugins: [vue2({
    jsx: true
  })],
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      formats: ['es', 'umd'],
      name: 'TrialModule',
      fileName: 'vue2-library'
    },
    rollupOptions: {
      external: ['vue2']
    }
  }, 
})
