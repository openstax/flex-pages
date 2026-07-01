import type { BlockProcessingDefinition } from '@openstax/flex-page-renderer/ContentBlockContext';
import React from 'react';
export type BlockComponentMap = Record<string, BlockProcessingDefinition<string>>;
export declare const BlockContext: React.Context<BlockComponentMap>;
