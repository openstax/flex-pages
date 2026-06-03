import React from 'react';
import type { ContentBlockConfig } from '../ContentBlockContext';
import './TabbedContentBlock.css';
type TabbedContentConfigOptions = {
    type: 'tab_alignment';
    value: 'left' | 'center' | 'right';
} | {
    type: 'active_color';
    value: string;
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
    type: 'analytics_label';
    value: string;
} | {
    type: 'id';
    value: string;
} | {
    type: 'default_tab';
    value: string;
} | {
    type: 'border_width';
    value: 'content' | 'full';
};
type TabItemConfig = {
    label: string;
    content: ContentBlockConfig[];
};
export interface TabbedContentBlockConfig {
    id: string;
    type: 'tabbed_content';
    value: {
        tabs: TabItemConfig[];
        config: TabbedContentConfigOptions[];
    };
}
export declare function TabbedContentBlock({ data, tabs: resolvedTabs }: {
    data: TabbedContentBlockConfig;
    tabs?: Array<{
        label: string;
        content: React.ReactNode;
    }>;
}): import("react/jsx-runtime").JSX.Element | null;
export {};
