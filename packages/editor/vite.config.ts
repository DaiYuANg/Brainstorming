import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'editor',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
});
