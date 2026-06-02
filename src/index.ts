
export type ConfigField = {
  name: string;
  label: string;
  help?: string;
  type: string;
  [key: string]: unknown;
};

export { resolveContentBlocks } from './resolveContentBlocks';

/*
 * Render surface — everything a consumer needs to draw a Flex page. This barrel
 * is also the entry point for the UMD / <script>-tag build, so it must stay free
 * of server-only modules: notably ./lib/mapPageNodes, which imports jsdom (a
 * Node-only library that cannot bundle for the browser). That data-layer helper
 * stays available via its own subpath import; it deliberately does not belong on
 * the render root.
 */
export * from './ContentBlockRoot';        // ContentBlockRoot + ContentBlockContext types
export * from './FlexPageContextProvider'; // provider + ActionContext / RouteContext
export * as blocks from './blocks';        // built-in block registry ({ Component, fields } per type)
