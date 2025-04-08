import { jsx as _jsx } from "react/jsx-runtime";
import DOMPurify from 'dompurify';
export const Html = (props) => {
    const html = props.sanitize === false
        ? props.html
        : DOMPurify.sanitize(props.html, { ADD_ATTR: ['target'] });
    return props.block
        ? _jsx("div", { dangerouslySetInnerHTML: { __html: html }, className: props.className })
        : _jsx("span", { dangerouslySetInnerHTML: { __html: html }, className: props.className });
};
