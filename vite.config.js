import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Copy manifest.json to dist after build
const copyManifest = () => {
  return {
    name: 'copy-manifest',
    closeBundle() {
      copyFileSync('./public/manifest.json', './dist/manifest.json');
    }
  };
};

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'popup.html'),
      },
    },
  },
});