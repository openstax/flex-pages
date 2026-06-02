import { jsx as _jsx } from "react/jsx-runtime";
import { Html } from '../components/Html';
import { RawHtmlWithLinks } from '../components/RawHtmlWithLinks';
import './RichTextBlock.css';
export function RichTextContent({ html }) {
    // Cheap server-side discriminator: only escalate to the client renderer when
    // the markup actually contains a dynamic link. Link-free prose stays a
    // zero-JS server render. (No false negatives — the editor always writes the
    // literal `data-flex-link` attribute; a false positive merely ships unused JS.)
    if (html.includes('data-flex-link')) {
        return _jsx(RawHtmlWithLinks, { block: true, className: 'content-block-rich-text', html: html });
    }
    return _jsx(Html, { block: true, className: 'content-block-rich-text', html: html });
}
export function RichTextBlock({ data }) {
    return _jsx(RichTextContent, { html: data.value });
}
