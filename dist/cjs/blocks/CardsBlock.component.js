"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsBlock = CardsBlock;
exports.CardBlock = CardBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const color_1 = __importDefault(require("color"));
const utils_js_1 = require("../utils.js");
const CTABlock_component_js_1 = require("./CTABlock.component.js");
const RichTextBlock_component_js_1 = require("./RichTextBlock.component.js");
require("./CardsBlock.css");
// A config value counts as "set" when it is present and non-empty. Used so an
// explicit 0 (a falsy but meaningful value) is treated as set, not absent.
const present = (v) => v != null && v !== '';
function CardsBlock({ data }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const cardStyle = (_a = (0, utils_js_1.findByType)(data.value.config, 'card_style')) === null || _a === void 0 ? void 0 : _a.value;
    const styleClass = cardStyle ? `card_style_${cardStyle}` : undefined;
    const cardSize = (_b = (0, utils_js_1.findByType)(data.value.config, 'card_size')) === null || _b === void 0 ? void 0 : _b.value;
    const cardColumns = (_c = (0, utils_js_1.findByType)(data.value.config, 'card_columns')) === null || _c === void 0 ? void 0 : _c.value;
    const cardMinSize = (_d = (0, utils_js_1.findByType)(data.value.config, 'card_min_size')) === null || _d === void 0 ? void 0 : _d.value;
    const backgroundColor = (_e = (0, utils_js_1.findByType)(data.value.config, 'background_color')) === null || _e === void 0 ? void 0 : _e.value;
    const isDarkBg = backgroundColor ? (0, color_1.default)(backgroundColor).isDark() : false; // eslint-disable-line new-cap
    const borderSize = (_f = (0, utils_js_1.findByType)(data.value.config, 'border_size')) === null || _f === void 0 ? void 0 : _f.value;
    const accentSize = (_g = (0, utils_js_1.findByType)(data.value.config, 'accent_size')) === null || _g === void 0 ? void 0 : _g.value;
    const padding = (_h = (0, utils_js_1.findByType)(data.value.config, 'padding')) === null || _h === void 0 ? void 0 : _h.value;
    const paddingTop = (_j = (0, utils_js_1.findByType)(data.value.config, 'padding_top')) === null || _j === void 0 ? void 0 : _j.value;
    const paddingBottom = (_k = (0, utils_js_1.findByType)(data.value.config, 'padding_bottom')) === null || _k === void 0 ? void 0 : _k.value;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('content-block-cards', styleClass, present(cardSize) && 'has-size', cardColumns && 'has-columns', present(cardMinSize) && 'has-min-size', present(accentSize) && 'has-accent-size', isDarkBg && 'dark-card-background'), style: {
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
        }, children: data.value.cards.map((card, i) => (0, jsx_runtime_1.jsx)(CardBlock, { data: card }, i)) }));
}
function CardBlock({ data }) {
    var _a;
    const [cta] = (_a = data.ctaBlock) !== null && _a !== void 0 ? _a : [];
    // Per-card colors override the default palette via the var() fallbacks in
    // CardsBlock.scss (accent: rounded border / square top bar; divider: hr).
    const style = (data.accentColor || data.dividerColor)
        ? {
            ...(data.accentColor ? { '--card-accent': data.accentColor } : {}),
            ...(data.dividerColor ? { '--card-divider': data.dividerColor } : {}),
        }
        : undefined;
    return (0, jsx_runtime_1.jsxs)("div", { className: "content-block-card", style: style, children: [(0, jsx_runtime_1.jsx)(RichTextBlock_component_js_1.RichTextContent, { html: data.text }), cta ? (0, jsx_runtime_1.jsx)(CTABlock_component_js_1.CTALink, { link: cta }) : null] });
}
