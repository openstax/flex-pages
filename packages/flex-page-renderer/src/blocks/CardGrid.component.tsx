import cn from 'classnames';
import Color from 'color';
import React from 'react';
import { type CardGridConfigOption, parseCardGridConfig } from './CardGrid.config.js';
import './CardGrid.css';

// A config value counts as "set" when present and non-empty, so an explicit 0
// (a falsy but meaningful value, e.g. border_size: 0 = no border) wins over the
// SCSS fallback rather than being treated as absent.
const present = (v?: string): v is string => v != null && v !== '';

export function CardGrid({config, children}: {config: CardGridConfigOption[]; children: React.ReactNode}) {
  const c = parseCardGridConfig(config, (color) => Color(color).isDark()); // eslint-disable-line new-cap
  const items = React.Children.toArray(children);
  return (
    <div
      className={cn(
        'content-block-cards',
        c.styleClass,
        present(c.cardSize) && 'has-size',
        c.cardColumns && 'has-columns',
        present(c.cardMinSize) && 'has-min-size',
        present(c.accentSize) && 'has-accent-size',
        c.accentColors && 'has-custom-accent',
        c.dividerColors && 'has-custom-divider',
        c.isDarkBg && 'dark-card-background',
      )}
      style={{
        '--card-size': c.cardSize,
        '--card-columns': c.cardColumns,
        '--card-min-size': c.cardMinSize,
        // Value-bearing vars only when present, so an explicit 0 wins over the
        // SCSS fallback.
        ...(present(c.backgroundColor) ? {'--card-bg-color': c.backgroundColor} : {}),
        ...(present(c.borderSize) ? {'--card-border-size': `${c.borderSize}px`} : {}),
        ...(present(c.accentSize) ? {'--card-accent-size': `${c.accentSize}px`} : {}),
        ...(present(c.padding) ? {'--card-padding': c.padding} : {}),
        ...(present(c.paddingTop) ? {'--card-padding-top': c.paddingTop} : {}),
        ...(present(c.paddingBottom) ? {'--card-padding-bottom': c.paddingBottom} : {}),
      } as React.CSSProperties}
    >
      {items.map((child, i) => {
        const accent = c.accentColors?.length ? c.accentColors[i % c.accentColors.length] : undefined;
        const divider = c.dividerColors?.length ? c.dividerColors[i % c.dividerColors.length] : undefined;
        const style = (accent || divider) ? {
          ...(accent ? {'--card-accent': accent} : {}),
          ...(divider ? {'--card-divider': divider} : {}),
        } as React.CSSProperties : undefined;
        const key = React.isValidElement(child) && child.key != null ? child.key : i;
        return <div key={key} className="content-block-card" style={style}>{child}</div>;
      })}
    </div>
  );
}
