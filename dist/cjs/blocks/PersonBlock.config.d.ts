import type { CardGridConfigOption } from '@openstax/flex-page-renderer/blocks/CardGrid.config';
import type { ImageFields } from '@openstax/flex-page-renderer/components/Image.config';
export type PersonLinkType = 'linkedin' | 'orcid' | 'website' | 'email' | 'scholar' | 'x';
export interface PersonLink {
    type: PersonLinkType;
    url: string;
}
export interface PersonTag {
    id: number;
    name: string;
    slug: string;
}
export interface PersonConfig {
    name: string;
    title?: string;
    image?: ImageFields;
    short_bio?: string;
    full_bio?: string;
    links?: PersonLink[];
    tags?: PersonTag[];
}
export interface PersonBlockConfig {
    id: string;
    type: 'person';
    value: {
        heading?: string;
        people: PersonConfig[];
        config: CardGridConfigOption[];
    };
}
export declare const config: {
    type: string;
    categories: string[];
    label: string;
    description: string;
    fields: ({
        name: string;
        label: string;
        type: string;
        fields?: undefined;
        configs?: undefined;
    } | {
        name: string;
        label: string;
        type: string;
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
            required?: undefined;
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
            fields: ({
                name: string;
                label: string;
                type: string;
                options: {
                    label: string;
                    value: string;
                }[];
                required?: undefined;
            } | {
                name: string;
                label: string;
                type: string;
                required: boolean;
                options?: undefined;
            })[];
            required?: undefined;
            help?: undefined;
        })[];
        configs?: undefined;
    } | {
        name: string;
        label: string;
        type: string;
        configs: ({
            name: string;
            label: string;
            type: string;
            options: {
                label: string;
                value: string;
            }[];
            help?: undefined;
            pattern?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            help: string;
            options?: undefined;
            pattern?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            options?: undefined;
            help?: undefined;
            pattern?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            pattern: string;
            options?: undefined;
            help?: undefined;
        })[];
        fields?: undefined;
    })[];
};
