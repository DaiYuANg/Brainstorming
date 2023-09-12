import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dtsPlugin()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'api',
      fileName: 'api',
    },
  },
});
