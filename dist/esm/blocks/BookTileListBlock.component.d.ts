import type { FetchBooks } from '../lib/fetchBooks.js';
import type { BookTileListBlockConfig } from './BookTileListBlock.config.js';
import './BookTileListBlock.css';
export declare function createBookTileList(fetchBooks: FetchBooks): ({ data }: {
    data: BookTileListBlockConfig;
}) => import("react").JSX.Element;
export declare const Component: ({ data }: {
    data: BookTileListBlockConfig;
}) => import("react").JSX.Element;
