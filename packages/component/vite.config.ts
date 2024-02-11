import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts({
    insertTypesEntry: true,
  })],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'component',
      formats: ['es', 'umd'],
      fileName: (format) => `component.${format}.js`,
    },
  },
  css: {
    postcss: {},
  },
});
