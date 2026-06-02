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
export {};
