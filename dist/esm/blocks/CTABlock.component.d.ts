import React from 'react';
import type { CTABlockConfig, CTALinkFields } from './CTABlock.config.js';
import './CTABlock.css';
export declare function CTALink({ link }: {
    link: CTALinkFields;
}): React.JSX.Element;
export declare function CTABlock({ data, activeConditions }: {
    data: CTABlockConfig;
    activeConditions?: string[];
}): React.JSX.Element | null;
