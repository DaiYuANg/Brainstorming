import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, type PluginOption } from 'vite';
import electron from 'vite-plugin-electron';
import renderer from 'vite-plugin-electron-renderer';

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    react() as PluginOption,
    visualizer() as PluginOption,
    electron([
      {
        // Main-Process entry file of the Electron App.
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
  ],
  build: {
    // minify: 'terser',
    target: 'modules',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  // // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  // //
  // // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    // strictPort: true,
  },
  // // 3. to make use of `TAURI_DEBUG` and other env variables
  // // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
}));
