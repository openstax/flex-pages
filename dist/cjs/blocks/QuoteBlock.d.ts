/// <reference types="react" />
import { ImageFields } from '../components/Image';
import './QuoteBlock.css';
export interface QuoteBlockConfig {
    id: string;
    type: 'quote';
    value: {
        image: ImageFields;
        content: string;
        name: string;
        title?: string;
    };
}
export declare function QuoteBlock({ data }: {
    data: QuoteBlockConfig;
}): JSX.Element;
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
        } | {
            name: string;
            label: string;
            type: string;
            required?: undefined;
            fields?: undefined;
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
        })[];
    };
}
