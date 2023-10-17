import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dtsPlugin from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dtsPlugin(), visualizer(), cssInjectedByJsPlugin()],
  build: {
    sourcemap: true,
    lib: {
      entry: './src/index',
      name: 'component',
      formats: ['es', 'umd'],
      fileName: (format) => `component.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom', '@mantine/core'],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'react/jsx-runtime',
          'react-dom': 'ReactDOM',
          '@mantine/core': '@mantine/core',
          '@tabler/icons-react': '@tabler/icons-react',
        },
      },
    },
    cssMinify: 'esbuild',
  },
  css: {
    transformer: 'postcss',
    devSourcemap: true,
  },
});
