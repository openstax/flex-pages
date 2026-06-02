#!/usr/bin/env bash
# spell-checker: ignore pipefail yargs mkdir withoutspecs umd
set -euo pipefail; if [ -n "${DEBUG-}" ]; then set -x; fi

project_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"

cd "$project_dir";

tsc_args=(--noEmit false --declaration)

mkdir -p dist

yarn sass --embed-sources --load-path ../../node_modules/ src/

yarn -s tsc --project tsconfig.without-specs.esm.json "${tsc_args[@]}"
rsync -av --include="*.scss" --include="*.css" --include="*.css.map" --include="*/" --exclude="*" src/ dist/esm/ 
yarn -s tsc --project tsconfig.without-specs.cjs.json "${tsc_args[@]}"
rsync -av --include="*.scss" --include="*.css" --include="*.css.map" --include="*/" --exclude="*" src/ dist/cjs/

# UMD bundle for <script>-tag / global consumers. Bundles the ESM output above
# (react/react-dom externalized to window globals) into dist/umd/ with one
# extracted stylesheet. See rollup.config.mjs for the externalization rationale.
yarn -s rollup -c rollup.config.mjs
