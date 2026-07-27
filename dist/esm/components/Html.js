import { jsx as _jsx } from "react/jsx-runtime";
import { sanitizeHTML } from '../lib/sanitizeHtml.js';
export const Html = (props) => {
    const html = props.sanitize === false
        ? props.html
        : sanitizeHTML(props.html);
    const Tag = props.block ? 'div' : 'span';
    return _jsx(Tag, { dangerouslySetInnerHTML: { __html: html }, className: props.className, id: props.id, hidden: props.hidden });
};
