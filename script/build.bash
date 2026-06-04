#!/usr/bin/env bash
# spell-checker: ignore pipefail yargs mkdir withoutspecs commonjs
set -euo pipefail; if [ -n "${DEBUG-}" ]; then set -x; fi

project_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"

cd "$project_dir";

tsc_args=(--noEmit false --declaration)

mkdir -p dist

yarn sass --embed-sources --load-path ../../node_modules/ src/

yarn -s tsc --project tsconfig.without-specs.esm.json "${tsc_args[@]}"
rsync -av --include="*.scss" --include="*.css" --include="*.css.map" --include="*/" --exclude="*" src/ dist/esm/
# Mark the ESM output as a module package so Node classifies its .js files as
# ESM (without setting "type" on the root package, which would flip CJS tooling).
echo '{"type": "module"}' > dist/esm/package.json

yarn -s tsc --project tsconfig.without-specs.cjs.json "${tsc_args[@]}"
rsync -av --include="*.scss" --include="*.css" --include="*.css.map" --include="*/" --exclude="*" src/ dist/cjs/
# Mark the CJS output as CommonJS so its .js files stay CommonJS.
echo '{"type": "commonjs"}' > dist/cjs/package.json
