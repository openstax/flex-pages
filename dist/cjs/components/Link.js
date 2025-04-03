"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.linkFieldConfig = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const utils_1 = require("../utils");
const ActionContext_1 = require("../ActionContext");
exports.linkFieldConfig = [
    { name: 'text', label: 'Link Text', type: 'text', required: true },
    { name: 'ariaLabel', label: 'Aria Label', type: 'text' },
    { name: 'target', label: 'Link Target', type: 'link-target' },
];
function Link({ link, ...props }) {
    var _a;
    const type = link.target.type;
    const actions = react_1.default.useContext(ActionContext_1.ActionContext);
    const onClick = react_1.default.useCallback((e) => {
        var _a, _b;
        if (type === 'anchor') {
            e.preventDefault();
            const target = document.getElementById(link.target.value.substring(1));
            if (target) {
                (0, utils_1.scrollTo)(target);
            }
        }
        else if (type === 'action') {
            (_b = (_a = actions[link.target.value]) === null || _a === void 0 ? void 0 : _a.handler) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
    }, [link]);
    if (type === 'action') {
        return (0, jsx_runtime_1.jsx)("button", { "aria-label": link.ariaLabel || undefined, disabled: ((_a = actions[link.target.value]) === null || _a === void 0 ? void 0 : _a.handler) === undefined, ...props, onClick: onClick, children: link.text });
    }
    return (0, jsx_runtime_1.jsx)("a", { "aria-label": link.ariaLabel || undefined, ...props, href: link.target.value, onClick: onClick, children: link.text });
}
exports.Link = Link;
