import { jsx as _jsx } from "react/jsx-runtime";
import DOMPurify from 'isomorphic-dompurify';
export const Html = (props) => {
    const html = props.sanitize === false
        ? props.html
        : DOMPurify.sanitize(props.html, { ADD_ATTR: ['target'] });
    const Tag = props.block ? 'div' : 'span';
    return _jsx(Tag, { dangerouslySetInnerHTML: { __html: html }, className: props.className, id: props.id, hidden: props.hidden });
};
