// Component barrel: each block is a { Component, config } namespace keyed by its
// block type. Consumers merge this into the renderer's block map.
export * as book_tile_list from './BookTileListBlock.js';
// Webinars from the OpenStax feed: upcoming grid, filterable past library, and
// a single featured webinar.
export * as webinar_upcoming from './WebinarUpcomingBlock.js';
export * as webinar_library from './WebinarLibraryBlock.js';
export * as webinar_highlight from './WebinarHighlightBlock.js';
// OpenStax variant of the renderer's rich-text block: identical content render,
// plus the openstax-cms editor stylesheet (scoped to this block via a marker
// class). Offered under the renderer's `text` key as a drop-in override; a host
// can instead register it under a separate key to use both versions side by side
// (the example app exposes it as `os_text`).
export * as text from './RichTextOverrideBlock.js';
