"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapsibleFieldset = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const styled_components_1 = __importDefault(require("styled-components"));
const Fieldset = styled_components_1.default.fieldset `
  &.collapsed > *:not(legend) {
    display: none;
  }

  > legend, > legend button {
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  > legend button {
    background: none;
    border: none;
  }
`;
const CollapsibleFieldset = ({ children, ...props }) => {
    const [collapsed, setCollapsed] = react_1.default.useState(false);
    return (0, jsx_runtime_1.jsxs)(Fieldset, { className: (0, classnames_1.default)({ collapsed }), children: [(0, jsx_runtime_1.jsxs)("legend", { children: [(0, jsx_runtime_1.jsx)("button", { type: "button", onClick: () => setCollapsed(previous => !previous), children: collapsed ? unFoldIcon : foldIcon }), props.legend] }), children] });
};
exports.CollapsibleFieldset = CollapsibleFieldset;
const foldIcon = (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", fill: "#5f6368", children: (0, jsx_runtime_1.jsx)("path", { d: "m356-160-56-56 180-180 180 180-56 56-124-124-124 124Zm124-404L300-744l56-56 124 124 124-124 56 56-180 180Z" }) });
const unFoldIcon = (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", fill: "#5f6368", children: (0, jsx_runtime_1.jsx)("path", { d: "M480-120 300-300l58-58 122 122 122-122 58 58-180 180ZM358-598l-58-58 180-180 180 180-58 58-122-122-122 122Z" }) });
