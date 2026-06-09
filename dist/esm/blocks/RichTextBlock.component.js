import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import { Html } from '../components/Html.js';
import { RawHtmlWithLinks } from '../components/RawHtmlWithLinks.js';
import './RichTextBlock.css';
// Renders rich-text HTML inside a single block element. Callers may forward
// `id`/`className`/`hidden` so the rendered element can stand in for a wrapper
// they would otherwise add around it; `className` is merged with the block's
// own `content-block-rich-text` class.
export function RichTextContent({ html, id, className, hidden }) {
    const props = { block: true, id, hidden, className: cn('content-block-rich-text', className) };
    // Cheap server-side discriminator: only escalate to the client renderer when
    // the markup actually contains a dynamic link. Link-free prose stays a
    // zero-JS server render. (No false negatives — the editor always writes the
    // literal `data-flex-link` attribute; a false positive merely ships unused JS.)
    if (html.includes('data-flex-link')) {
        return _jsx(RawHtmlWithLinks, { ...props, html: html });
    }
    return _jsx(Html, { ...props, html: html });
}
export function RichTextBlock({ data }) {
    return _jsx(RichTextContent, { html: data.value });
}
