"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkFieldConfig = void 0;
exports.Link = Link;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const ActionContext_js_1 = require("../ActionContext.js");
const RouteContext_js_1 = require("../RouteContext.js");
const linkBehavior_js_1 = require("../lib/linkBehavior.js");
var Link_config_js_1 = require("./Link.config.js");
Object.defineProperty(exports, "linkFieldConfig", { enumerable: true, get: function () { return Link_config_js_1.linkFieldConfig; } });
function Link({ link, ...props }) {
    var _a;
    const type = link.target.type;
    const actions = react_1.default.useContext(ActionContext_js_1.ActionContext);
    const routes = react_1.default.useContext(RouteContext_js_1.RouteContext);
    const route = type === 'route' ? routes[link.target.value] : undefined;
    const onClick = react_1.default.useCallback((e) => {
        (0, linkBehavior_js_1.handleLinkClick)(e, e.currentTarget, link.target, { routes, actions });
    }, [link, routes, actions]);
    if (type === 'action') {
        return (0, jsx_runtime_1.jsx)("button", { "aria-label": link.ariaLabel || undefined, disabled: ((_a = actions[link.target.value]) === null || _a === void 0 ? void 0 : _a.handler) === undefined, ...props, onClick: onClick, children: link.text });
    }
    if (type === 'route') {
        if (!route)
            return null;
        return (0, jsx_runtime_1.jsx)("a", { "aria-label": link.ariaLabel || undefined, ...props, href: route.render(link.target.params), onClick: onClick, children: link.text });
    }
    return (0, jsx_runtime_1.jsx)("a", { "aria-label": link.ariaLabel || undefined, ...props, href: link.target.value, onClick: onClick, children: link.text });
}
