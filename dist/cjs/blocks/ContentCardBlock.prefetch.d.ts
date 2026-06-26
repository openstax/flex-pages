import type { ContentData, FetchContent } from '../lib/fetchContent.js';
import type { ContentCardValue } from './ContentCardBlock.config.js';
export declare function createContentCardPrefetch(fetchContent: FetchContent): (value: ContentCardValue) => Promise<ContentData | undefined>;
export declare const prefetch: (value: ContentCardValue) => Promise<ContentData | undefined>;
