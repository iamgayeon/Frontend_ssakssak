import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        // changeOrigin: true,
      },
    },
  },
  build: {
    // outDir: '../Board_Backend/src/main/webapp/resources',
    outDir: 'dist'
  },
});
