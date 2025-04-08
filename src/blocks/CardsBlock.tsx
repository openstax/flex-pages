import cn from 'classnames';
import React from 'react';
import { findByType } from '../utils';
import { CTALink, CTALinkFields, ctaLinkFieldConfig } from './CTABlock';
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
    ]},
  ],
};

export function CardsBlock({data}: {data: CardsBlockConfig}) {
  const cardStyle = findByType(data.value.config, 'card_style')?.value;
  const styleClass = cardStyle ? `card_style_${cardStyle}` : undefined;
  const cardSize = findByType(data.value.config, 'card_size')?.value;

  return (
    <div
      className={cn('content-block-cards', styleClass)}
      style={{'--card-size': cardSize} as React.CSSProperties}
    >
      {data.value.cards.map((card, i) => <CardBlock key={i} data={card} />)}
    </div>
  );
}

export function CardBlock({data}: {data: CardBlockConfig}) {
  const [cta] = data.ctaBlock ?? [];

  return <div className="content-block-card">
    <RichTextContent html={data.text} />
    {cta ? <CTALink link={cta} /> : null}
  </div>;
}
