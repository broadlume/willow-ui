import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
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
      '@components': '/src/components',
      '@src': '/src',
      '@': './*',
    },
  },
});
