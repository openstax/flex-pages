import React from 'react';
import { ActionContext } from './ActionContext.js';
import type { ActionConfig } from './ActionContext.js';
import { RouteContext } from './RouteContext.js';
import type { RouteConfig } from './RouteContext.js';

export * from './ActionContext.js';
export * from './RouteContext.js';

export function FlexPageContextProvider({children, actions, routes}: {
  children: React.ReactNode;
  actions?: ActionConfig;
  routes?: RouteConfig;
}) {
  return <ActionContext.Provider value={actions ?? {}}>
    <RouteContext.Provider value={routes ?? {}}>
      {children}
    </RouteContext.Provider>
  </ActionContext.Provider>;
}
