import { ImageFields } from '../components/Image';
import './DividerBlock.css';
export type DividerConfigOptions = {
    type: 'width';
    value: string;
} | {
    type: 'height';
    value: string;
} | {
    type: 'alignment';
    value: string;
} | {
    type: 'offset_vertical';
    value: string;
} | {
    type: 'offset_horizontal';
    value: string;
};
export interface DividerBlockConfig {
    id: string;
    type: 'divider';
    value: {
        image: ImageFields;
        config: DividerConfigOptions[];
    };
}
export declare function DividerBlock({ data }: {
    data: DividerBlockConfig;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace DividerBlock {
    var blockConfig: {
        type: string;
        categories: string[];
        label: string;
        fields: ({
            name: string;
            label: string;
            type: string;
            fields: {
                name: string;
                label: string;
                help: string;
                type: string;
            }[];
            configs?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            configs: ({
                name: string;
                label: string;
                help: string;
                type: string;
                options?: undefined;
            } | {
                name: string;
                label: string;
                type: string;
                options: {
                    label: string;
                    value: string;
                }[];
                help?: undefined;
            })[];
            fields?: undefined;
        })[];
    };
}
