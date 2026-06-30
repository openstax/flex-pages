"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMenu = BookMenu;
const jsx_runtime_1 = require("react/jsx-runtime");
const ActionContext_1 = require("@openstax/flex-page-renderer/ActionContext");
const RouteContext_1 = require("@openstax/flex-page-renderer/RouteContext");
const ui_components_1 = require("@openstax/ui-components");
const react_1 = __importDefault(require("react"));
// The "Get the book" dropdown. Each item is a dynamic link target: action
// targets fire a registered handler (onAction); every other target is a real
// link and is rendered with href (route targets resolve to their url via the
// RouteContext renderer). react-aria renders href items as <a> and onAction
// items as <div>, both role=menuitem.
function BookMenu({ buttonText, items, disabled }) {
    const routes = react_1.default.useContext(RouteContext_1.RouteContext);
    const actions = react_1.default.useContext(ActionContext_1.ActionContext);
    return (0, jsx_runtime_1.jsx)(ui_components_1.DropdownMenu, { text: buttonText, variant: 'light', width: '100%', disabled: disabled, children: items.map((item, i) => {
            var _a;
            const { type, value, params } = item.target;
            if (type === 'action') {
                return (0, jsx_runtime_1.jsx)(ui_components_1.DropdownMenuItem, { onAction: () => { var _a, _b; return (_b = (_a = actions[value]) === null || _a === void 0 ? void 0 : _a.handler) === null || _b === void 0 ? void 0 : _b.call(_a, params); }, children: item.text }, i);
            }
            const href = type === 'route' ? (_a = routes[value]) === null || _a === void 0 ? void 0 : _a.render(params) : value;
            return (0, jsx_runtime_1.jsx)(ui_components_1.DropdownMenuItem, { href: href, children: item.text }, i);
        }) });
}
