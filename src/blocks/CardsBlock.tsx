import cn from 'classnames';
import Color from 'color';
import React from 'react';
import { findByType } from '../utils';
import { CTALink, ctaLinkFieldConfig, CTALinkFields } from './CTABlock';
import { RichTextContent } from './RichTextBlock';
import './CardsBlock.css';

type CardConfig = {
  type: 'card_style';
  id: string;
  value: 'rounded' | 'square';
} | {
  type: 'card_size';
  id: string;
  value: string;
} | {
  type: 'card_columns';
  id: string;
  value: string;
} | {
  type: 'accent_colors';
  id: string;
  value: string;
} | {
  type: 'divider_colors';
  id: string;
  value: string;
} | {
  type: 'background_color';
  id: string;
  value: string;
} | {
  type: 'border_size';
  id: string;
  value: string;
};

export type CardBlockConfig = {
  text: string;
  ctaBlock: CTALinkFields[];
};

export type CardsBlockConfig = {
  id: string;
  type: 'cards_block';
  value: {
    cards: CardBlockConfig[];
    config: CardConfig[];
  };
};

CardsBlock.blockConfig = {
  type: 'cards_block',
  label: 'Cards Block',
  categories: ['content'],
  fields: [
    {name: 'cards', label: 'Cards', type: 'list', fields: [
      {name: 'text', label: 'Card Text', type: 'rich-text', required: true},
      {name: 'ctaBlock', label: 'Call To Action', type: 'list', fields: ctaLinkFieldConfig, max: 1},
    ]},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'card_style', label: 'Style', type: 'select', options: [
        {label: 'Rounded', value: 'rounded'},
        {label: 'Square', value: 'square'},
      ]},
      {name: 'card_size', label: 'Size', help: 'A single number representing 10px increments', type: 'number'},
      {name: 'card_columns', label: 'Columns', help: 'Number of columns (works with Size)', type: 'number'},
      {name: 'accent_colors', label: 'Accent Colors', type: 'text', help: 'Comma-separated hex colors for card borders/shadows, e.g. #ff0000,#00ff00,#0000ff'},
      {name: 'divider_colors', label: 'Divider Colors', type: 'text', help: 'Comma-separated hex colors for card divider lines, e.g. #ff0000,#00ff00'},
      {name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex background color for cards'},
      {name: 'border_size', label: 'Border Size', type: 'text', help: 'Border thickness (e.g. 2px, 0.3rem). Rounded: border width (default: thin). Square: top accent height (default: 1rem).'},
    ]},
  ],
};

export function CardsBlock({data}: {data: CardsBlockConfig}) {
  const cardStyle = findByType(data.value.config, 'card_style')?.value;
  const styleClass = cardStyle ? `card_style_${cardStyle}` : undefined;
  const cardSize = findByType(data.value.config, 'card_size')?.value;
  const cardColumns = findByType(data.value.config, 'card_columns')?.value;
  const accentColorsRaw = findByType(data.value.config, 'accent_colors')?.value;
  const accentColors = accentColorsRaw
    ? accentColorsRaw.split(',').map((c: string) => c.trim()).filter(Boolean)
    : undefined;
  const dividerColorsRaw = findByType(data.value.config, 'divider_colors')?.value;
  const dividerColors = dividerColorsRaw
    ? dividerColorsRaw.split(',').map((c: string) => c.trim()).filter(Boolean)
    : undefined;
  const backgroundColor = findByType(data.value.config, 'background_color')?.value;
  const isDarkBg = backgroundColor ? Color(backgroundColor).isDark() : false; // eslint-disable-line new-cap
  const borderSize = findByType(data.value.config, 'border_size')?.value;

  return (
    <div
      className={cn(
        'content-block-cards',
        styleClass,
        cardColumns && 'has-columns',
        accentColors && 'has-custom-accent',
        dividerColors && 'has-custom-divider',
        isDarkBg && 'dark-card-background',
      )}
      style={{
        '--card-size': cardSize,
        '--card-columns': cardColumns,
        ...(backgroundColor ? {'--card-bg-color': backgroundColor} : {}),
        ...(borderSize ? {'--card-border-size': borderSize} : {}),
      } as React.CSSProperties}
    >
      {data.value.cards.map((card, i) => <CardBlock
        key={i}
        data={card}
        accentColor={accentColors ? accentColors[i % accentColors.length] : undefined}
        dividerColor={dividerColors ? dividerColors[i % dividerColors.length] : undefined}
      />)}
    </div>
  );
}

export function CardBlock({data, accentColor, dividerColor}: {data: CardBlockConfig; accentColor?: string; dividerColor?: string}) {
  const [cta] = data.ctaBlock ?? [];
  const style = (accentColor || dividerColor)
    ? {
      ...(accentColor ? {'--card-accent': accentColor} : {}),
      ...(dividerColor ? {'--card-divider': dividerColor} : {}),
    } as React.CSSProperties
    : undefined;

  return <div className="content-block-card" style={style}>
    <RichTextContent html={data.text} />
    {cta ? <CTALink link={cta} /> : null}
  </div>;
}
