import React from 'react';
import type { BlockComponent, ContentBlockConfig } from './ContentBlockContext';
type BlockMap = Record<string, BlockComponent>;
export declare function resolveContentBlocks(data: ContentBlockConfig[], blocks: BlockMap): React.ReactNode;
export {};
