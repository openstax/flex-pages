'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { ActionContext } from '../ActionContext';
import { RouteContext } from '../RouteContext';
import { handleLinkClick } from '../lib/linkBehavior';
export { linkFieldConfig } from './Link.fields';
export function Link({ link, ...props }) {
    var _a;
    const type = link.target.type;
    const actions = React.useContext(ActionContext);
    const routes = React.useContext(RouteContext);
    const route = type === 'route' ? routes[link.target.value] : undefined;
    const onClick = React.useCallback((e) => {
        handleLinkClick(e, e.currentTarget, link.target, { routes, actions });
    }, [link, routes, actions]);
    if (type === 'action') {
        return _jsx("button", { "aria-label": link.ariaLabel || undefined, disabled: ((_a = actions[link.target.value]) === null || _a === void 0 ? void 0 : _a.handler) === undefined, ...props, onClick: onClick, children: link.text });
    }
    if (type === 'route') {
        if (!route)
            return null;
        return _jsx("a", { "aria-label": link.ariaLabel || undefined, ...props, href: route.render(link.target.params), onClick: onClick, children: link.text });
    }
    return _jsx("a", { "aria-label": link.ariaLabel || undefined, ...props, href: link.target.value, onClick: onClick, children: link.text });
}
