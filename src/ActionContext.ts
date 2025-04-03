import React from 'react';

export type ActionConfig = Record<string, {
  id: string,
  label: string,
  handler?: () => void;
}>;

// actions could probably have a payload, which would be configured in the editor
// on a per button basis, but i'm not bothering yet.
export const ActionContext = React.createContext<ActionConfig>({});
