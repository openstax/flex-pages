"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsBlock = CardsBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const CTABlock_component_js_1 = require("./CTABlock.component.js");
const CardGrid_component_js_1 = require("./CardGrid.component.js");
const RichTextBlock_component_js_1 = require("./RichTextBlock.component.js");
require("./CardsBlock.css");
function CardsBlock({ data }) {
    return ((0, jsx_runtime_1.jsx)(CardGrid_component_js_1.CardGrid, { config: data.value.config, children: data.value.cards.map((card, i) => (0, jsx_runtime_1.jsx)(CardContent, { data: card }, i)) }));
}
function CardContent({ data }) {
    var _a;
    const [cta] = (_a = data.ctaBlock) !== null && _a !== void 0 ? _a : [];
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(RichTextBlock_component_js_1.RichTextContent, { html: data.text }), cta ? (0, jsx_runtime_1.jsx)(CTABlock_component_js_1.CTALink, { link: cta }) : null] });
}
