import type { ImageFields } from '@openstax/flex-page-renderer/components/Image.config';
import type { ContentData } from '../lib/fetchContent.js';
export declare const config: {
    type: string;
    categories: string[];
    label: string;
    description: string;
    fields: ({
        name: string;
        label: string;
        type: string;
        required: boolean;
        help: string;
    } | {
        name: string;
        label: string;
        type: string;
        help: string;
        required?: undefined;
    })[];
};
export interface ContentReference {
    id: string;
    type: string;
    slug: string;
    url: string;
    title: string;
}
export interface ContentCardValue {
    reference: ContentReference;
    title?: string;
    image?: ImageFields;
    excerpt?: string;
}
export interface ContentCardBlockConfig {
    id: string;
    type: 'content_card';
    value: ContentCardValue;
    prefetched?: ContentData;
}
