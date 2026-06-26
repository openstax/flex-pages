import type { FetchContent } from '../lib/fetchContent.js';
import type { ContentCardBlockConfig } from './ContentCardBlock.config.js';
import './ContentCardBlock.css';
export declare function createContentCard(fetchContent: FetchContent): ({ data }: {
    data: ContentCardBlockConfig;
}) => import("react").JSX.Element;
export declare const Component: ({ data }: {
    data: ContentCardBlockConfig;
}) => import("react").JSX.Element;
