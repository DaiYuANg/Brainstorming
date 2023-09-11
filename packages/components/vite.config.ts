import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dtsPlugin()],
  build: {
    lib: {
      entry: './src/index',
      name: 'component',
      fileName: 'component',
    },
  },
});
