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

function filePath(slug: string): string {
  return `packages/example/data/${slug}.json`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchPage(slug: string, token: string): Promise<{page: any; metadata: PageMetadata; sha: string}> {
  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contents/${filePath(slug)}`,
    {headers: {Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json'}}
  );

  if (res.status === 401) throw new Error('Invalid or expired token');
  if (res.status === 404) throw new Error(`Page "${slug}" not found`);
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

  const data = await res.json();
  const decoded = new TextDecoder().decode(
    Uint8Array.from(atob(data.content.replace(/\n/g, '')), c => c.charCodeAt(0))
  );
  const fileData = JSON.parse(decoded);
  const metadata: PageMetadata = fileData.metadata ?? {title: '', description: ''};
  return {page: fileData.page[0], metadata, sha: data.sha};
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function savePage(slug: string, page: any, metadata: PageMetadata, sha: string, token: string): Promise<{sha: string}> {
  const content = JSON.stringify({metadata, page: [page]}, null, 2) + '\n';
  const encoded = btoa(
    Array.from(new TextEncoder().encode(content), b => String.fromCharCode(b)).join('')
  );

  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contents/${filePath(slug)}`,
    {
      method: 'PUT',
      headers: {Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json'},
      body: JSON.stringify({message: `Update ${slug} page via editor`, content: encoded, sha}),
    }
  );

  if (res.status === 401) throw new Error('Invalid or expired token');
  if (res.status === 404) throw new Error(`Page "${slug}" not found`);
  if (res.status === 409) throw new Error('Conflict: the file was modified since you loaded it. Reload and try again.');
  if (res.status === 422) throw new Error('Validation error: check that your token has the correct permissions');
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

  const result = await res.json();
  return {sha: result.content.sha};
}
