import cn from 'classnames';
import Color from 'color';
import React from 'react';
import { findByType } from '../utils.js';
import { CTALink } from './CTABlock.component.js';
import type { CardBlockConfig, CardsBlockConfig } from './CardsBlock.config.js';
import { RichTextContent } from './RichTextBlock.component.js';
import './CardsBlock.css';

// A config value counts as "set" when it is present and non-empty. Used so an
// explicit 0 (a falsy but meaningful value) is treated as set, not absent.
const present = (v?: string): v is string => v != null && v !== '';

export function CardsBlock({data}: {data: CardsBlockConfig}) {
  const cardStyle = findByType(data.value.config, 'card_style')?.value;
  const styleClass = cardStyle ? `card_style_${cardStyle}` : undefined;
  const cardSize = findByType(data.value.config, 'card_size')?.value;
  const cardColumns = findByType(data.value.config, 'card_columns')?.value;
  const cardMinSize = findByType(data.value.config, 'card_min_size')?.value;
  const backgroundColor = findByType(data.value.config, 'background_color')?.value;
  const isDarkBg = backgroundColor ? Color(backgroundColor).isDark() : false;  
  const borderSize = findByType(data.value.config, 'border_size')?.value;
  const accentSize = findByType(data.value.config, 'accent_size')?.value;
  const padding = findByType(data.value.config, 'padding')?.value;
  const paddingTop = findByType(data.value.config, 'padding_top')?.value;
  const paddingBottom = findByType(data.value.config, 'padding_bottom')?.value;

  return (
    <div
      className={cn(
        'content-block-cards',
        styleClass,
        present(cardSize) && 'has-size',
        cardColumns && 'has-columns',
        present(cardMinSize) && 'has-min-size',
        present(accentSize) && 'has-accent-size',
        isDarkBg && 'dark-card-background',
      )}
      style={{
        '--card-size': cardSize,
        '--card-columns': cardColumns,
        '--card-min-size': cardMinSize,
        // Set value-bearing vars only when present, so an explicit 0
        // (e.g. border_size: 0 = no border) wins over the SCSS fallback.
        ...(present(backgroundColor) ? {'--card-bg-color': backgroundColor} : {}),
        ...(present(borderSize) ? {'--card-border-size': `${borderSize}px`} : {}),
        ...(present(accentSize) ? {'--card-accent-size': `${accentSize}px`} : {}),
        ...(present(padding) ? {'--card-padding': padding} : {}),
        ...(present(paddingTop) ? {'--card-padding-top': paddingTop} : {}),
        ...(present(paddingBottom) ? {'--card-padding-bottom': paddingBottom} : {}),
      } as React.CSSProperties}
    >
      {data.value.cards.map((card, i) => <CardBlock key={i} data={card} />)}
    </div>
  );
}

export function CardBlock({data}: {data: CardBlockConfig}) {
  const [cta] = data.ctaBlock ?? [];
  const accentColor = findByType(data.config, 'accent_color')?.value;
  const dividerColor = findByType(data.config, 'divider_color')?.value;
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
