import { defineConfig } from 'tsup';
import { peerDependencies } from './package.json';
import svgrPlugin from 'esbuild-plugin-svgr';
import { sassPlugin } from 'esbuild-sass-plugin';

// https://tsup.egoist.dev/
export default defineConfig((options) => ({
  // The entry file(s) for your library.
  entry: ['src/index.ts'],

  // The output formats. 'cjs' is for CommonJS, 'esm' is for ES Modules.
  format: ['cjs', 'esm'],

  // Directory to output the built files.
  outDir: 'dist',

  // tsup uses the entry file name as the base for the output.
  // Your `package.json` exports will point to `dist/index.cjs` and `dist/index.es.js`.
  outExtension({ format }) {
    if (format === 'cjs') return { js: '.cjs' };
    if (format === 'esm') return { js: '.es.js' };
    return { js: '.js' };
  },

  // Generate TypeScript declaration files (.d.ts).
  dts: true,

  // Clean the output directory before each build.
  clean: true,

  // Create source maps for debugging.
  sourcemap: true,

  // Minify the output code in production.
  // tsup minifies by default when not in watch mode, but being explicit is fine.
  minify: !options.watch,

  // Externalize peer dependencies so they are not bundled.
  external: Object.keys(peerDependencies),

  // Use the SVGR plugin to handle SVG files as React components.
  // You will need to install this plugin: `npm i -D tsup-plugin-svgr`
  esbuildPlugins: [
    // cssModulePlugin({
    //   generateScopedName: '[name]__[local]__[hash:base64:5]',
    // }),
    // cssplugin,
    sassPlugin(),
    svgrPlugin({ template }),
  ],
  loader: {
    '.css': 'css', // change from 'local-css' to 'css'
    '.scss': 'css', // add this line to handle scss files as css
    '.aac': 'base64',
    '.eot': 'base64',
    '.flac': 'base64',
    '.gif': 'base64',
    '.jpeg': 'base64',
    '.jpg': 'base64',
    '.mp3': 'base64',
    '.mp4': 'base64',
    '.ogg': 'base64',
    '.otf': 'base64',
    '.png': 'base64',
    '.svg': 'base64',
    '.ttf': 'base64',
    '.wav': 'base64',
    '.webm': 'base64',
    '.webp': 'base64',
    '.woff': 'base64',
    '.woff2': 'base64',
  },

  // Ensure React 17+ JSX transform is used.
  jsx: 'react-jsx',
  watch: false,

  // tsup handles code splitting, but for a component library,
  // a single file per format is often preferred.
  splitting: false,
}));

function template(variables, { tpl }) {
  return tpl`
      ${variables.imports};
      ${variables.interfaces};
      const ${variables.componentName} = (${variables.props}) => (
        ${variables.jsx}
      ); 
      ${variables.exports};
      export const ReactComponent = ${variables.componentName};
    `;
}
