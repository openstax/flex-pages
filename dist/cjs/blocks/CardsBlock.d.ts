/// <reference types="react" />
import { CTALinkFields } from './CTABlock';
import './CardsBlock.css';
declare type CardConfig = {
    type: 'card_style';
    id: string;
    value: 'rounded' | 'square';
} | {
    type: 'card_size';
    id: string;
    value: string;
};
export declare type CardBlockConfig = {
    text: string;
    ctaBlock: CTALinkFields[];
};
export declare type CardsBlockConfig = {
    id: string;
    type: 'cards_block';
    value: {
        cards: CardBlockConfig[];
        config: CardConfig[];
    };
};
export declare function CardsBlock({ data }: {
    data: CardsBlockConfig;
}): JSX.Element;
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
                    configs: {
                        name: string;
                        label: string;
                        type: string;
                        options: {
                            label: string;
                            value: string;
                        }[];
                    }[];
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
            } | {
                name: string;
                label: string;
                help: string;
                type: string;
                options?: undefined;
            })[];
            fields?: undefined;
        })[];
    };
}
export declare function CardBlock({ data }: {
    data: CardBlockConfig;
}): JSX.Element;
export {};
