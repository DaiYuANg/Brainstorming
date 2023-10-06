import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, type PluginOption } from 'vite';
import electron from 'vite-plugin-electron';
import renderer from 'vite-plugin-electron-renderer';
import TurboConsole from "vite-plugin-turbo-console";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    react() as PluginOption,
    visualizer() as PluginOption,
    electron([
      {
        // MainLayout-Process entry file of the Electron App.
        entry: 'src-electron/main.ts',
      },
      {
        entry: 'src-electron/preload.ts',
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
          // instead of restarting the entire Electron App.
          options.reload();
        },
      },
    ]),
    renderer(),
    TurboConsole()
  ],
  build: {
    minify: true,
    target: 'modules',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  clearScreen: true,
  server: {
    port: 1420,
  },
}));
