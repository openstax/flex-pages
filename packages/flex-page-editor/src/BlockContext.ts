import type { BlockComponent } from '@openstax/flex-page-renderer/ContentBlockRoot';
import React from 'react';

export type BlockComponentMap = Record<string, BlockComponent>;
export const BlockContext = React.createContext<BlockComponentMap>({});
