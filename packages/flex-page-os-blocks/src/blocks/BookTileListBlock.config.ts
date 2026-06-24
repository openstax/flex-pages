import type { ImageFields } from '@openstax/flex-page-renderer/components/Image.config';
import { linkFieldConfig, type LinkFields } from '@openstax/flex-page-renderer/components/Link.config';
import type { BookData } from '../lib/fetchBooks.js';

/*
 * Serializable block config, kept free of the (client) component module so
 * server/data-only consumers can import it without evaluating React contexts.
 * Mirrors the .config / .component split used by the renderer's blocks.
 *
 * Dropdown items reuse the renderer's `link-target` field shape, so each item
 * is a dynamic link (route / action / url) resolved against the host app's
 * RouteContext/ActionContext — the dialog behaviors (view online, print, etc.)
 * are `action`-typed targets the CMS registers.
 *
 * `menu` is a list of sections (groups of items). Today the renderer flattens
 * them into one menu; the section boundaries are kept so dividers can render
 * once the shared DropdownMenu gains section support upstream.
 */
export const config = {
  type: 'book_tile_list',
  categories: ['content'],
  label: 'Book Tiles',
  description:
    'A grid of book cover tiles, each with an optional overlay badge and a per-book dropdown menu. Covers and titles are loaded from OpenStax book data by UUID; link destinations are configured per book.',
  fields: [
    {name: 'button_text', label: 'Dropdown Button Text', type: 'text',
      help: 'Default dropdown button label for every tile (e.g. "Get the book"). A per-book value overrides this.'},
    {name: 'books', label: 'Books', type: 'list', max: 50, fields: [
      {name: 'id', label: 'Book UUID', type: 'text', required: true},
      {name: 'button_text', label: 'Dropdown Button Text Override', type: 'text',
        help: 'Overrides the block-level button label for this book; also the disabled label when this book has no menu (e.g. "Coming soon").'},
      {name: 'badge', label: 'Badge Image', type: 'image',
        help: 'Optional overlay badge image (e.g. "Available in Assignable" or "Coming soon").'},
      {name: 'badge_alt', label: 'Badge Alt Text', type: 'text'},
      {name: 'title_link', label: 'Cover/Title Link Target', type: 'link-target'},
      {name: 'menu', label: 'Dropdown Menu Sections', type: 'list', fields: [
        {name: 'items', label: 'Items', type: 'list', fields: linkFieldConfig},
      ]},
    ]},
  ],
};

// Serializable block-data types live here (the directive-free module) so both
// the client component and the server prefetch loader import one canonical
// shape — mirrors the renderer keeping LinkFields/ImageFields in *.config.

// One dropdown section (group of items); section boundaries become dividers once
// the shared DropdownMenu supports them. `items` are dynamic links.
export interface BookMenuSection {
  items: LinkFields[];
}

// Per-book configuration. `id` is the cnx UUID used to load cover/title; the
// link destinations are concrete per-book targets supplied by the config author
// (in practice the CMS proxy).
export interface BookTileConfig {
  id: string;
  button_text?: string;
  badge?: ImageFields;
  badge_alt?: string;
  title_link?: LinkFields['target'];
  menu?: BookMenuSection[];
}

export interface BookTileListBlockConfig {
  id: string;
  type: 'book_tile_list';
  value: {
    // default dropdown button label for every tile; a per-book button_text overrides it
    button_text?: string;
    books: BookTileConfig[];
  };
  // book display data hydrated server-side by mapPageNodes (see the prefetch module)
  prefetched?: Record<string, BookData>;
}
