import React from 'react';
import type { ContentBlockConfig } from '../ContentBlockContext.js';
import './BigNumbersBlock.css';
export interface BigNumbersBlockConfig {
    id: string;
    type: 'big_numbers';
    value: {
        content: ContentBlockConfig[];
    };
}
export declare function BigNumbersBlock({ content }: {
    data: BigNumbersBlockConfig;
    content?: React.ReactNode;
}): React.JSX.Element;
