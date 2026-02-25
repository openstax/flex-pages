import React from 'react';
import type { ContentBlockConfig } from '../ContentBlockContext';
import { ImageFields } from '../components/Image';
import './HeroBlock.css';
export type HeroConfigOptions = {
    type: 'text_alignment';
    value: 'left' | 'right' | 'center';
} | {
    type: 'background_color';
    value: string;
} | {
    type: 'gradient_color';
    value: string;
} | {
    type: 'gradient_direction';
    value: string;
} | {
    type: 'padding';
    value: string;
} | {
    type: 'padding_top';
    value: string;
} | {
    type: 'padding_bottom';
    value: string;
} | {
    type: 'analytics_label';
    value: string;
} | {
    type: 'id';
    value: string;
} | {
    type: 'image_alignment';
    value: string;
} | {
    type: 'image_border_radius';
    value: string;
} | {
    type: 'image_border_color';
    value: string;
} | {
    type: 'image_border_size';
    value: string;
};
export interface HeroBlockConfig {
    id: string;
    type: 'hero';
    value: {
        content: ContentBlockConfig[];
        image: ImageFields;
        imageAlt: string;
        config: HeroConfigOptions[];
    };
}
export declare function HeroBlock({ data, content }: {
    data: HeroBlockConfig;
    content?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace HeroBlock {
    var blockConfig: {
        type: string;
        categories: string[];
        label: string;
        fields: ({
            name: string;
            label: string;
            type: string;
            categories: string[];
            fields?: undefined;
            configs?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            categories?: undefined;
            fields?: undefined;
            configs?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            fields: {
                name: string;
                label: string;
                help: string;
                type: string;
            }[];
            categories?: undefined;
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
                pattern?: undefined;
                help?: undefined;
            } | {
                name: string;
                label: string;
                type: string;
                pattern: string;
                options?: undefined;
                help?: undefined;
            } | {
                name: string;
                label: string;
                type: string;
                pattern: string;
                help: string;
                options?: undefined;
            } | {
                name: string;
                label: string;
                help: string;
                type: string;
                options?: undefined;
                pattern?: undefined;
            })[];
            categories?: undefined;
            fields?: undefined;
        })[];
    };
}
