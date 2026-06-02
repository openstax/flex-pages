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
} | {
    type: 'image_overhang';
    value: string;
} | {
    type: 'rendering_condition';
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
export declare function HeroBlock({ data, content, activeConditions }: {
    data: HeroBlockConfig;
    content?: React.ReactNode;
    activeConditions?: string[];
}): import("react/jsx-runtime").JSX.Element | null;
