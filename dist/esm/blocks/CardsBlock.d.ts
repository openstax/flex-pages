import { CTALinkFields } from './CTABlock';
import './CardsBlock.css';
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
    type: 'accent_colors';
    id: string;
    value: string;
} | {
    type: 'divider_colors';
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
};
export type CardBlockConfig = {
    text: string;
    ctaBlock: CTALinkFields[];
};
export type CardsBlockConfig = {
    id: string;
    type: 'cards_block';
    value: {
        cards: CardBlockConfig[];
        config: CardConfig[];
    };
};
export declare function CardsBlock({ data }: {
    data: CardsBlockConfig;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace CardsBlock {
    var blockConfig: {
        type: string;
        label: string;
        categories: string[];
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
}
export declare function CardBlock({ data, accentColor, dividerColor }: {
    data: CardBlockConfig;
    accentColor?: string;
    dividerColor?: string;
}): import("react/jsx-runtime").JSX.Element;
export {};
