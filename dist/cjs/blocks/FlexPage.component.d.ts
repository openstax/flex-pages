import React from 'react';
import './FlexPage.css';
import type { ContentBlockConfig } from '../ContentBlockContext';
export type FlexPageConfigOptions = {
    type: 'height';
    value: string;
} | {
    type: 'width';
    value: string;
};
export interface FlexPageConfig {
    id: string;
    type: 'flex_page';
    value: {
        content: ContentBlockConfig[];
        config: FlexPageConfigOptions[];
    };
}
export declare function FlexPage({ data, content }: {
    data: FlexPageConfig;
    content?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
