'use client';
import { FlexPageContextProvider as BaseProvider } from '@openstax/flex-page-renderer/FlexPageContextProvider';
import React from 'react';
import { actions } from '../lib/actions';
import { useRoutes } from '../lib/useRoutes';

export function FlexPageContextProvider({ children }: { children: React.ReactNode }) {
  const routes = useRoutes();
  return <BaseProvider actions={actions} routes={routes}>{children}</BaseProvider>;
}
