export type CardGridConfigOption = {
  type: 'card_style' | 'card_size' | 'card_columns' | 'accent_colors'
    | 'divider_colors' | 'background_color' | 'border_size';
  id: string;
  value: string;
};

export interface ParsedCardGridConfig {
  styleClass?: string;
  cardSize?: string;
  cardColumns?: string;
  accentColors?: string[];
  dividerColors?: string[];
  backgroundColor?: string;
  borderSize?: string;
  isDarkBg: boolean;
}

const find = (config: CardGridConfigOption[], type: CardGridConfigOption['type']) =>
  config.find((c) => c.type === type)?.value;

const splitColors = (raw?: string) =>
  raw ? raw.split(',').map((c) => c.trim()).filter(Boolean) : undefined;

export function parseCardGridConfig(
  config: CardGridConfigOption[],
  isDark: (color: string) => boolean,
): ParsedCardGridConfig {
  const cardStyle = find(config, 'card_style');
  const backgroundColor = find(config, 'background_color');
  return {
    styleClass: cardStyle ? `card_style_${cardStyle}` : undefined,
    cardSize: find(config, 'card_size'),
    cardColumns: find(config, 'card_columns'),
    accentColors: splitColors(find(config, 'accent_colors')),
    dividerColors: splitColors(find(config, 'divider_colors')),
    backgroundColor,
    borderSize: find(config, 'border_size'),
    isDarkBg: backgroundColor ? isDark(backgroundColor) : false,
  };
}
