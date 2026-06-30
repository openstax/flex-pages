// Loads recent Rice News articles (Drupal JSON:API), mapped to display data.
// Directive-free so it runs from both the server prefetch and the client fetch.

export interface Article {
  id: string;
  title: string;
  // Pre-formatted "Month YYYY" (UTC) so server and client render identical text.
  dateLabel: string;
  summary: string;
  url: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface FetchArticlesOptions {
  count: number;
  tagId?: string;
}

export type FetchArticles = (options: FetchArticlesOptions) => Promise<Article[]>;

const NEWS_BASE_URL = 'https://news.rice.edu';
// The edge 406s the default Node UA (and `application/vnd.api+json`), so send a
// versioned UA and leave Accept at the fetch default.
const REQUEST_HEADERS = { 'User-Agent': 'openstax-flex-pages/1.0 (+https://openstax.org)' };
export const DEFAULT_TAG_ID = '1236';
export const DEFAULT_ARTICLE_COUNT = 3;

interface RawRef {
  type: string;
  id: string;
  meta?: { alt?: string };
}

interface RawArticle {
  id: string;
  attributes: {
    title: string;
    created: string;
    drupal_internal__nid?: number;
    path?: { alias?: string };
    body?: { summary?: string; processed?: string; value?: string };
  };
  relationships?: {
    field_featured_image?: { data?: RawRef | null };
  };
}

interface RawIncluded {
  type: string;
  id: string;
  attributes?: { uri?: { url?: string } };
  relationships?: { field_media_image?: { data?: RawRef | null } };
}

// Walk article -> media--image -> file--file in `included`; any missing hop
// yields no image.
function resolveFeaturedImage(
  raw: RawArticle,
  byId: Map<string, RawIncluded>,
): { imageUrl?: string; imageAlt?: string } {
  const mediaRef = raw.relationships?.field_featured_image?.data;
  if (!mediaRef) return {};
  const media = byId.get(`${mediaRef.type}:${mediaRef.id}`);
  const fileRef = media?.relationships?.field_media_image?.data;
  if (!fileRef) return {};
  const file = byId.get(`${fileRef.type}:${fileRef.id}`);
  const url = file?.attributes?.uri?.url;
  if (!url) return {};
  return {
    imageUrl: url.startsWith('/') ? `${NEWS_BASE_URL}${url}` : url,
    imageAlt: fileRef.meta?.alt,
  };
}

const SUMMARY_MAX_LENGTH = 240;

// "2026-01-26T16:01:45+00:00" -> "January 2026" (fixed locale + UTC).
function formatMonthYear(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

// Plain-text snippet fallback when the feed has no `body.summary`.
function htmlToSummary(html: string): string {
  const text = html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > SUMMARY_MAX_LENGTH
    ? `${text.slice(0, SUMMARY_MAX_LENGTH).trimEnd()}…`
    : text;
}

function toArticle(raw: RawArticle, byId: Map<string, RawIncluded>): Article {
  const { attributes } = raw;
  const body = attributes.body ?? {};
  const summary = (body.summary && body.summary.trim())
    || htmlToSummary(body.processed || body.value || '');
  const alias = attributes.path?.alias;
  const url = alias
    ? `${NEWS_BASE_URL}${alias}`
    : `${NEWS_BASE_URL}/node/${attributes.drupal_internal__nid ?? ''}`;

  return {
    id: raw.id,
    title: attributes.title.trim(),
    dateLabel: formatMonthYear(attributes.created),
    summary,
    url,
    ...resolveFeaturedImage(raw, byId),
  };
}

export const fetchArticles: FetchArticles = async ({ count, tagId }) => {
  const limit = Math.max(0, Math.floor(count));
  if (!limit) return [];

  const params = new URLSearchParams({
    sort: '-created',
    'filter[field_tags.drupal_internal__tid]': tagId || DEFAULT_TAG_ID,
    'page[limit]': String(limit),
    // Pull the image media + file in one request, resolved from `included`.
    include: 'field_featured_image.field_media_image',
  });
  const requestUrl = `${NEWS_BASE_URL}/jsonapi/node/article?${params.toString()}`;

  const response = await fetch(requestUrl, { headers: REQUEST_HEADERS });
  if (!response.ok) {
    throw new Error(`Fetching Rice news articles: ${response.status} ${response.statusText}`);
  }
  const json = (await response.json()) as { data?: RawArticle[]; included?: RawIncluded[] };
  const byId = new Map<string, RawIncluded>();
  for (const resource of json.included ?? []) {
    byId.set(`${resource.type}:${resource.id}`, resource);
  }
  return (json.data ?? []).map((raw) => toArticle(raw, byId));
};
