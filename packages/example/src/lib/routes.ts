/*
 * Shared route definitions for cross-page links. No `fs` here, so this module
 * is safe to import from both server code (lib/pages, the route handler) and
 * client code (FlexPageContextProvider).
 *
 * Two cross-page routes, both resolved through next/navigation so every link
 * gets soft (SPA) navigation:
 *   - `slug`    — `{ params: { slug } }` → the page's current named url. What
 *                 mapPageNodes resolves links to.
 *   - `page-id` — `{ params: { id } }`   → the page's opaque-id permalink
 *                 (`/flex-pages/id/<id>`), which a route handler redirects to
 *                 the slug. The stored form, and the fallback when the mapper
 *                 is absent.
 *
 * Each route exposes two url forms:
 *   - *Path: app-relative (NO basePath) — for router.push(), which applies
 *     basePath itself (passing a basePath'd path double-prefixes it).
 *   - *Href: public url (basePath included) — for rendered <a href>, which is
 *     not basePath-aware.
 */
export const SLUG_ROUTE = 'slug';
export const PAGE_ID_ROUTE = 'page-id';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// '' is the index/home page.
export const slugPath = (slug: string): string => (slug ? `/${slug}` : '/');
export const slugHref = (slug: string): string => `${BASE_PATH}${slugPath(slug)}`;

export const pageIdPath = (id: string): string => `/id/${id}`;
export const pageIdHref = (id: string): string => `${BASE_PATH}${pageIdPath(id)}`;
