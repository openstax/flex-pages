/*
 * Resolves display data (title, image, excerpt) for content references by their
 * CMS page id, from the OpenStax CMS pages API. Mirrors lib/fetchBooks.ts but is
 * keyed by Wagtail page id and is type-aware: each referenceable page type maps
 * its own API fields onto the canonical ContentData shape. The block stores only
 * a lean reference; the tile/card hydrates fresh display data here.
 */

// The reference shape emitted by the openstax-cms ContentChooserBlock.
export interface ContentRef {
  id: string;
  type: string; // e.g. "books.book", "news.newsarticle"
}

// Canonical display data, keyed by reference id. `image` is normalized to a URL.
export interface ContentData {
  id: string;
  title: string;
  image?: string;
  excerpt?: string;
}

export type FetchContent = (refs: ContentRef[]) => Promise<Record<string, ContentData>>;

const CMS_BASE = 'https://openstax.org';

// Per-type adapter: which API fields to request, and how to map the raw page
// JSON onto ContentData. Add an entry here to make a new page type referenceable.
interface TypeAdapter {
  fields: string[];
  map: (raw: any) => Omit<ContentData, 'id'>;
}

const ADAPTERS: Record<string, TypeAdapter> = {
  'books.book': {
    fields: ['title', 'cover_url'],
    map: (raw) => ({ title: raw.title, image: raw.cover_url ?? undefined }),
  },
  'news.newsarticle': {
    fields: ['title', 'featured_image_small', 'body_blurb', 'subheading'],
    map: (raw) => ({
      title: raw.title,
      image: raw.featured_image_small?.url ?? undefined,
      excerpt: raw.body_blurb || raw.subheading || undefined,
    }),
  },
};

// Fetch one reference's display data. Returns null on unknown type or fetch error
// so a single bad reference never throws the whole card/page render.
async function fetchOne(ref: ContentRef): Promise<ContentData | null> {
  const adapter = ADAPTERS[ref.type];
  if (!adapter) return null;
  const url = `${CMS_BASE}/apps/cms/api/v2/pages/${ref.id}/?fields=${adapter.fields.join(',')}`;
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const raw = await response.json();
    return { id: ref.id, ...adapter.map(raw) };
  } catch {
    return null;
  }
}

export const fetchContent: FetchContent = async (refs) => {
  const results = await Promise.all(refs.map(fetchOne));
  const byId: Record<string, ContentData> = {};
  for (const data of results) {
    if (data) byId[data.id] = data;
  }
  return byId;
};
