"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawHtmlWithLinks = RawHtmlWithLinks;
const jsx_runtime_1 = require("react/jsx-runtime");
const isomorphic_dompurify_1 = __importDefault(require("isomorphic-dompurify"));
const react_1 = __importDefault(require("react"));
const ActionContext_js_1 = require("../ActionContext.js");
const RouteContext_js_1 = require("../RouteContext.js");
const linkBehavior_js_1 = require("../lib/linkBehavior.js");
function RawHtmlWithLinks({ html, className, block, id, hidden }) {
    const routes = react_1.default.useContext(RouteContext_js_1.RouteContext);
    const actions = react_1.default.useContext(ActionContext_js_1.ActionContext);
    const resolvedHtml = react_1.default.useMemo(() => {
        // RETURN_DOM yields the sanitized content wrapped in a <body>; the types
        // surface it as Node, so narrow to HTMLElement for querySelectorAll/innerHTML.
        const dom = isomorphic_dompurify_1.default.sanitize(html, {
            ADD_ATTR: ['target'],
            RETURN_DOM: true,
        });
        dom.querySelectorAll('a[data-flex-link]').forEach((a) => {
            const target = (0, linkBehavior_js_1.readLinkTarget)(a);
            if (!target)
                return;
            if (target.type === 'route') {
                const route = routes[target.value];
                if (route)
                    a.setAttribute('href', route.render(target.params));
            }
            else if (target.type === 'action') {
                // actions have no URL; expose them as buttons for assistive tech
                a.setAttribute('role', 'button');
            }
            else if (!a.getAttribute('href')) {
                // anchor / external / internal: fall back to the stored value
                a.setAttribute('href', target.value);
            }
        });
        return dom.innerHTML;
    }, [html, routes]);
    const onClick = react_1.default.useCallback((e) => {
        const anchor = e.target.closest('a[data-flex-link]');
        if (!anchor)
            return;
        const target = (0, linkBehavior_js_1.readLinkTarget)(anchor);
        if (target)
            (0, linkBehavior_js_1.handleLinkClick)(e, anchor, target, { routes, actions });
    }, [routes, actions]);
    const Tag = block ? 'div' : 'span';
    return ((0, jsx_runtime_1.jsx)(Tag, { id: id, hidden: hidden, className: className, onClick: onClick, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: resolvedHtml } }));
}
