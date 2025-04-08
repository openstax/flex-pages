import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { scrollTo } from '../utils';
import { ActionContext } from '../ActionContext';
export const linkFieldConfig = [
    { name: 'text', label: 'Link Text', type: 'text', required: true },
    { name: 'ariaLabel', label: 'Aria Label', type: 'text' },
    { name: 'target', label: 'Link Target', type: 'link-target' },
];
export function Link({ link, ...props }) {
    var _a;
    const type = link.target.type;
    const actions = React.useContext(ActionContext);
    const onClick = React.useCallback((e) => {
        var _a, _b;
        if (type === 'anchor') {
            e.preventDefault();
            const target = document.getElementById(link.target.value.substring(1));
            if (target) {
                scrollTo(target);
            }
        }
        else if (type === 'action') {
            (_b = (_a = actions[link.target.value]) === null || _a === void 0 ? void 0 : _a.handler) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
    }, [link]);
    if (type === 'action') {
        return _jsx("button", { "aria-label": link.ariaLabel || undefined, disabled: ((_a = actions[link.target.value]) === null || _a === void 0 ? void 0 : _a.handler) === undefined, ...props, onClick: onClick, children: link.text });
    }
    return _jsx("a", { "aria-label": link.ariaLabel || undefined, ...props, href: link.target.value, onClick: onClick, children: link.text });
}
