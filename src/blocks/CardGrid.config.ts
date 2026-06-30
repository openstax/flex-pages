export type CardGridConfigOption = {
  type: 'card_style' | 'card_size' | 'card_columns' | 'card_min_size'
    | 'accent_colors' | 'divider_colors' | 'background_color' | 'border_size'
    | 'accent_size' | 'padding' | 'padding_top' | 'padding_bottom';
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

const find = (config: CardGridConfigOption[], type: CardGridConfigOption['type']) =>
  config.find((c) => c.type === type)?.value;

const splitColors = (raw?: string) => {
  const colors = raw ? raw.split(',').map((c) => c.trim()).filter(Boolean) : [];
  return colors.length ? colors : undefined;
};

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
    cardMinSize: find(config, 'card_min_size'),
    accentColors: splitColors(find(config, 'accent_colors')),
    dividerColors: splitColors(find(config, 'divider_colors')),
    backgroundColor,
    borderSize: find(config, 'border_size'),
    accentSize: find(config, 'accent_size'),
    padding: find(config, 'padding'),
    paddingTop: find(config, 'padding_top'),
    paddingBottom: find(config, 'padding_bottom'),
    isDarkBg: backgroundColor ? isDark(backgroundColor) : false,
  };
}
