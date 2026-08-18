"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkFieldConfig = void 0;
exports.LinkComponent = LinkComponent;
exports.Link = Link;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const ActionContext_js_1 = require("../ActionContext.js");
const RouteContext_js_1 = require("../RouteContext.js");
const linkBehavior_js_1 = require("../lib/linkBehavior.js");
var Link_config_js_1 = require("./Link.config.js");
Object.defineProperty(exports, "linkFieldConfig", { enumerable: true, get: function () { return Link_config_js_1.linkFieldConfig; } });
// Renders a dynamic link from a concrete target, using `children` as the link
// content. The field-driven `Link` below wraps this with a LinkFields config;
// callers that need richer content (e.g. an image + text inside one anchor)
// use this component directly. The descriptor prop is `linkTarget` so it does
// not collide with the DOM anchor `target` attribute (still passable as a prop).
function LinkComponent({ linkTarget, ariaLabel, children, ...props }) {
    var _a;
    const type = linkTarget.type;
    const actions = react_1.default.useContext(ActionContext_js_1.ActionContext);
    const routes = react_1.default.useContext(RouteContext_js_1.RouteContext);
    const route = type === 'route' ? routes[linkTarget.value] : undefined;
    const onClick = react_1.default.useCallback((e) => {
        (0, linkBehavior_js_1.handleLinkClick)(e, e.currentTarget, linkTarget, { routes, actions });
    }, [linkTarget, routes, actions]);
    if (type === 'action') {
        return (0, jsx_runtime_1.jsx)("button", { "aria-label": ariaLabel || undefined, disabled: ((_a = actions[linkTarget.value]) === null || _a === void 0 ? void 0 : _a.handler) === undefined, ...props, onClick: onClick, children: children });
    }
    if (type === 'route') {
        if (!route)
            return null;
        return (0, jsx_runtime_1.jsx)("a", { "aria-label": ariaLabel || undefined, ...props, href: route.render(linkTarget.params), onClick: onClick, children: children });
    }
    return (0, jsx_runtime_1.jsx)("a", { "aria-label": ariaLabel || undefined, ...props, href: linkTarget.value, onClick: onClick, children: children });
}
function Link({ link, ...props }) {
    return (0, jsx_runtime_1.jsx)(LinkComponent, { linkTarget: link.target, ariaLabel: link.ariaLabel, ...props, children: link.text });
}
