import type { CTABlockConfig, CTALinkFields } from './CTABlock.config.js';
import './CTABlock.css';
export declare function CTALink({ link }: {
    link: CTALinkFields;
}): import("react/jsx-runtime").JSX.Element;
export declare function CTABlock({ data, activeConditions }: {
    data: CTABlockConfig;
    activeConditions?: string[];
}): import("react/jsx-runtime").JSX.Element | null;
