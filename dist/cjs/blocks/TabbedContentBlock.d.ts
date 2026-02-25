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
export declare namespace TabbedContentBlock {
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
                categories?: undefined;
            } | {
                name: string;
                label: string;
                type: string;
                categories: string[];
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
                pattern?: undefined;
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
                type: string;
                pattern: string;
                options?: undefined;
                help?: undefined;
            } | {
                name: string;
                label: string;
                type: string;
                help: string;
                options?: undefined;
                pattern?: undefined;
            })[];
            fields?: undefined;
        })[];
    };
}
export {};
