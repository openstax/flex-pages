import { jsx as _jsx } from "react/jsx-runtime";
import './BigNumbersBlock.css';
// A container that lays out its Big Number children in a wrapping row (an
// impact-stats band). Children are resolved upstream and passed as `content`,
// matching how Well/Section render their nested blocks; the row layout lives
// in BigNumbersBlock.scss.
export function BigNumbersBlock({ content }) {
    return _jsx("div", { className: "content-block-big-numbers", children: content });
}
