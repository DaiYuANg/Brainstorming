import react from '@vitejs/plugin-react';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import { resolve } from 'path';
import TurboConsole from 'unplugin-turbo-console/vite';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    define: {
      process: {
        env: {
          IS_PREACT: false,
        },
      },
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
      },
    },
    plugins: [
      react(),
      TurboConsole({
        /* options here */
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            excalidraw: ['@excalidraw/excalidraw'],
          },
        },
      },
    },
  },
});
