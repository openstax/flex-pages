import { jsx as _jsx } from "react/jsx-runtime";
import { ActionContext } from './ActionContext.js';
import { RouteContext } from './RouteContext.js';
export * from './ActionContext.js';
export * from './RouteContext.js';
export function FlexPageContextProvider({ children, actions, routes }) {
    return _jsx(ActionContext.Provider, { value: actions !== null && actions !== void 0 ? actions : {}, children: _jsx(RouteContext.Provider, { value: routes !== null && routes !== void 0 ? routes : {}, children: children }) });
}
