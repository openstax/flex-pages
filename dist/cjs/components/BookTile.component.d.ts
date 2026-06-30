import type { BookTileConfig } from '../blocks/BookTileListBlock.config.js';
import type { BookData } from '../lib/fetchBooks.js';
export declare function BookTile({ config, book, defaultButtonText }: {
    config: BookTileConfig;
    book?: BookData;
    defaultButtonText?: string;
}): import("react").JSX.Element;
