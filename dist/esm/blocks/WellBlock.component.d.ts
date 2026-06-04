import React from 'react';
import type { ContentBlockConfig } from '../ContentBlockContext.js';
import './WellBlock.css';
export type WellConfigOptions = {
    type: 'background_color';
    value: string;
} | {
    type: 'gradient_color';
    value: string;
} | {
    type: 'gradient_direction';
    value: string;
} | {
    type: 'border_radius';
    value: string;
} | {
    type: 'padding';
    value: string;
} | {
    type: 'margin';
    value: string;
} | {
    type: 'width';
    value: string;
} | {
    type: 'text_alignment';
    value: 'left' | 'right' | 'center';
} | {
    type: 'analytics_label';
    value: string;
} | {
    type: 'id';
    value: string;
} | {
    type: 'border_color';
    value: string;
} | {
    type: 'border_size';
    value: string;
} | {
    type: 'pull_up';
    value: string;
};
export interface WellBlockConfig {
    id: string;
    type: 'well';
    value: {
        content: ContentBlockConfig[];
        config: WellConfigOptions[];
    };
}
export declare function WellBlock({ data, content }: {
    data: WellBlockConfig;
    content?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
