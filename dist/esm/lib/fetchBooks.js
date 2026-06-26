/*
 * Loads display data (cover, title, slug) for OpenStax books by their cnx
 * (CNX/archive) UUID. This is the standard book-data lookup shared across
 * OpenStax apps, baked into this package so consumers don't reimplement it.
 *
 * Why a single CMS query and not the full rex `release.json` -> archive
 * `contents` -> CMS flow: those first two steps exist to resolve a book's
 * view-online (rex) link and active version. In flex pages those destinations
 * are supplied as concrete per-book link targets in the block config (by the
 * CMS proxy), so the tile itself only needs *display* data — cover, title,
 * slug — all of which live on the CMS `books.Book` page type.
 *
 * Override the default via `createBookTileList(fetchBooks)` when a consumer has
 * its own (e.g. cache-backed) source.
 */
const CMS_BOOKS_URL = 'https://openstax.org/apps/cms/api/v2/pages/?type=books.Book&fields=cnx_id,title,slug,cover_url&limit=250';
// The full books list is small and changes rarely, so we fetch it once and
// index by cnx_id. Cached at module scope (mirrors os-webview's book models).
let allBooksPromise;
function loadAllBooks() {
    if (!allBooksPromise) {
        allBooksPromise = fetch(CMS_BOOKS_URL)
            .then((response) => response.json())
            .then((data) => {
            const byId = {};
            for (const book of data.items) {
                byId[book.cnx_id] = {
                    id: book.cnx_id,
                    title: book.title,
                    slug: book.slug,
                    coverUrl: book.cover_url,
                };
            }
            return byId;
        })
            .catch((err) => {
            allBooksPromise = undefined; // allow a later retry
            throw new Error(`Fetching OpenStax books: ${err}`);
        });
    }
    return allBooksPromise;
}
export const fetchBooks = async (ids) => {
    const byId = await loadAllBooks();
    const result = {};
    for (const id of ids) {
        if (byId[id]) {
            result[id] = byId[id];
        }
    }
    return result;
};
