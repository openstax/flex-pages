'use client';
import cn from 'classnames';
import React from 'react';
import { findByType } from '../utils.js';
import { CTALink } from './CTABlock.component.js';
import { RichTextContent } from './RichTextBlock.component.js';
import type { TableBlockConfig, TableCellConfig } from './TableBlock.config.js';
import './TableBlock.css';

// Plain-text view of a cell, for sorting/filtering (CTA label, else stripped HTML).
function cellText(cell: TableCellConfig | undefined): string {
  if (cell?.cta?.[0]?.text) return cell.cta[0].text;
  return (cell?.content ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

export function TableBlock({data}: {data: TableBlockConfig}) {
  const columns = data.value.columns ?? [];
  const rows = data.value.rows ?? [];

  const striped = findByType(data.value.config, 'striped')?.value === 'on';
  const condensed = findByType(data.value.config, 'condensed')?.value === 'on';
  const sortable = findByType(data.value.config, 'sortable')?.value === 'on';
  const filterable = findByType(data.value.config, 'filterable')?.value === 'on';
  const rowColors = (findByType(data.value.config, 'row_colors')?.value ?? '')
    .split(',').map((c) => c.trim()).filter(Boolean);

  const [query, setQuery] = React.useState('');
  const [sort, setSort] = React.useState<{col: number; dir: 'asc' | 'desc'} | null>(null);

  if (!columns.length) return null;

  const toggleSort = (col: number) =>
    setSort((prev) => prev && prev.col === col
      ? {col, dir: prev.dir === 'asc' ? 'desc' : 'asc'}
      : {col, dir: 'asc'});

  let displayRows = rows;
  if (filterable && query.trim()) {
    const q = query.toLowerCase();
    displayRows = displayRows.filter((row) =>
      columns.some((_, ci) => cellText(row.cells?.[ci]).toLowerCase().includes(q)));
  }
  if (sortable && sort) {
    displayRows = [...displayRows].sort((a, b) => {
      const cmp = cellText(a.cells?.[sort.col])
        .localeCompare(cellText(b.cells?.[sort.col]), undefined, {numeric: true, sensitivity: 'base'});
      return sort.dir === 'asc' ? cmp : -cmp;
    });
  }

  const filterId = `table-filter-${data.id}`;

  return <div className="content-block-table">
    {filterable
      ? <div className="table-filter">
          <label htmlFor={filterId}>Filter</label>
          <input
            id={filterId}
            type="text"
            value={query}
            placeholder="Filter rows…"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      : null}
    <div className="table-scroll">
      <table className={cn({striped, condensed})}>
        {data.value.caption ? <caption>{data.value.caption}</caption> : null}
        <thead>
          <tr>
            {columns.map((col, ci) => {
              const active = sortable && sort?.col === ci;
              return <th
                key={ci}
                scope="col"
                aria-sort={sortable ? (active ? (sort!.dir === 'asc' ? 'ascending' : 'descending') : 'none') : undefined}
              >
                {sortable
                  ? <button type="button" className="table-sort" onClick={() => toggleSort(ci)}>
                      <span>{col.header}</span>
                      <span className="table-sort-indicator" aria-hidden="true">
                        {active ? (sort!.dir === 'asc' ? '▲' : '▼') : '↕'}
                      </span>
                    </button>
                  : col.header}
              </th>;
            })}
          </tr>
        </thead>
        <tbody>
          {displayRows.map((row, ri) => {
            const bg = rowColors.length ? rowColors[ri % rowColors.length] : undefined;
            return <tr key={ri} style={bg ? {backgroundColor: bg} : undefined}>
              {columns.map((col, ci) => {
                const cell = row.cells?.[ci];
                const cta = cell?.cta?.[0];
                return <td key={ci} data-label={col.header}>
                  {cta ? <CTALink link={cta} /> : <RichTextContent html={cell?.content ?? ''} />}
                </td>;
              })}
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  </div>;
}
