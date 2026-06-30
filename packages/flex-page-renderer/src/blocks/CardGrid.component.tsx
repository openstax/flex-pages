import cn from 'classnames';
import Color from 'color';
import React from 'react';
import { parseCardGridConfig, type CardGridConfigOption } from './CardGrid.config.js';
import './CardGrid.css';

export function CardGrid({config, children}: {config: CardGridConfigOption[]; children: React.ReactNode[]}) {
  const c = parseCardGridConfig(config, (color) => Color(color).isDark()); // eslint-disable-line new-cap
  const items = React.Children.toArray(children);
  return (
    <div
      className={cn(
        'content-block-cards',
        c.styleClass,
        c.cardColumns && 'has-columns',
        c.accentColors && 'has-custom-accent',
        c.dividerColors && 'has-custom-divider',
        c.isDarkBg && 'dark-card-background',
      )}
      style={{
        '--card-size': c.cardSize,
        '--card-columns': c.cardColumns,
        ...(c.backgroundColor ? {'--card-bg-color': c.backgroundColor} : {}),
        ...(c.borderSize ? {'--card-border-size': `${c.borderSize}px`} : {}),
      } as React.CSSProperties}
    >
      {items.map((child, i) => {
        const accent = c.accentColors ? c.accentColors[i % c.accentColors.length] : undefined;
        const divider = c.dividerColors ? c.dividerColors[i % c.dividerColors.length] : undefined;
        const style = (accent || divider) ? {
          ...(accent ? {'--card-accent': accent} : {}),
          ...(divider ? {'--card-divider': divider} : {}),
        } as React.CSSProperties : undefined;
        return <div key={i} className="content-block-card" style={style}>{child}</div>;
      })}
    </div>
  );
}
