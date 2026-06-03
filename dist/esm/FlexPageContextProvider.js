import { jsx as _jsx } from "react/jsx-runtime";
import { ActionContext } from './ActionContext';
import { RouteContext } from './RouteContext';
export * from './ActionContext';
export * from './RouteContext';
export function FlexPageContextProvider({ children, actions, routes }) {
    return _jsx(ActionContext.Provider, { value: actions !== null && actions !== void 0 ? actions : {}, children: _jsx(RouteContext.Provider, { value: routes !== null && routes !== void 0 ? routes : {}, children: children }) });
}
