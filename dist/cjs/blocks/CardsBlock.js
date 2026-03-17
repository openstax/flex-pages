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
const CTABlock_1 = require("./CTABlock");
const RichTextBlock_1 = require("./RichTextBlock");
require("./CardsBlock.css");
CardsBlock.blockConfig = {
    type: 'cards_block',
    label: 'Cards Block',
    categories: ['content'],
    fields: [
        { name: 'cards', label: 'Cards', type: 'list', fields: [
                { name: 'text', label: 'Card Text', type: 'rich-text', required: true },
                { name: 'ctaBlock', label: 'Call To Action', type: 'list', fields: CTABlock_1.ctaLinkFieldConfig, max: 1 },
            ] },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'card_style', label: 'Style', type: 'select', options: [
                        { label: 'Rounded', value: 'rounded' },
                        { label: 'Square', value: 'square' },
                    ] },
                { name: 'card_size', label: 'Size', help: 'A single number representing 10px increments', type: 'number' },
                { name: 'card_columns', label: 'Columns', help: 'Number of columns (works with Size)', type: 'number' },
                { name: 'accent_colors', label: 'Accent Colors', type: 'text', help: 'Comma-separated hex colors for card borders/shadows, e.g. #ff0000,#00ff00,#0000ff' },
                { name: 'divider_colors', label: 'Divider Colors', type: 'text', help: 'Comma-separated hex colors for card divider lines, e.g. #ff0000,#00ff00' },
                { name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex background color for cards' },
                { name: 'border_size', label: 'Border Size', type: 'number', help: 'Border thickness in pixels. Rounded: border width (default: 1px). Square: top accent height (default: 10px).' },
            ] },
    ],
};
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
    return (0, jsx_runtime_1.jsxs)("div", { className: "content-block-card", style: style, children: [(0, jsx_runtime_1.jsx)(RichTextBlock_1.RichTextContent, { html: data.text }), cta ? (0, jsx_runtime_1.jsx)(CTABlock_1.CTALink, { link: cta }) : null] });
}
