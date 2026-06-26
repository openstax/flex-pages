import type { ImageFields } from '@openstax/flex-page-renderer/components/Image.config';
import { type LinkFields } from '@openstax/flex-page-renderer/components/Link.config';
import type { BookData } from '../lib/fetchBooks.js';
export declare const config: {
    type: string;
    categories: string[];
    label: string;
    description: string;
    fields: ({
        name: string;
        label: string;
        type: string;
        help: string;
        max?: undefined;
        fields?: undefined;
    } | {
        name: string;
        label: string;
        type: string;
        max: number;
        fields: ({
            name: string;
            label: string;
            type: string;
            required: boolean;
            help?: undefined;
            fields?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            help: string;
            required?: undefined;
            fields?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            required?: undefined;
            help?: undefined;
            fields?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            fields: {
                name: string;
                label: string;
                type: string;
                fields: ({
                    name: string;
                    label: string;
                    type: string;
                    required: boolean;
                } | {
                    name: string;
                    label: string;
                    type: string;
                    required?: undefined;
                })[];
            }[];
            required?: undefined;
            help?: undefined;
        })[];
        help?: undefined;
    })[];
};
export interface BookMenuSection {
    items: LinkFields[];
}
export interface BookTileConfig {
    id: string;
    button_text?: string;
    badge?: ImageFields;
    badge_alt?: string;
    title_link?: LinkFields['target'];
    menu?: BookMenuSection[];
}
export interface BookTileListBlockConfig {
    id: string;
    type: 'book_tile_list';
    value: {
        button_text?: string;
        books: BookTileConfig[];
    };
    prefetched?: Record<string, BookData>;
}
