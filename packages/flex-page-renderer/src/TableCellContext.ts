import React from 'react';
import type { TableCellConfig } from './blocks/TableBlock.config.js';

export type TableCellPosition = {
  // Index into the table's underlying `rows` data, not the on-screen row —
  // stable across sorting, filtering, and row-limit "show more".
  rowIndex: number;
  columnIndex: number;
};

// Lets a host claim specific table cells and render them itself, while the
// TableBlock keeps doing sorting, filtering, striping, row colors, row
// limits, and the anchor id/mobile data-label behavior for everything else.
//
// Returning `undefined` means "not mine, use the default cell rendering".
// Returning `null` means "render nothing" — a deliberate empty cell, distinct
// from opting out.
export type TableCellRenderer = (
  cell: TableCellConfig,
  position: TableCellPosition
) => React.ReactNode | undefined;

export const TableCellContext = React.createContext<TableCellRenderer | undefined>(undefined);
