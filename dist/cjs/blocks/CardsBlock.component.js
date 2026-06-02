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
const utils_1 = require("../utils");
const CTABlock_component_1 = require("./CTABlock.component");
const RichTextBlock_component_1 = require("./RichTextBlock.component");
require("./CardsBlock.css");
function CardsBlock({ data }) {
    var _a, _b, _c, _d, _e, _f, _g;
    const cardStyle = (_a = (0, utils_1.findByType)(data.value.config, 'card_style')) === null || _a === void 0 ? void 0 : _a.value;
    const styleClass = cardStyle ? `card_style_${cardStyle}` : undefined;
    const cardSize = (_b = (0, utils_1.findByType)(data.value.config, 'card_size')) === null || _b === void 0 ? void 0 : _b.value;
    const cardColumns = (_c = (0, utils_1.findByType)(data.value.config, 'card_columns')) === null || _c === void 0 ? void 0 : _c.value;
    const accentColorsRaw = (_d = (0, utils_1.findByType)(data.value.config, 'accent_colors')) === null || _d === void 0 ? void 0 : _d.value;
    const accentColors = accentColorsRaw
        ? accentColorsRaw.split(',').map((c) => c.trim()).filter(Boolean)
        : undefined;
    const dividerColorsRaw = (_e = (0, utils_1.findByType)(data.value.config, 'divider_colors')) === null || _e === void 0 ? void 0 : _e.value;
    const dividerColors = dividerColorsRaw
        ? dividerColorsRaw.split(',').map((c) => c.trim()).filter(Boolean)
        : undefined;
    const backgroundColor = (_f = (0, utils_1.findByType)(data.value.config, 'background_color')) === null || _f === void 0 ? void 0 : _f.value;
    const isDarkBg = backgroundColor ? (0, color_1.default)(backgroundColor).isDark() : false; // eslint-disable-line new-cap
    const borderSize = (_g = (0, utils_1.findByType)(data.value.config, 'border_size')) === null || _g === void 0 ? void 0 : _g.value;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('content-block-cards', styleClass, cardColumns && 'has-columns', accentColors && 'has-custom-accent', dividerColors && 'has-custom-divider', isDarkBg && 'dark-card-background'), style: {
            '--card-size': cardSize,
            '--card-columns': cardColumns,
            ...(backgroundColor ? { '--card-bg-color': backgroundColor } : {}),
            ...(borderSize ? { '--card-border-size': `${borderSize}px` } : {}),
        }, children: data.value.cards.map((card, i) => (0, jsx_runtime_1.jsx)(CardBlock, { data: card, accentColor: accentColors ? accentColors[i % accentColors.length] : undefined, dividerColor: dividerColors ? dividerColors[i % dividerColors.length] : undefined }, i)) }));
}
function CardBlock({ data, accentColor, dividerColor }) {
    var _a;
    const [cta] = (_a = data.ctaBlock) !== null && _a !== void 0 ? _a : [];
    const style = (accentColor || dividerColor)
        ? {
            ...(accentColor ? { '--card-accent': accentColor } : {}),
            ...(dividerColor ? { '--card-divider': dividerColor } : {}),
        }
        : undefined;
    return (0, jsx_runtime_1.jsxs)("div", { className: "content-block-card", style: style, children: [(0, jsx_runtime_1.jsx)(RichTextBlock_component_1.RichTextContent, { html: data.text }), cta ? (0, jsx_runtime_1.jsx)(CTABlock_component_1.CTALink, { link: cta }) : null] });
}
