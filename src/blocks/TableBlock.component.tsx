'use client';
import cn from 'classnames';
import React from 'react';
import { TableCellContext } from '../TableCellContext.js';
import { findByType } from '../utils.js';
import { CTALink } from './CTABlock.component.js';
import { RichTextContent } from './RichTextBlock.component.js';
import type { TableBlockConfig, TableCellConfig } from './TableBlock.config.js';
import './TableBlock.css';

// spell-checker: ignore nbsp ndash mdash rsquo lsquo rdquo ldquo hellip
const NAMED_ENTITIES: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: '\'', nbsp: ' ',
  ndash: '–', mdash: '—', rsquo: '’', lsquo: '‘',
  rdquo: '”', ldquo: '“', hellip: '…',
};

// Rich text arrives entity-encoded ("AT&amp;T"); decode so sorting and
// filtering compare what the reader actually sees.
function decodeEntities(text: string): string {
  return text.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, code: string) => {
    if (code[0] === '#') {
      const num = code[1]?.toLowerCase() === 'x'
        ? parseInt(code.slice(2), 16)
        : parseInt(code.slice(1), 10);
      return Number.isFinite(num) ? String.fromCodePoint(num) : match;
    }
    return NAMED_ENTITIES[code.toLowerCase()] ?? match;
  });
}

// Plain-text view of a cell, for sorting/filtering (CTA label, else stripped HTML).
function cellText(cell: TableCellConfig | undefined): string {
  if (cell?.cta?.[0]?.text) return cell.cta[0].text;
  const stripped = (cell?.content ?? '').replace(/<[^>]*>/g, ' ');
  return decodeEntities(stripped).replace(/\s+/g, ' ').trim();
}

// Parse the authored date formats explicitly — Date.parse is engine-dependent
// for non-ISO input like MM/DD/YYYY — and fall back to Date.parse otherwise.
function parseDate(text: string): number {
  const iso = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(text);
  if (iso) return Date.UTC(+iso[1], +iso[2] - 1, +iso[3]);
  const us = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(text);
  if (us) return Date.UTC(+us[3], +us[1] - 1, +us[2]);
  return Date.parse(text);
}

// Compare two cells' text by the column's declared sort type; values that
// don't parse fall back to a natural-order string compare.
function compareCellText(a: string, b: string, type: string | undefined): number {
  if (type === 'date') {
    const da = parseDate(a);
    const db = parseDate(b);
    if (!isNaN(da) && !isNaN(db)) return da - db;
  }
  if (type === 'number') {
    const na = parseFloat(a.replace(/[^0-9.eE+-]/g, ''));
    const nb = parseFloat(b.replace(/[^0-9.eE+-]/g, ''));
    if (!isNaN(na) && !isNaN(nb)) return na - nb;
  }
  return a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'});
}

export function TableBlock({data}: {data: TableBlockConfig}) {
  const cellRenderer = React.useContext(TableCellContext);
  const columns = data.value.columns ?? [];
  const rows = data.value.rows ?? [];

  const striped = findByType(data.value.config, 'striped')?.value === 'on';
  const condensed = findByType(data.value.config, 'condensed')?.value === 'on';
  const sortable = findByType(data.value.config, 'sortable')?.value === 'on';
  const filterable = findByType(data.value.config, 'filterable')?.value === 'on';
  const rowColors = (findByType(data.value.config, 'row_colors')?.value ?? '')
    .split(',').map((c) => c.trim()).filter(Boolean);
  const anchorId = findByType(data.value.config, 'id')?.value || undefined;
  const authoredEmptyMessage = findByType(data.value.config, 'empty_message')?.value;
  const emptyMessage = authoredEmptyMessage || 'There is nothing to show here yet.';
  const rowLimit = parseInt(String(findByType(data.value.config, 'row_limit')?.value ?? ''), 10);
  const defaultSortColumn = parseInt(
    String(findByType(data.value.config, 'default_sort_column')?.value ?? ''), 10);
  const defaultSortDirection =
    findByType(data.value.config, 'default_sort_direction')?.value === 'desc' ? 'desc' : 'asc';

  const [query, setQuery] = React.useState('');
  const [showAll, setShowAll] = React.useState(false);
  const [sort, setSort] = React.useState<{col: number; dir: 'asc' | 'desc'} | null>(
    () => defaultSortColumn >= 1 && defaultSortColumn <= columns.length
      ? {col: defaultSortColumn - 1, dir: defaultSortDirection}
      : null);

  // Cell text is derived from row data once, not re-stripped per keystroke or
  // per sort comparison.
  const textMatrix = React.useMemo(
    () => rows.map((row) => columns.map((_, ci) => cellText(row.cells?.[ci]))),
    [rows, columns]);

  if (!columns.length) {
    // A dynamic source that fails (or returns nothing) serializes empty
    // columns; keep the caption and say so instead of vanishing silently.
    if (!data.value.caption && !authoredEmptyMessage) return null;
    return <div className="content-block-table" id={anchorId}>
      {data.value.caption ? <p className="table-caption">{data.value.caption}</p> : null}
      <p className="table-empty">{emptyMessage}</p>
    </div>;
  }

  const toggleSort = (col: number) =>
    setSort((prev) => prev && prev.col === col
      ? {col, dir: prev.dir === 'asc' ? 'desc' : 'asc'}
      : {col, dir: 'asc'});

  const q = query.trim().toLowerCase();
  let displayIndexes = rows.map((_, ri) => ri);
  if (filterable && q) {
    displayIndexes = displayIndexes.filter((ri) =>
      textMatrix[ri].some((text) => text.toLowerCase().includes(q)));
  }
  if (sort) {
    const dir = sort.dir === 'asc' ? 1 : -1;
    displayIndexes = [...displayIndexes].sort((a, b) =>
      dir * compareCellText(textMatrix[a][sort.col], textMatrix[b][sort.col], columns[sort.col]?.type));
  }

  const limited = rowLimit >= 1 && !showAll && displayIndexes.length > rowLimit;
  const visibleIndexes = limited ? displayIndexes.slice(0, rowLimit) : displayIndexes;

  const filterId = `table-filter-${data.id}`;

  return <div className="content-block-table" id={anchorId}>
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
          <p className="table-status" role="status">
            {q ? `${displayIndexes.length} of ${rows.length} rows shown` : ''}
          </p>
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
          {visibleIndexes.length
            ? visibleIndexes.map((rowIndex, position) => {
                const row = rows[rowIndex];
                const bg = rowColors.length ? rowColors[position % rowColors.length] : undefined;
                return <tr key={rowIndex} style={bg ? {backgroundColor: bg} : undefined}>
                  {columns.map((col, ci) => {
                    const cell = row.cells?.[ci];
                    // rowIndex identifies the cell's position in the underlying
                    // `rows` data (not on-screen `position`), so a host renderer
                    // can resolve the same cell after a sort or filter.
                    const custom = cellRenderer?.(cell ?? {}, {rowIndex, columnIndex: ci});
                    if (custom !== undefined) {
                      return <td key={ci} data-label={col.header}>{custom}</td>;
                    }
                    const cta = cell?.cta?.[0];
                    return <td key={ci} data-label={col.header}>
                      {cta ? <CTALink link={cta} /> : <RichTextContent html={cell?.content ?? ''} />}
                    </td>;
                  })}
                </tr>;
              })
            : <tr>
                <td className="table-empty" colSpan={columns.length}>
                  {q ? 'No rows match your filter.' : emptyMessage}
                </td>
              </tr>}
        </tbody>
      </table>
    </div>
    {limited
      ? <button
          type="button"
          className="table-show-more"
          onClick={() => setShowAll(true)}
        >
          Show {displayIndexes.length - rowLimit} more {displayIndexes.length - rowLimit === 1 ? 'row' : 'rows'}
        </button>
      : null}
  </div>;
}
