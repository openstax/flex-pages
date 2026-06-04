import React from 'react';
import type { ActionConfig } from './ActionContext.js';
import type { RouteConfig } from './RouteContext.js';
export * from './ActionContext.js';
export * from './RouteContext.js';
export declare function FlexPageContextProvider({ children, actions, routes }: {
    children: React.ReactNode;
    actions?: ActionConfig;
    routes?: RouteConfig;
}): import("react/jsx-runtime").JSX.Element;
