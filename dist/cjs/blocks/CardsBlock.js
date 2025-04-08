"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardBlock = exports.CardsBlock = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
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
            ] },
    ],
};
function CardsBlock({ data }) {
    var _a, _b;
    const cardStyle = (_a = (0, utils_1.findByType)(data.value.config, 'card_style')) === null || _a === void 0 ? void 0 : _a.value;
    const styleClass = cardStyle ? `card_style_${cardStyle}` : undefined;
    const cardSize = (_b = (0, utils_1.findByType)(data.value.config, 'card_size')) === null || _b === void 0 ? void 0 : _b.value;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('content-block-cards', styleClass), style: { '--card-size': cardSize }, children: data.value.cards.map((card, i) => (0, jsx_runtime_1.jsx)(CardBlock, { data: card }, i)) }));
}
exports.CardsBlock = CardsBlock;
function CardBlock({ data }) {
    var _a;
    const [cta] = (_a = data.ctaBlock) !== null && _a !== void 0 ? _a : [];
    return (0, jsx_runtime_1.jsxs)("div", { className: "content-block-card", children: [(0, jsx_runtime_1.jsx)(RichTextBlock_1.RichTextContent, { html: data.text }), cta ? (0, jsx_runtime_1.jsx)(CTABlock_1.CTALink, { link: cta }) : null] });
}
exports.CardBlock = CardBlock;
