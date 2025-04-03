/// <reference types="react" />
import { ContentBlockConfig } from '../ContentBlocks';
import './ColumnsBlock.css';
export declare type SectionConfigOptions = {
    type: 'background_color';
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
export declare function ColumnsBlock({ data }: {
    data: ColumnsBlockConfig;
}): JSX.Element;
export declare namespace ColumnsBlock {
    var blockConfig: {
        type: string;
        label: string;
        categories: string[];
        fields: ({
            name: string;
            label: string;
            type: string;
            categories: string[];
            configs?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            configs: ({
                name: string;
                label: string;
                type: string;
                pattern: string;
                help?: undefined;
                options?: undefined;
                disabledWhen?: undefined;
            } | {
                name: string;
                label: string;
                help: string;
                type: string;
                pattern?: undefined;
                options?: undefined;
                disabledWhen?: undefined;
            } | {
                name: string;
                label: string;
                type: string;
                options: {
                    label: string;
                    value: string;
                }[];
                pattern?: undefined;
                help?: undefined;
                disabledWhen?: undefined;
            } | {
                name: string;
                label: string;
                help: string;
                type: string;
                disabledWhen: (data: any) => boolean;
                pattern?: undefined;
                options?: undefined;
            })[];
            categories?: undefined;
        })[];
    };
}
