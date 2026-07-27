import React from 'react';
import './AccordionBlock.css';
type AccordionConfigOptions = {
    type: 'heading_level';
    value: string;
} | {
    type: 'allow_multiple';
    value: string;
} | {
    type: 'accent_color';
    value: string;
} | {
    type: 'accent_colors';
    value: string;
} | {
    type: 'top_border_color';
    value: string;
};
export type AccordionItemConfig = {
    header: string;
    content: string;
    id: string;
};
export interface AccordionBlockConfig {
    id: string;
    type: 'accordion';
    value: {
        items: AccordionItemConfig[];
        config: AccordionConfigOptions[];
    };
}
export declare function AccordionBlock({ data }: {
    data: AccordionBlockConfig;
}): React.JSX.Element | null;
export {};
