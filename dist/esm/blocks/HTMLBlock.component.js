import { jsx as _jsx } from "react/jsx-runtime";
import { Html } from '../components/Html.js';
export function HTMLBlock({ data }) {
    return _jsx(Html, { sanitize: false, block: true, html: data.value });
}
