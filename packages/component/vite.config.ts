import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'components',
      formats: ['es', 'umd'],
      fileName: (format) => `components.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        '@mantine/core',
        '@mantine/hook',
      ],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'react/jsx-runtime',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
          '@mantine/core': '@mantine/core',
          '@mantine/hook': '@mantine/hook',
        },
      },
    },
  },
  css: {
    postcss: {},
  },
});
