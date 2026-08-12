// Registering this file (`--import ./script/test/css-noop-loader.mjs`, before
// `--import tsx`) makes bare `.css`/`.scss` imports resolve to an empty module
// instead of erroring, so block components can be imported under `node --test`
// without a bundler. Style imports are side-effect-only for these components
// (see generateBlockDocs.ts's comment on why docs generation avoids importing
// components at all to dodge this same problem) — an empty module is a
// faithful stand-in for test purposes.
//
// tsx compiles this package's TS down to CommonJS (tsconfig `module:
// commonjs`), so the relevant hook is the classic CJS resolver/extension
// pair, not the ESM loader hooks — those only see modules tsx emits as ESM.
import Module from 'node:module';

const STYLE_EXTENSIONS = ['.css', '.scss'];
const isStyleRequest = (request) => STYLE_EXTENSIONS.some((ext) => request.endsWith(ext));

const originalResolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, ...rest) {
  if (isStyleRequest(request)) return request;
  return originalResolveFilename.call(this, request, ...rest);
};

for (const ext of STYLE_EXTENSIONS) {
  Module._extensions[ext] = (mod) => {
    mod.exports = {};
  };
}
