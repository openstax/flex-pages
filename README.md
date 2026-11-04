# FlexPages 

![logo](./image.png)

## Trying out a change

The `packages/example` app is the easiest way to see a change in a browser. It renders the sample pages in `packages/example/data/` and includes an editor view.

1. Use the Node version in `.nvmrc` (`nvm use`).
2. From the repo root, install and build everything:
   ```sh
   npm install
   npm run build
   ```
3. Start the example app:
   ```sh
   npm --workspace=@project/frontend run dev
   ```
4. Open <http://localhost:3000/flex-pages>.

The example app uses the other packages (renderer, editor, extensions, blocks) through their built output. If you change one of them and the page doesn't update, rebuild that package and reload:

```sh
npm --workspace=@openstax/flex-page-os-blocks run build
```

If that still doesn't help, restart the dev server.

To test a block, open a sample page that uses it. If none does, add a JSON file to `packages/example/data/`.

### Checking the production build

GitHub Pages serves the example app as a static export. To build it the same way:

```sh
npm --workspace=@project/frontend run build
```

### Automated checks

`npm run ci` runs lint, typecheck and spell check across all packages. These checks don't look at how pages render, and the repo has no visual regression tests, so check the visuals by hand.
