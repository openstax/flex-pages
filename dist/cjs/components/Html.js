"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Html = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const isomorphic_dompurify_1 = __importDefault(require("isomorphic-dompurify"));
const Html = (props) => {
    const html = props.sanitize === false
        ? props.html
        : isomorphic_dompurify_1.default.sanitize(props.html, { ADD_ATTR: ['target'] });
    const Tag = props.block ? 'div' : 'span';
    return (0, jsx_runtime_1.jsx)(Tag, { dangerouslySetInnerHTML: { __html: html }, className: props.className, id: props.id, hidden: props.hidden });
};
exports.Html = Html;
