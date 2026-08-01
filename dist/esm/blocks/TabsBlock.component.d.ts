import React from 'react';
import type { ContentBlockConfig } from '../ContentBlockContext.js';
import './TabsBlock.css';
type TabsConfigOptions = {
    type: 'flex';
    value: 'flex' | 'flex-grow' | 'flex-shrink';
} | {
    type: 'tab_alignment';
    value: 'left' | 'center' | 'right';
} | {
    type: 'active_color';
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
};
type TabItemConfig = {
    label: string;
    content: ContentBlockConfig[];
};
export interface TabsBlockConfig {
    id: string;
    type: 'tabs';
    value: {
        tabs: TabItemConfig[];
        config: TabsConfigOptions[];
    };
}
export declare function TabsBlock({ data, tabs: resolvedTabs }: {
    data: TabsBlockConfig;
    tabs?: Array<{
        label: string;
        content: React.ReactNode;
    }>;
}): React.JSX.Element | null;
export {};
