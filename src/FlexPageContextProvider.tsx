import React from 'react';
import { ActionContext } from './ActionContext';
import type { ActionConfig } from './ActionContext';
import { RouteContext } from './RouteContext';
import type { RouteConfig } from './RouteContext';

export * from './ActionContext';
export * from './RouteContext';

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
