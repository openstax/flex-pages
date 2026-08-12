'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { ActionContext } from '../ActionContext.js';
import { RouteContext } from '../RouteContext.js';
import { handleLinkClick } from '../lib/linkBehavior.js';
export { linkFieldConfig } from './Link.config.js';
// Renders a dynamic link from a concrete target, using `children` as the link
// content. The field-driven `Link` below wraps this with a LinkFields config;
// callers that need richer content (e.g. an image + text inside one anchor)
// use this component directly. The descriptor prop is `linkTarget` so it does
// not collide with the DOM anchor `target` attribute (still passable as a prop).
export function LinkComponent({ linkTarget, ariaLabel, children, ...props }) {
    var _a;
    const type = linkTarget.type;
    const actions = React.useContext(ActionContext);
    const routes = React.useContext(RouteContext);
    const route = type === 'route' ? routes[linkTarget.value] : undefined;
    const onClick = React.useCallback((e) => {
        handleLinkClick(e, e.currentTarget, linkTarget, { routes, actions });
    }, [linkTarget, routes, actions]);
    if (type === 'action') {
        return _jsx("button", { "aria-label": ariaLabel || undefined, disabled: ((_a = actions[linkTarget.value]) === null || _a === void 0 ? void 0 : _a.handler) === undefined, ...props, onClick: onClick, children: children });
    }
    if (type === 'route') {
        if (!route)
            return null;
        return _jsx("a", { "aria-label": ariaLabel || undefined, ...props, href: route.render(linkTarget.params), onClick: onClick, children: children });
    }
    return _jsx("a", { "aria-label": ariaLabel || undefined, ...props, href: linkTarget.value, onClick: onClick, children: children });
}
export function Link({ link, ...props }) {
    return _jsx(LinkComponent, { linkTarget: link.target, ariaLabel: link.ariaLabel, ...props, children: link.text });
}
