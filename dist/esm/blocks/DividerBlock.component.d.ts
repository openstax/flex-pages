import { ImageFields } from '../components/Image.js';
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
