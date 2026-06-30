import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { CTALink } from './CTABlock.component.js';
import { CardGrid } from './CardGrid.component.js';
import { RichTextContent } from './RichTextBlock.component.js';
import './CardsBlock.css';
export function CardsBlock({ data }) {
    return (_jsx(CardGrid, { config: data.value.config, children: data.value.cards.map((card, i) => _jsx(CardContent, { data: card }, i)) }));
}
function CardContent({ data }) {
    var _a;
    const [cta] = (_a = data.ctaBlock) !== null && _a !== void 0 ? _a : [];
    return _jsxs(_Fragment, { children: [_jsx(RichTextContent, { html: data.text }), cta ? _jsx(CTALink, { link: cta }) : null] });
}
