import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './BigNumberBlock.css';
export function BigNumberBlock({ data }) {
    const { number, caption, color } = data.value;
    return _jsxs("div", { className: "content-block-big-number", children: [_jsx("span", { className: color ? `number text-${color}` : 'number', children: number }), caption ? _jsx("span", { className: "caption", children: caption }) : null] });
}
