import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import Color from 'color';
import { findByType } from '../utils.js';
import { CTALink } from './CTABlock.component.js';
import { RichTextContent } from './RichTextBlock.component.js';
import './CardsBlock.css';
// A config value counts as "set" when it is present and non-empty. Used so an
// explicit 0 (a falsy but meaningful value) is treated as set, not absent.
const present = (v) => v != null && v !== '';
export function CardsBlock({ data }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const cardStyle = (_a = findByType(data.value.config, 'card_style')) === null || _a === void 0 ? void 0 : _a.value;
    const styleClass = cardStyle ? `card_style_${cardStyle}` : undefined;
    const layout = (_b = findByType(data.value.config, 'layout')) === null || _b === void 0 ? void 0 : _b.value;
    const cardSize = (_c = findByType(data.value.config, 'card_size')) === null || _c === void 0 ? void 0 : _c.value;
    const cardColumns = (_d = findByType(data.value.config, 'card_columns')) === null || _d === void 0 ? void 0 : _d.value;
    const cardMinSize = (_e = findByType(data.value.config, 'card_min_size')) === null || _e === void 0 ? void 0 : _e.value;
    const backgroundColor = (_f = findByType(data.value.config, 'background_color')) === null || _f === void 0 ? void 0 : _f.value;
    const isDarkBg = backgroundColor ? Color(backgroundColor).isDark() : false;
    const borderSize = (_g = findByType(data.value.config, 'border_size')) === null || _g === void 0 ? void 0 : _g.value;
    const accentSize = (_h = findByType(data.value.config, 'accent_size')) === null || _h === void 0 ? void 0 : _h.value;
    const padding = (_j = findByType(data.value.config, 'padding')) === null || _j === void 0 ? void 0 : _j.value;
    const paddingTop = (_k = findByType(data.value.config, 'padding_top')) === null || _k === void 0 ? void 0 : _k.value;
    const paddingBottom = (_l = findByType(data.value.config, 'padding_bottom')) === null || _l === void 0 ? void 0 : _l.value;
    return (_jsx("div", { className: cn('content-block-cards', styleClass, layout === 'masonry' && 'layout-masonry', present(cardSize) && 'has-size', cardColumns && 'has-columns', present(cardMinSize) && 'has-min-size', present(accentSize) && 'has-accent-size', isDarkBg && 'dark-card-background'), style: {
            '--card-size': cardSize,
            '--card-columns': cardColumns,
            '--card-min-size': cardMinSize,
            // Set value-bearing vars only when present, so an explicit 0
            // (e.g. border_size: 0 = no border) wins over the SCSS fallback.
            ...(present(backgroundColor) ? { '--card-bg-color': backgroundColor } : {}),
            ...(present(borderSize) ? { '--card-border-size': `${borderSize}px` } : {}),
            ...(present(accentSize) ? { '--card-accent-size': `${accentSize}px` } : {}),
            ...(present(padding) ? { '--card-padding': padding } : {}),
            ...(present(paddingTop) ? { '--card-padding-top': paddingTop } : {}),
            ...(present(paddingBottom) ? { '--card-padding-bottom': paddingBottom } : {}),
        }, children: data.value.cards.map((card, i) => _jsx(CardBlock, { data: card }, i)) }));
}
export function CardBlock({ data }) {
    var _a, _b, _c;
    const [cta] = (_a = data.ctaBlock) !== null && _a !== void 0 ? _a : [];
    const accentColor = (_b = findByType(data.config, 'accent_color')) === null || _b === void 0 ? void 0 : _b.value;
    const dividerColor = (_c = findByType(data.config, 'divider_color')) === null || _c === void 0 ? void 0 : _c.value;
    const style = (accentColor || dividerColor)
        ? {
            ...(accentColor ? { '--card-accent': accentColor } : {}),
            ...(dividerColor ? { '--card-divider': dividerColor } : {}),
        }
        : undefined;
    return _jsxs("div", { className: "content-block-card", style: style, children: [_jsx(RichTextContent, { html: data.text }), cta ? _jsx(CTALink, { link: cta }) : null] });
}
