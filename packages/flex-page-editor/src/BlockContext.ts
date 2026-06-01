import type { BlockDefinition } from '@openstax/flex-page-renderer/ContentBlockRoot';
import React from 'react';

export type BlockComponentMap = Record<string, BlockDefinition>;
export const BlockContext = React.createContext<BlockComponentMap>({});
