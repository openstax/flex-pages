import { CTALinkFields } from './CTABlock.config.js';
type CardConfig = {
    type: 'card_style';
    id: string;
    value: 'rounded' | 'square';
} | {
    type: 'card_size';
    id: string;
    value: string;
} | {
    type: 'card_columns';
    id: string;
    value: string;
} | {
    type: 'card_min_size';
    id: string;
    value: string;
} | {
    type: 'background_color';
    id: string;
    value: string;
} | {
    type: 'border_size';
    id: string;
    value: string;
} | {
    type: 'accent_size';
    id: string;
    value: string;
} | {
    type: 'padding';
    id: string;
    value: string;
} | {
    type: 'padding_top';
    id: string;
    value: string;
} | {
    type: 'padding_bottom';
    id: string;
    value: string;
};
export type CardBlockConfig = {
    text: string;
    ctaBlock: CTALinkFields[];
    accentColor?: string;
    dividerColor?: string;
};
export type CardsBlockConfig = {
    id: string;
    type: 'cards_block';
    value: {
        cards: CardBlockConfig[];
        config: CardConfig[];
    };
};
export declare const config: {
    type: string;
    label: string;
    categories: string[];
    description: string;
    fields: ({
        name: string;
        label: string;
        type: string;
        fields: ({
            name: string;
            label: string;
            type: string;
            required: boolean;
            fields?: undefined;
            max?: undefined;
            pattern?: undefined;
            help?: undefined;
        } | {
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
                    pattern?: undefined;
                    help?: undefined;
                } | {
                    name: string;
                    label: string;
                    type: string;
                    pattern: string;
                    help: string;
                    options?: undefined;
                })[];
            })[];
            max: number;
            required?: undefined;
            pattern?: undefined;
            help?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            pattern: string;
            help: string;
            required?: undefined;
            fields?: undefined;
            max?: undefined;
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
            help: string;
            type: string;
            options?: undefined;
            pattern?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            pattern: string;
            help: string;
            options?: undefined;
        })[];
        fields?: undefined;
    })[];
};
export {};
