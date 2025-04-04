import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
const Fieldset = styled.fieldset `
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
export const CollapsibleFieldset = ({ children, ...props }) => {
    const [collapsed, setCollapsed] = React.useState(false);
    return _jsxs(Fieldset, { className: cn({ collapsed }), children: [_jsxs("legend", { children: [_jsx("button", { type: "button", onClick: () => setCollapsed(previous => !previous), children: collapsed ? unFoldIcon : foldIcon }), props.legend] }), children] });
};
const foldIcon = _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", fill: "#5f6368", children: _jsx("path", { d: "m356-160-56-56 180-180 180 180-56 56-124-124-124 124Zm124-404L300-744l56-56 124 124 124-124 56 56-180 180Z" }) });
const unFoldIcon = _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", fill: "#5f6368", children: _jsx("path", { d: "M480-120 300-300l58-58 122 122 122-122 58 58-180 180ZM358-598l-58-58 180-180 180 180-58 58-122-122-122 122Z" }) });
