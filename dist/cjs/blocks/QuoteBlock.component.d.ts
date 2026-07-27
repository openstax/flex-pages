import React from 'react';
import { ImageFields } from '../components/Image.js';
import './QuoteBlock.css';
type QuoteConfig = {
    type: 'accent_color';
    value: string;
} | {
    type: 'layout';
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
}): React.JSX.Element;
export {};
