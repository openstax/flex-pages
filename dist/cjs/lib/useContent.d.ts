import type { ContentData, ContentRef, FetchContent } from './fetchContent.js';
export declare function useContent(ref: ContentRef, fetchContent: FetchContent, prefetched?: ContentData): ContentData | undefined;
