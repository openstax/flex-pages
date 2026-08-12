import React from 'react';
import type { TableCellConfig } from './blocks/TableBlock.config.js';

export type TableCellPosition = {
  // Index into the underlying `rows` data, not the on-screen row: stable
  // across sorting, filtering, and row limits.
  rowIndex: number;
  columnIndex: number;
};

// Lets a host render specific table cells itself. Return `undefined` to fall
// through to the default rendering, `null` for a deliberately empty cell.
export type TableCellRenderer = (
  cell: TableCellConfig,
  position: TableCellPosition
) => React.ReactNode | undefined;

export const TableCellContext = React.createContext<TableCellRenderer | undefined>(undefined);
