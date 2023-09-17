import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dtsPlugin()],
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
  },
});
