'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { ActionContext } from '@openstax/flex-page-renderer/ActionContext';
import { RouteContext } from '@openstax/flex-page-renderer/RouteContext';
import { DropdownMenu, DropdownMenuItem } from '@openstax/ui-components';
import React from 'react';
// The "Get the book" dropdown. Each item is a dynamic link target: action
// targets fire a registered handler (onAction); every other target is a real
// link and is rendered with href (route targets resolve to their url via the
// RouteContext renderer). react-aria renders href items as <a> and onAction
// items as <div>, both role=menuitem.
export function BookMenu({ buttonText, items, disabled }) {
    const routes = React.useContext(RouteContext);
    const actions = React.useContext(ActionContext);
    return _jsx(DropdownMenu, { text: buttonText, variant: 'light', width: '100%', disabled: disabled, children: items.map((item, i) => {
            var _a;
            const { type, value, params } = item.target;
            if (type === 'action') {
                return _jsx(DropdownMenuItem, { onAction: () => { var _a, _b; return (_b = (_a = actions[value]) === null || _a === void 0 ? void 0 : _a.handler) === null || _b === void 0 ? void 0 : _b.call(_a, params); }, children: item.text }, i);
            }
            const href = type === 'route' ? (_a = routes[value]) === null || _a === void 0 ? void 0 : _a.render(params) : value;
            return _jsx(DropdownMenuItem, { href: href, children: item.text }, i);
        }) });
}
