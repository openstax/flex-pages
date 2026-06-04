import React from 'react';
import type { ContentBlockConfig } from '../ContentBlockContext.js';
import './ColumnsBlock.css';
export type SectionConfigOptions = {
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
    type: 'left_size';
    value: string;
} | {
    type: 'right_size';
    value: string;
} | {
    type: 'gap';
    value: string;
} | {
    type: 'flex';
    value: 'flex' | 'flex-grow' | 'flex-shrink';
} | {
    type: 'stack_at';
    value: string;
};
export interface ColumnsBlockConfig {
    id: string;
    type: 'columns';
    value: {
        leftContent: ContentBlockConfig[];
        rightContent: ContentBlockConfig[];
        config: SectionConfigOptions[];
    };
}
export declare function ColumnsBlock({ data, leftContent, rightContent }: {
    data: ColumnsBlockConfig;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
