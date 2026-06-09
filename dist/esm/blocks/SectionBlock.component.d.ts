import React from 'react';
import type { ContentBlockConfig } from '../ContentBlockContext.js';
import './SectionBlock.css';
export type SectionConfigOptions = {
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
    type: 'flex';
    value: 'flex' | 'flex-grow' | 'flex-shrink';
} | {
    type: 'rendering_condition';
    value: string;
};
export interface SectionBlockConfig {
    id: string;
    type: 'section';
    value: {
        content: ContentBlockConfig[];
        config: SectionConfigOptions[];
    };
}
export declare function SectionBlock({ data, content, activeConditions }: {
    data: SectionBlockConfig;
    content?: React.ReactNode;
    activeConditions?: string[];
}): import("react/jsx-runtime").JSX.Element | null;
