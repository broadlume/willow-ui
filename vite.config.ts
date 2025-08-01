import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';
import { peerDependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ['src'],
    }),
    svgr(),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'willow-ui',
      formats: ['es', 'cjs'],
      fileName: (format) => `willow-ui.${format === 'cjs' ? 'cjs' : 'es.js'}`,
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
    },
    minify: true,
  },
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@src': resolve(__dirname, './src'),
      '@': resolve(__dirname, '.'),
    },
  },
});
