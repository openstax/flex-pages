import type { CardBlockConfig, CardsBlockConfig } from './CardsBlock.config.js';
import './CardsBlock.css';
export declare function CardsBlock({ data }: {
    data: CardsBlockConfig;
}): import("react/jsx-runtime").JSX.Element;
export declare function CardBlock({ data, accentColor, dividerColor }: {
    data: CardBlockConfig;
    accentColor?: string;
    dividerColor?: string;
}): import("react/jsx-runtime").JSX.Element;
