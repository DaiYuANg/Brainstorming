import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dtsPlugin()],
  build: {
    sourcemap: true,
    lib: {
      entry: './src/index.ts',
      name: 'types',
      fileName: 'types',
    },
  },
});
