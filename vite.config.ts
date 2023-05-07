// import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'uikit': path.resolve(__dirname, './node_modules/uikit/dist/js/uikit.min.js'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@library': path.resolve(__dirname, './src/components/library'),
      '@assets': path.resolve(__dirname, './src/assets')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/_mixins.scss";
        `
      }
    }
  },
});
