import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './lib/index.ts',
      name: 'Counter',
      fileName: 'counter',
    },
  },
});
