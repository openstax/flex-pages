import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { TableCellContext } from '../TableCellContext.js';
import type { TableCellPosition, TableCellRenderer } from '../TableCellContext.js';
import { TableBlock } from './TableBlock.component.js';
import type { TableBlockConfig } from './TableBlock.config.js';

function twoColumnTable(config: TableBlockConfig['value']['config'] = []): TableBlockConfig {
  return {
    id: 'table-1',
    type: 'table',
    value: {
      columns: [{header: 'Name'}, {header: 'Action'}],
      rows: [
        {cells: [
          {content: '<p>Ada</p>'},
          {cta: [{text: 'Go', target: {type: 'url', value: '/ada'}, config: []}]},
        ]},
        {cells: [
          {content: '<p>Bob</p>'},
          {cta: [{text: 'Go', target: {type: 'url', value: '/bob'}, config: []}]},
        ]},
      ],
      config,
    },
  };
}

function render(el: React.ReactElement): string {
  return renderToStaticMarkup(el);
}

describe('TableBlock cell slot', () => {
  it('renders a rich-text cell and a CTA cell with no provider present', () => {
    const html = render(<TableBlock data={twoColumnTable()} />);
    assert.match(html, /<p>Ada<\/p>/);
    assert.match(html, /<p>Bob<\/p>/);
    assert.match(html, /href="\/ada"/);
    assert.match(html, /href="\/bob"/);
  });

  it('is byte-identical to no-provider output when the provider returns undefined for every cell', () => {
    const table = twoColumnTable();
    const withoutProvider = render(<TableBlock data={table} />);

    const alwaysDefer: TableCellRenderer = () => undefined;
    const withDeferringProvider = render(
      <TableCellContext.Provider value={alwaysDefer}>
        <TableBlock data={table} />
      </TableCellContext.Provider>,
    );

    assert.equal(withDeferringProvider, withoutProvider);
  });

  it('lets a provider claim one cell while every other cell keeps the default rendering', () => {
    const claimAdasNameCell: TableCellRenderer = (_cell, {rowIndex, columnIndex}) =>
      rowIndex === 0 && columnIndex === 0 ? <span>CUSTOM</span> : undefined;

    const html = render(
      <TableCellContext.Provider value={claimAdasNameCell}>
        <TableBlock data={twoColumnTable()} />
      </TableCellContext.Provider>,
    );

    assert.match(html, /<span>CUSTOM<\/span>/);
    // The claimed cell no longer renders its default rich text...
    assert.doesNotMatch(html, /<p>Ada<\/p>/);
    // ...but the untouched cells (Bob's name, both CTAs) still do.
    assert.match(html, /<p>Bob<\/p>/);
    assert.match(html, /href="\/ada"/);
    assert.match(html, /href="\/bob"/);
  });

  it('renders an empty cell when the provider returns null, not the default fallback', () => {
    const nullOutAdasNameCell: TableCellRenderer = (_cell, {rowIndex, columnIndex}) =>
      rowIndex === 0 && columnIndex === 0 ? null : undefined;

    const html = render(
      <TableCellContext.Provider value={nullOutAdasNameCell}>
        <TableBlock data={twoColumnTable()} />
      </TableCellContext.Provider>,
    );

    assert.doesNotMatch(html, /<p>Ada<\/p>/);
    assert.match(html, /<td data-label="Name"><\/td>/);
    // The rest of the table is unaffected.
    assert.match(html, /<p>Bob<\/p>/);
  });

  it('passes the cell config the renderer actually received (not a stand-in) through untouched', () => {
    let receivedContent: string | undefined;
    const inspectAdasNameCell: TableCellRenderer = (cell, {rowIndex, columnIndex}) => {
      if (rowIndex === 0 && columnIndex === 0) receivedContent = cell.content;
      return undefined;
    };

    render(
      <TableCellContext.Provider value={inspectAdasNameCell}>
        <TableBlock data={twoColumnTable()} />
      </TableCellContext.Provider>,
    );

    assert.equal(receivedContent, '<p>Ada</p>');
  });

  it('gives the renderer the row\'s position in the underlying data, not its on-screen position, once sorted and row-limited', () => {
    // Authored (data) order: Charlie(0), Alice(1), Bob(2).
    const table: TableBlockConfig = {
      id: 'table-2',
      type: 'table',
      value: {
        columns: [{header: 'Name', type: 'text'}],
        rows: [
          {cells: [{content: 'Charlie'}]},
          {cells: [{content: 'Alice'}]},
          {cells: [{content: 'Bob'}]},
        ],
        config: [
          {type: 'default_sort_column', id: 'c1', value: '1'},
          {type: 'default_sort_direction', id: 'c2', value: 'asc'},
          {type: 'row_limit', id: 'c3', value: '2'},
        ],
      },
    };

    const seen: TableCellPosition[] = [];
    const recordPosition: TableCellRenderer = (_cell, position) => {
      seen.push(position);
      return undefined;
    };

    const html = render(
      <TableCellContext.Provider value={recordPosition}>
        <TableBlock data={table} />
      </TableCellContext.Provider>,
    );

    // On screen (ascending sort, limited to 2 rows): Alice, then Bob — Charlie
    // is pushed past the row limit and never rendered.
    assert.match(html, /Alice/);
    assert.match(html, /Bob/);
    assert.doesNotMatch(html, /Charlie/);

    // Their DATA indexes are 1 and 2 (Alice's and Bob's original row
    // positions), not the on-screen positions 0 and 1 — a host resolving
    // `rowIndex` against its own copy of `rows` must land on the same row
    // regardless of how the table is currently sorted or limited.
    assert.deepEqual(seen.map((p) => p.rowIndex), [1, 2]);
    assert.deepEqual(seen.map((p) => p.columnIndex), [0, 0]);
  });
});
