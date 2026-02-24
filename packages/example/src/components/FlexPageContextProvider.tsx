'use client';
import { FlexPageContextProvider as BaseProvider } from '@openstax/flex-page-renderer/FlexPageContextProvider';
import React from 'react';
import { actions } from '../lib/actions';

export function FlexPageContextProvider({ children }: { children: React.ReactNode }) {
  return <BaseProvider actions={actions}>{children}</BaseProvider>;
}
