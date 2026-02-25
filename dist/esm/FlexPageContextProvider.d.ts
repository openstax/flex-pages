import React from 'react';
import type { ActionConfig } from './ActionContext';
import type { RouteConfig } from './RouteContext';
export * from './ActionContext';
export * from './RouteContext';
export declare function FlexPageContextProvider({ children, actions, routes }: {
    children: React.ReactNode;
    actions?: ActionConfig;
    routes?: RouteConfig;
}): import("react/jsx-runtime").JSX.Element;
