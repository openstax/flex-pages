import React from 'react';
import type { TableCellConfig } from './blocks/TableBlock.config.js';
export type TableCellPosition = {
    rowIndex: number;
    columnIndex: number;
};
export type TableCellRenderer = (cell: TableCellConfig, position: TableCellPosition) => React.ReactNode | undefined;
export declare const TableCellContext: React.Context<TableCellRenderer | undefined>;
