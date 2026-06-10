#!/usr/bin/env bash
# spell-checker: ignore pipefail readdir
set -euo pipefail; if [ -n "${DEBUG-}" ]; then set -x; fi

project_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." >/dev/null 2>&1 && pwd )"

cd "$project_dir"

# packages that must be built before other ones (in this order)
build_order=( \
  "@openstax/flex-page-renderer" \
  "@openstax/flex-page-editor" \
  "@openstax/flex-page-editor-quill-extension" \
  "@openstax/flex-page-editor-select-extension" \
)

# all other packages
all_packages=$(node -e "process.stdout.write(require('fs').readdirSync('./packages').map(d=>{try{return require('./packages/'+d+'/package.json').name}catch(e){return null}}).filter(Boolean).join(' '))")
remaining_packages=$(echo "${build_order[@]}" "$all_packages" | tr ' ' '\n' | sort | uniq -u)

# build em
for package in "${build_order[@]}" $remaining_packages; do
  label="${package##*/}"
  echo "building $package ..."
  npm --workspace="$package" run build:clean 2>&1 | sed "s/^/[$label] /"
done
