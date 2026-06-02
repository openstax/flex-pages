import type { PageMetadata } from './pages';

const STORAGE_KEY = 'github-pat';
const REPO = 'openstax/flex-pages';

export function getToken(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}

export function setToken(token: string): void {
  localStorage.setItem(STORAGE_KEY, token);
}

export function clearToken(): void {
  localStorage.removeItem(STORAGE_KEY);
}

const dataDir = 'packages/example/data';

function filePath(id: string): string {
  return `${dataDir}/${id}.json`;
}

function ghHeaders(token: string) {
  return {Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json'};
}

function decodeBase64Content(content: string): string {
  return new TextDecoder().decode(
    Uint8Array.from(atob(content.replace(/\n/g, '')), c => c.charCodeAt(0))
  );
}

export type PageListItem = {id: string; title: string; url: string};

// Live page list from GitHub: list the data dir, then read each file's metadata
// for a human title. id is the file name (a UUID). N+1 requests, fine at this
// scale. Reflects the repo's current pages — including ones committed but not
// yet deployed — which is what an editor wants when choosing a link target.
export async function fetchPageList(token: string): Promise<PageListItem[]> {
  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contents/${dataDir}`,
    {headers: ghHeaders(token)}
  );
  if (res.status === 401) throw new Error('Invalid or expired token');
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const entries: any[] = await res.json();
  const jsonFiles = entries.filter(e => e.type === 'file' && e.name.endsWith('.json'));

  const items = await Promise.all(jsonFiles.map(async (file): Promise<PageListItem> => {
    const id = file.name.replace(/\.json$/, '');
    const fileRes = await fetch(file.url, {headers: ghHeaders(token)});
    if (!fileRes.ok) return {id, title: id, url: ''};
    const data = await fileRes.json();
    const metadata = JSON.parse(decodeBase64Content(data.content)).metadata ?? {};
    return {id, title: metadata.title ?? id, url: metadata.url ?? ''};
  }));

  return items.sort((a, b) => a.title.localeCompare(b.title));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchPage(id: string, token: string): Promise<{page: any; metadata: PageMetadata; sha: string}> {
  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contents/${filePath(id)}`,
    {headers: ghHeaders(token)}
  );

  if (res.status === 401) throw new Error('Invalid or expired token');
  if (res.status === 404) throw new Error(`Page "${id}" not found`);
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

  const data = await res.json();
  const fileData = JSON.parse(decodeBase64Content(data.content));
  const metadata: PageMetadata = fileData.metadata ?? {title: '', description: ''};
  return {page: fileData.page[0], metadata, sha: data.sha};
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function savePage(id: string, page: any, metadata: PageMetadata, sha: string, token: string): Promise<{sha: string}> {
  const content = JSON.stringify({metadata, page: [page]}, null, 2) + '\n';
  const encoded = btoa(
    Array.from(new TextEncoder().encode(content), b => String.fromCharCode(b)).join('')
  );

  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contents/${filePath(id)}`,
    {
      method: 'PUT',
      headers: {Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json'},
      body: JSON.stringify({message: `Update ${id} page via editor`, content: encoded, sha}),
    }
  );

  if (res.status === 401) throw new Error('Invalid or expired token');
  if (res.status === 404) throw new Error(`Page "${id}" not found`);
  if (res.status === 409) throw new Error('Conflict: the file was modified since you loaded it. Reload and try again.');
  if (res.status === 422) throw new Error('Validation error: check that your token has the correct permissions');
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

  const result = await res.json();
  return {sha: result.content.sha};
}
