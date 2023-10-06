import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import TurboConsole from "vite-plugin-turbo-console";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),TurboConsole()],
  server: {
    open: true,
  },
});
