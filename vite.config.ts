import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  define: {
    process: {
      env: {
        IS_PREACT: false,
      },
    },
  },
  plugins: [react()],
});
