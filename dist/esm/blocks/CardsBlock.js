import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import { findByType } from '../utils';
import { CTALink, ctaLinkFieldConfig } from './CTABlock';
import { RichTextContent } from './RichTextBlock';
import './CardsBlock.css';
CardsBlock.blockConfig = {
    type: 'cards_block',
    label: 'Cards Block',
    categories: ['content'],
    fields: [
        { name: 'cards', label: 'Cards', type: 'list', fields: [
                { name: 'text', label: 'Card Text', type: 'text', required: true },
                { name: 'ctaBlock', label: 'Call To Action', type: 'list', fields: ctaLinkFieldConfig, max: 1 },
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
export function CardsBlock({ data }) {
    var _a, _b;
    const cardStyle = (_a = findByType(data.value.config, 'card_style')) === null || _a === void 0 ? void 0 : _a.value;
    const styleClass = cardStyle ? `card_style_${cardStyle}` : undefined;
    const cardSize = (_b = findByType(data.value.config, 'card_size')) === null || _b === void 0 ? void 0 : _b.value;
    return (_jsx("div", { className: cn('content-block-cards', styleClass), style: { '--card-size': cardSize }, children: data.value.cards.map((card, i) => _jsx(CardBlock, { data: card }, i)) }));
}
export function CardBlock({ data }) {
    var _a;
    const [cta] = (_a = data.ctaBlock) !== null && _a !== void 0 ? _a : [];
    return _jsxs("div", { className: "content-block-card", children: [_jsx(RichTextContent, { html: data.text }), cta ? _jsx(CTALink, { link: cta }) : null] });
}
