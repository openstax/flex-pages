'use client';
import React from 'react';
import { FlexPageContextProvider as BaseProvider } from '@openstax/flex-page-renderer/FlexPageContextProvider';
import { actions } from '../lib/actions';

export function FlexPageContextProvider({ children }: { children: React.ReactNode }) {
  return <BaseProvider actions={actions}>{children}</BaseProvider>;
}
