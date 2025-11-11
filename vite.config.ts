import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/@'),
      types: path.resolve(__dirname, 'src/types'),
      constants: path.resolve(__dirname, 'src/constants'),
      utils: path.resolve(__dirname, 'src/utils'),
      models: path.resolve(__dirname, 'src/models'),
      socket: path.resolve(__dirname, 'src/socket'),
      store: path.resolve(__dirname, 'src/store'),
      components: path.resolve(__dirname, 'src/components'),
      services: path.resolve(__dirname, 'src/services'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      screens: path.resolve(__dirname, 'src/screens'),
      styles: path.resolve(__dirname, 'src/assets/styles')
    }
  }
});
