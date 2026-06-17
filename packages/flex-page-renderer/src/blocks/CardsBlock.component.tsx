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

// accent_colors / divider_colors arrive as an array from the Wagtail CMS (a
// ListBlock of color pickers) but as a comma-separated string from the
// preview/docs schema. Accept both — calling .split on the CMS array threw and
// took out the whole card render. Empty -> undefined so the class isn't added.
const toColorList = (raw?: string | string[]): string[] | undefined => {
  if (raw == null) return undefined;
  const list = (Array.isArray(raw) ? raw : raw.split(','))
    .map((c) => c.trim())
    .filter(Boolean);
  return list.length ? list : undefined;
};

export function CardsBlock({data}: {data: CardsBlockConfig}) {
  const cardStyle = findByType(data.value.config, 'card_style')?.value;
  const styleClass = cardStyle ? `card_style_${cardStyle}` : undefined;
  const cardSize = findByType(data.value.config, 'card_size')?.value;
  const cardColumns = findByType(data.value.config, 'card_columns')?.value;
  const accentColors = toColorList(findByType(data.value.config, 'accent_colors')?.value);
  const dividerColors = toColorList(findByType(data.value.config, 'divider_colors')?.value);
  const backgroundColor = findByType(data.value.config, 'background_color')?.value;
  const isDarkBg = backgroundColor ? Color(backgroundColor).isDark() : false; // eslint-disable-line new-cap
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
        present(accentSize) && 'has-accent-size',
        accentColors && 'has-custom-accent',
        dividerColors && 'has-custom-divider',
        isDarkBg && 'dark-card-background',
      )}
      style={{
        '--card-size': cardSize,
        '--card-columns': cardColumns,
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
