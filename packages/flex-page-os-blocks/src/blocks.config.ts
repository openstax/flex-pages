// Config-only barrel for server/data-only environments, mirroring the renderer's
// blocks.config split — exposes block `config` without the client component.
export * as book_tile_list from './blocks/BookTileListBlock.config.js';
export * as webinar_upcoming from './blocks/WebinarUpcomingBlock.config.js';
export * as webinar_library from './blocks/WebinarLibraryBlock.config.js';
export * as webinar_highlight from './blocks/WebinarHighlightBlock.config.js';
