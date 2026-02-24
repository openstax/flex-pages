import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export type PageMetadata = {
  title: string;
  description: string;
};

export type PageFile = {
  metadata: PageMetadata;
  page: unknown[];
};

export function getPageSlugs(): string[] {
  return fs.readdirSync(dataDir)
    .filter(f => f.endsWith('.json') && f !== 'home.json')
    .map(f => f.replace('.json', ''));
}

export function getPageData(slug: string): PageFile | null {
  const filePath = path.join(dataDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}
