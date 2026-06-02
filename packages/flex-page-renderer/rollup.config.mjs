// UMD bundle for <script>-tag / global consumers.
//
// Input is the already-compiled ESM output (dist/esm/index.js), so this step
// runs AFTER the tsc/sass passes in script/build.bash and simply bundles +
// wraps them. The entry is src/index.ts's barrel, which is jsdom-free by
// construction (it never imports ./lib/mapPageNodes), so the Node-only jsdom
// dependency never enters the graph.
//
// React and ReactDOM are externalized to the host page's globals (window.React
// / window.ReactDOM) — the CSP-friendly, no-bundler delivery the script-tag use
// case wants. Everything else (classnames, color, the browser build of
// isomorphic-dompurify, and the react/jsx-runtime shim) is bundled. jsx-runtime
// is intentionally NOT externalized: it gets bundled, and its own require of
// 'react' binds to the external global.
//
// CSS is extracted to a single sibling stylesheet rather than injected at
// runtime, so consumers add one <link> and avoid the `style-src 'unsafe-inline'`
// CSP requirement that runtime injection would impose.

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

const dir = path.dirname(fileURLToPath(import.meta.url));

export default {
  input: path.join(dir, 'dist/esm/index.js'),
  output: {
    file: path.join(dir, 'dist/umd/flex-page-renderer.js'),
    format: 'umd',
    name: 'FlexPageRenderer',
    exports: 'named',
    sourcemap: true,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  external: ['react', 'react-dom'],
  plugins: [
    resolve({ browser: true, preferBuiltins: false }),
    commonjs(),
    postcss({
      extract: path.join(dir, 'dist/umd/flex-page-renderer.css'),
      minimize: true,
      sourceMap: true,
    }),
  ],
};
