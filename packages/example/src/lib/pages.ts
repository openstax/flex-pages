import fs from 'fs';
import path from 'path';
import type { LinkMapper } from '@openstax/flex-page-renderer/lib/mapPageNodes';
import type { Metadata } from 'next';
import { PAGE_ID_ROUTE, SLUG_ROUTE, slugHref } from './routes';

// Appended to every page title so data files carry only their own bare title.
export const SITE_NAME = 'Flex Pages';

const dataDir = path.join(process.cwd(), 'data');

export type PageMetadata = {
  title: string;
  description: string;
  // Configurable, human-readable route for this page, decoupled from its id
  // (the file name). '' is the index / home page.
  url: string;
};

export type PageFile = {
  metadata: PageMetadata;
  page: unknown[];
};

type Entry = { id: string; url: string; file: string };

/*
 * Load every page once and index it two ways:
 *   - by id  (the file name, an opaque UUID) — the stable key links are stored
 *     against, so a page's url can change without breaking inbound links.
 *   - by url (the configurable named route in metadata) — what we serve and
 *     what cross-page links resolve to.
 * With `output: 'export'` this runs at build time.
 */
function loadRegistry() {
  const byId = new Map<string, Entry>();
  const byUrl = new Map<string, Entry>();
  for (const file of fs.readdirSync(dataDir)) {
    if (!file.endsWith('.json')) continue;
    const { metadata } = JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf-8')) as PageFile;
    const entry: Entry = { id: file.replace(/\.json$/, ''), url: metadata.url, file };
    byId.set(entry.id, entry);
    byUrl.set(entry.url, entry);
  }
  return { byId, byUrl };
}

const registry = loadRegistry();

function readPage(file: string): PageFile {
  return JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf-8'));
}

// Resolve a stored page id (UUID) to its current named slug, or null if no
// page carries that id (a stale link). '' is the index/home page.
export function slugForId(id: string): string | null {
  const entry = registry.byId.get(id);
  return entry ? entry.url : null;
}

// Resolve a stored page id to its current public href — used by the permalink
// route handler's redirect.
export function hrefForId(id: string): string | null {
  const slug = slugForId(id);
  return slug === null ? null : slugHref(slug);
}

// Named routes for generateStaticParams — every page except the index.
export function getPageUrls(): string[] {
  return Array.from(registry.byUrl.keys()).filter(Boolean);
}

// Every page id (UUID) — for the id permalink route's generateStaticParams.
export function getPageIds(): string[] {
  return Array.from(registry.byId.keys());
}

export function getPageByUrl(url: string): PageFile | null {
  const entry = registry.byUrl.get(url);
  return entry ? readPage(entry.file) : null;
}

export function getHomePage(): PageFile | null {
  return getPageByUrl('');
}

// Build Next page metadata from a page's stored metadata, appending the site
// name to the title. Both the home and slug routes go through here so the
// suffix lives in one place rather than in the layout's title template, which
// would not reach the home page (it shares the root layout's own segment).
export function pageMetadata(meta: PageMetadata): Metadata {
  return { title: `${meta.title} | ${SITE_NAME}`, description: meta.description };
}

/*
 * mapPageNodes linkMapper: rewrites the stored `page-id` route to a `slug` route
 * carrying the page's current named url. Both routes resolve through
 * RouteContext (see FlexPageContextProvider), so links navigate via
 * next/navigation either way — this mapper just collapses the id→slug lookup at
 * the data layer so links point straight at the slug page instead of bouncing
 * through the id permalink's redirect. Dropping the mapper degrades gracefully:
 * links stay `page-id` routes and resolve to the permalink at render time.
 * Every other target (external / anchor / action, or any other route) passes
 * through untouched. An id that no longer resolves throws — this runs
 * server-side, so a dangling cross-page link fails loudly instead of silently
 * shipping a dead link.
 */
export const resolvePageLinks: LinkMapper = (target) => {
  if (target.type !== 'route' || target.value !== PAGE_ID_ROUTE) return target;
  const id = target.params?.id;
  const slug = id ? slugForId(id) : null;
  if (slug === null) {
    throw new Error(`resolvePageLinks: no page found for ${PAGE_ID_ROUTE} route ${JSON.stringify(target.params)}`);
  }
  return { type: 'route', value: SLUG_ROUTE, params: { slug } };
};
