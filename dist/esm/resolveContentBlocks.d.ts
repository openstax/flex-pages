import React from 'react';
import type { BlockRenderingDefinition, ContentBlockConfig } from './ContentBlockContext.js';
type BlockMap = Record<string, BlockRenderingDefinition<string>>;
export declare function resolveContentBlocks(data: ContentBlockConfig[], blocks: BlockMap, activeConditions?: string[]): React.ReactNode;
export {};
