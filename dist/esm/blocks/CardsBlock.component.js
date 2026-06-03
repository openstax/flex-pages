import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import Color from 'color';
import { findByType } from '../utils';
import { CTALink } from './CTABlock.component';
import { RichTextContent } from './RichTextBlock.component';
import './CardsBlock.css';
export function CardsBlock({ data }) {
    var _a, _b, _c, _d, _e, _f, _g;
    const cardStyle = (_a = findByType(data.value.config, 'card_style')) === null || _a === void 0 ? void 0 : _a.value;
    const styleClass = cardStyle ? `card_style_${cardStyle}` : undefined;
    const cardSize = (_b = findByType(data.value.config, 'card_size')) === null || _b === void 0 ? void 0 : _b.value;
    const cardColumns = (_c = findByType(data.value.config, 'card_columns')) === null || _c === void 0 ? void 0 : _c.value;
    const accentColorsRaw = (_d = findByType(data.value.config, 'accent_colors')) === null || _d === void 0 ? void 0 : _d.value;
    const accentColors = accentColorsRaw
        ? accentColorsRaw.split(',').map((c) => c.trim()).filter(Boolean)
        : undefined;
    const dividerColorsRaw = (_e = findByType(data.value.config, 'divider_colors')) === null || _e === void 0 ? void 0 : _e.value;
    const dividerColors = dividerColorsRaw
        ? dividerColorsRaw.split(',').map((c) => c.trim()).filter(Boolean)
        : undefined;
    const backgroundColor = (_f = findByType(data.value.config, 'background_color')) === null || _f === void 0 ? void 0 : _f.value;
    const isDarkBg = backgroundColor ? Color(backgroundColor).isDark() : false; // eslint-disable-line new-cap
    const borderSize = (_g = findByType(data.value.config, 'border_size')) === null || _g === void 0 ? void 0 : _g.value;
    return (_jsx("div", { className: cn('content-block-cards', styleClass, cardColumns && 'has-columns', accentColors && 'has-custom-accent', dividerColors && 'has-custom-divider', isDarkBg && 'dark-card-background'), style: {
            '--card-size': cardSize,
            '--card-columns': cardColumns,
            ...(backgroundColor ? { '--card-bg-color': backgroundColor } : {}),
            ...(borderSize ? { '--card-border-size': `${borderSize}px` } : {}),
        }, children: data.value.cards.map((card, i) => _jsx(CardBlock, { data: card, accentColor: accentColors ? accentColors[i % accentColors.length] : undefined, dividerColor: dividerColors ? dividerColors[i % dividerColors.length] : undefined }, i)) }));
}
export function CardBlock({ data, accentColor, dividerColor }) {
    var _a;
    const [cta] = (_a = data.ctaBlock) !== null && _a !== void 0 ? _a : [];
    const style = (accentColor || dividerColor)
        ? {
            ...(accentColor ? { '--card-accent': accentColor } : {}),
            ...(dividerColor ? { '--card-divider': dividerColor } : {}),
        }
        : undefined;
    return _jsxs("div", { className: "content-block-card", style: style, children: [_jsx(RichTextContent, { html: data.text }), cta ? _jsx(CTALink, { link: cta }) : null] });
}
