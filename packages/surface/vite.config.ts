import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from 'tailwindcss';
import { defineConfig, PluginOption, UserConfigExport } from 'vite';
import compression from 'vite-plugin-compression2';
import dtsPlugin from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { name } from './package.json';

const app = async (): Promise<UserConfigExport> => {
  const formattedName = name.match(/[^/]+$/)?.[0] ?? name;
  return defineConfig({
    plugins: [
      react(),
      visualizer({
        sourcemap: true,
      }) as PluginOption,
      compression(),
      dtsPlugin({ insertTypesEntry: true }),
      libInjectCss(),
    ],
    build: {
      cssMinify: true,
      minify: 'terser',
      sourcemap: true,
      lib: {
        entry: './src/index.ts',
        name: formattedName,
        fileName: (format) => `${formattedName}.${format}.js`,
        formats: ['es', 'umd'],
      },
      rollupOptions: {
        external: ['react', 'react/jsx-runtime', 'react-dom', 'tailwindcss'],
        output: {
          globals: {
            react: 'React',
            'react/jsx-runtime': 'react/jsx-runtime',
            'react-dom': 'ReactDOM',
            tailwindcss: 'tailwindcss',
          },
        },
      },
    },
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  });
};

export default app;
