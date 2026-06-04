import React from 'react';
import type { BlockDefinition, ContentBlockConfig } from './ContentBlockContext.js';
type BlockMap = Record<string, BlockDefinition>;
export declare function resolveContentBlocks(data: ContentBlockConfig[], blocks: BlockMap, activeConditions?: string[]): React.ReactNode;
export {};
