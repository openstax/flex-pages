/*
 * Resolves display data (title, image, excerpt) for content references by their
 * CMS page id, from the OpenStax CMS pages API. Mirrors lib/fetchBooks.ts but is
 * keyed by Wagtail page id and is type-aware: each referenceable page type maps
 * its own API fields onto the canonical ContentData shape. The block stores only
 * a lean reference; the tile/card hydrates fresh display data here.
 */
const CMS_BASE = 'https://openstax.org';
const ADAPTERS = {
    'books.book': {
        fields: ['title', 'cover_url'],
        map: (raw) => { var _a; return ({ title: raw.title, image: (_a = raw.cover_url) !== null && _a !== void 0 ? _a : undefined }); },
    },
    'news.newsarticle': {
        fields: ['title', 'featured_image_small', 'body_blurb', 'subheading'],
        map: (raw) => {
            var _a, _b;
            return ({
                title: raw.title,
                image: (_b = (_a = raw.featured_image_small) === null || _a === void 0 ? void 0 : _a.url) !== null && _b !== void 0 ? _b : undefined,
                excerpt: raw.body_blurb || raw.subheading || undefined,
            });
        },
    },
};
// Fetch one reference's display data. Returns null on unknown type or fetch error
// so a single bad reference never throws the whole card/page render.
async function fetchOne(ref) {
    const adapter = ADAPTERS[ref.type];
    if (!adapter)
        return null;
    const url = `${CMS_BASE}/apps/cms/api/v2/pages/${ref.id}/?fields=${adapter.fields.join(',')}`;
    try {
        const response = await fetch(url);
        if (!response.ok)
            return null;
        const raw = await response.json();
        return { id: ref.id, ...adapter.map(raw) };
    }
    catch {
        return null;
    }
}
export const fetchContent = async (refs) => {
    const results = await Promise.all(refs.map(fetchOne));
    const byId = {};
    for (const data of results) {
        if (data)
            byId[data.id] = data;
    }
    return byId;
};
