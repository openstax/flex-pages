
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
 * is also the entry point for the UMD / <script>-tag build. ./lib/mapPageNodes
 * stays off it deliberately: it's a data-layer transform, not a render concern,
 * and is reached via its own subpath import. It parses HTML with an injected
 * parser (defaulting to the native DOMParser), so it carries no server-only DOM
 * dependency and runs in either environment.
 */
export * from './ContentBlockRoot';        // ContentBlockRoot + ContentBlockContext types
export * from './FlexPageContextProvider'; // provider + ActionContext / RouteContext
export * as blocks from './blocks';        // built-in block registry ({ Component, fields } per type)
