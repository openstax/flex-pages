'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { ActionContext } from '../ActionContext.js';
import { RouteContext } from '../RouteContext.js';
import { handleLinkClick, readLinkTarget } from '../lib/linkBehavior.js';
import { sanitizeHTMLToDom } from '../lib/sanitizeHtml.js';
export function RawHtmlWithLinks({ html, className, block, id, hidden }) {
    const routes = React.useContext(RouteContext);
    const actions = React.useContext(ActionContext);
    const resolvedHtml = React.useMemo(() => {
        // RETURN_DOM yields the sanitized content wrapped in a <body>; the helper
        // narrows it to HTMLElement for querySelectorAll/innerHTML.
        const dom = sanitizeHTMLToDom(html);
        dom.querySelectorAll('a[data-flex-link]').forEach((a) => {
            const target = readLinkTarget(a);
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
    const onClick = React.useCallback((e) => {
        const anchor = e.target.closest('a[data-flex-link]');
        if (!anchor)
            return;
        const target = readLinkTarget(anchor);
        if (target)
            handleLinkClick(e, anchor, target, { routes, actions });
    }, [routes, actions]);
    const Tag = block ? 'div' : 'span';
    return (_jsx(Tag, { id: id, hidden: hidden, className: className, onClick: onClick, suppressHydrationWarning: true, dangerouslySetInnerHTML: { __html: resolvedHtml } }));
}
