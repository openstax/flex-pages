import { LinkFields } from '../components/Link.fields';
import './LinksBlock.css';
type LinksConfig = {
    type: 'color';
    value: string;
} | {
    type: 'custom_color';
    value: string;
} | {
    type: 'layout';
    value: string;
} | {
    type: 'size';
    value: string;
} | {
    type: 'analytics_label';
    value: string;
};
export interface LinksBlockConfig {
    id: string;
    type: 'links_group';
    value: {
        links: LinkFields[];
        config: LinksConfig[];
    };
}
export declare function LinksBlock({ data }: {
    data: LinksBlockConfig;
}): import("react/jsx-runtime").JSX.Element;
export {};
