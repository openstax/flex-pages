export type CardGridConfigOption = {
    type: 'card_style' | 'card_size' | 'card_columns' | 'card_min_size' | 'accent_colors' | 'divider_colors' | 'background_color' | 'border_size' | 'accent_size' | 'padding' | 'padding_top' | 'padding_bottom';
    id: string;
    value: string;
};
export interface ParsedCardGridConfig {
    styleClass?: string;
    cardSize?: string;
    cardColumns?: string;
    cardMinSize?: string;
    accentColors?: string[];
    dividerColors?: string[];
    backgroundColor?: string;
    borderSize?: string;
    accentSize?: string;
    padding?: string;
    paddingTop?: string;
    paddingBottom?: string;
    isDarkBg: boolean;
}
export declare function parseCardGridConfig(config: CardGridConfigOption[], isDark: (color: string) => boolean): ParsedCardGridConfig;
