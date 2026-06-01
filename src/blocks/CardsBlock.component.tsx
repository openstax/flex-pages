import cn from 'classnames';
import Color from 'color';
import React from 'react';
import { findByType } from '../utils';
import { CTALink } from './CTABlock.component';
import type { CardBlockConfig, CardsBlockConfig } from './CardsBlock.fields';
import { RichTextContent } from './RichTextBlock.component';
import './CardsBlock.css';

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
        ...(borderSize ? {'--card-border-size': `${borderSize}px`} : {}),
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
