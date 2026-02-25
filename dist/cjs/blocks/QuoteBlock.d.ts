import { ImageFields } from '../components/Image';
import './QuoteBlock.css';
type QuoteConfig = {
    type: 'accent_color';
    value: string;
};
export interface QuoteBlockConfig {
    id: string;
    type: 'quote';
    value: {
        image: ImageFields;
        content: string;
        name: string;
        title?: string;
        config: QuoteConfig[];
    };
}
export declare function QuoteBlock({ data }: {
    data: QuoteBlockConfig;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace QuoteBlock {
    var blockConfig: {
        type: string;
        categories: string[];
        label: string;
        fields: ({
            name: string;
            label: string;
            type: string;
            required: boolean;
            fields?: undefined;
            configs?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            required?: undefined;
            fields?: undefined;
            configs?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            fields: {
                name: string;
                label: string;
                help: string;
                type: string;
            }[];
            required?: undefined;
            configs?: undefined;
        } | {
            name: string;
            label: string;
            type: string;
            configs: {
                name: string;
                label: string;
                type: string;
                pattern: string;
                help: string;
            }[];
            required?: undefined;
            fields?: undefined;
        })[];
    };
}
export {};
