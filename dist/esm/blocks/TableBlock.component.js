'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import React from 'react';
import { TableCellContext } from '../TableCellContext.js';
import { findByType } from '../utils.js';
import { CTALink } from './CTABlock.component.js';
import { RichTextContent } from './RichTextBlock.component.js';
import './TableBlock.css';
// spell-checker: ignore nbsp ndash mdash rsquo lsquo rdquo ldquo hellip
const NAMED_ENTITIES = {
    amp: '&', lt: '<', gt: '>', quot: '"', apos: '\'', nbsp: ' ',
    ndash: '–', mdash: '—', rsquo: '’', lsquo: '‘',
    rdquo: '”', ldquo: '“', hellip: '…',
};
// Rich text arrives entity-encoded ("AT&amp;T"); decode so sorting and
// filtering compare what the reader actually sees.
function decodeEntities(text) {
    return text.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, code) => {
        var _a, _b;
        if (code[0] === '#') {
            const num = ((_a = code[1]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'x'
                ? parseInt(code.slice(2), 16)
                : parseInt(code.slice(1), 10);
            return Number.isFinite(num) ? String.fromCodePoint(num) : match;
        }
        return (_b = NAMED_ENTITIES[code.toLowerCase()]) !== null && _b !== void 0 ? _b : match;
    });
}
// Plain-text view of a cell, for sorting/filtering (CTA label, else stripped HTML).
function cellText(cell) {
    var _a, _b, _c;
    if ((_b = (_a = cell === null || cell === void 0 ? void 0 : cell.cta) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.text)
        return cell.cta[0].text;
    const stripped = ((_c = cell === null || cell === void 0 ? void 0 : cell.content) !== null && _c !== void 0 ? _c : '').replace(/<[^>]*>/g, ' ');
    return decodeEntities(stripped).replace(/\s+/g, ' ').trim();
}
// Parse the authored date formats explicitly — Date.parse is engine-dependent
// for non-ISO input like MM/DD/YYYY — and fall back to Date.parse otherwise.
function parseDate(text) {
    const iso = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(text);
    if (iso)
        return Date.UTC(+iso[1], +iso[2] - 1, +iso[3]);
    const us = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(text);
    if (us)
        return Date.UTC(+us[3], +us[1] - 1, +us[2]);
    return Date.parse(text);
}
// Compare two cells' text by the column's declared sort type; values that
// don't parse fall back to a natural-order string compare.
function compareCellText(a, b, type) {
    if (type === 'date') {
        const da = parseDate(a);
        const db = parseDate(b);
        if (!isNaN(da) && !isNaN(db))
            return da - db;
    }
    if (type === 'number') {
        const na = parseFloat(a.replace(/[^0-9.eE+-]/g, ''));
        const nb = parseFloat(b.replace(/[^0-9.eE+-]/g, ''));
        if (!isNaN(na) && !isNaN(nb))
            return na - nb;
    }
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}
export function TableBlock({ data }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    const cellRenderer = React.useContext(TableCellContext);
    const columns = (_a = data.value.columns) !== null && _a !== void 0 ? _a : [];
    const rows = (_b = data.value.rows) !== null && _b !== void 0 ? _b : [];
    const striped = ((_c = findByType(data.value.config, 'striped')) === null || _c === void 0 ? void 0 : _c.value) === 'on';
    const condensed = ((_d = findByType(data.value.config, 'condensed')) === null || _d === void 0 ? void 0 : _d.value) === 'on';
    const sortable = ((_e = findByType(data.value.config, 'sortable')) === null || _e === void 0 ? void 0 : _e.value) === 'on';
    const filterable = ((_f = findByType(data.value.config, 'filterable')) === null || _f === void 0 ? void 0 : _f.value) === 'on';
    const rowColors = ((_h = (_g = findByType(data.value.config, 'row_colors')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : '')
        .split(',').map((c) => c.trim()).filter(Boolean);
    const anchorId = ((_j = findByType(data.value.config, 'id')) === null || _j === void 0 ? void 0 : _j.value) || undefined;
    const authoredEmptyMessage = (_k = findByType(data.value.config, 'empty_message')) === null || _k === void 0 ? void 0 : _k.value;
    const emptyMessage = authoredEmptyMessage || 'There is nothing to show here yet.';
    const rowLimit = parseInt(String((_m = (_l = findByType(data.value.config, 'row_limit')) === null || _l === void 0 ? void 0 : _l.value) !== null && _m !== void 0 ? _m : ''), 10);
    const defaultSortColumn = parseInt(String((_p = (_o = findByType(data.value.config, 'default_sort_column')) === null || _o === void 0 ? void 0 : _o.value) !== null && _p !== void 0 ? _p : ''), 10);
    const defaultSortDirection = ((_q = findByType(data.value.config, 'default_sort_direction')) === null || _q === void 0 ? void 0 : _q.value) === 'desc' ? 'desc' : 'asc';
    const [query, setQuery] = React.useState('');
    const [showAll, setShowAll] = React.useState(false);
    const [sort, setSort] = React.useState(() => defaultSortColumn >= 1 && defaultSortColumn <= columns.length
        ? { col: defaultSortColumn - 1, dir: defaultSortDirection }
        : null);
    // Cell text is derived from row data once, not re-stripped per keystroke or
    // per sort comparison.
    const textMatrix = React.useMemo(() => rows.map((row) => columns.map((_, ci) => { var _a; return cellText((_a = row.cells) === null || _a === void 0 ? void 0 : _a[ci]); })), [rows, columns]);
    if (!columns.length) {
        // A dynamic source that fails (or returns nothing) serializes empty
        // columns; keep the caption and say so instead of vanishing silently.
        if (!data.value.caption && !authoredEmptyMessage)
            return null;
        return _jsxs("div", { className: "content-block-table", id: anchorId, children: [data.value.caption ? _jsx("p", { className: "table-caption", children: data.value.caption }) : null, _jsx("p", { className: "table-empty", children: emptyMessage })] });
    }
    const toggleSort = (col) => setSort((prev) => prev && prev.col === col
        ? { col, dir: prev.dir === 'asc' ? 'desc' : 'asc' }
        : { col, dir: 'asc' });
    const q = query.trim().toLowerCase();
    let displayIndexes = rows.map((_, ri) => ri);
    if (filterable && q) {
        displayIndexes = displayIndexes.filter((ri) => textMatrix[ri].some((text) => text.toLowerCase().includes(q)));
    }
    if (sort) {
        const dir = sort.dir === 'asc' ? 1 : -1;
        displayIndexes = [...displayIndexes].sort((a, b) => { var _a; return dir * compareCellText(textMatrix[a][sort.col], textMatrix[b][sort.col], (_a = columns[sort.col]) === null || _a === void 0 ? void 0 : _a.type); });
    }
    const limited = rowLimit >= 1 && !showAll && displayIndexes.length > rowLimit;
    const visibleIndexes = limited ? displayIndexes.slice(0, rowLimit) : displayIndexes;
    const filterId = `table-filter-${data.id}`;
    return _jsxs("div", { className: "content-block-table", id: anchorId, children: [filterable
                ? _jsxs("div", { className: "table-filter", children: [_jsx("label", { htmlFor: filterId, children: "Filter" }), _jsx("input", { id: filterId, type: "text", value: query, placeholder: "Filter rows\u2026", onChange: (e) => setQuery(e.target.value) }), _jsx("p", { className: "table-status", role: "status", children: q ? `${displayIndexes.length} of ${rows.length} rows shown` : '' })] })
                : null, _jsx("div", { className: "table-scroll", children: _jsxs("table", { className: cn({ striped, condensed }), children: [data.value.caption ? _jsx("caption", { children: data.value.caption }) : null, _jsx("thead", { children: _jsx("tr", { children: columns.map((col, ci) => {
                                    const active = sortable && (sort === null || sort === void 0 ? void 0 : sort.col) === ci;
                                    return _jsx("th", { scope: "col", "aria-sort": sortable ? (active ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none') : undefined, children: sortable
                                            ? _jsxs("button", { type: "button", className: "table-sort", onClick: () => toggleSort(ci), children: [_jsx("span", { children: col.header }), _jsx("span", { className: "table-sort-indicator", "aria-hidden": "true", children: active ? (sort.dir === 'asc' ? '▲' : '▼') : '↕' })] })
                                            : col.header }, ci);
                                }) }) }), _jsx("tbody", { children: visibleIndexes.length
                                ? visibleIndexes.map((rowIndex, position) => {
                                    const row = rows[rowIndex];
                                    const bg = rowColors.length ? rowColors[position % rowColors.length] : undefined;
                                    return _jsx("tr", { style: bg ? { backgroundColor: bg } : undefined, children: columns.map((col, ci) => {
                                            var _a, _b, _c;
                                            const cell = (_a = row.cells) === null || _a === void 0 ? void 0 : _a[ci];
                                            const custom = cellRenderer === null || cellRenderer === void 0 ? void 0 : cellRenderer(cell !== null && cell !== void 0 ? cell : {}, { rowIndex, columnIndex: ci });
                                            if (custom !== undefined) {
                                                return _jsx("td", { "data-label": col.header, children: custom }, ci);
                                            }
                                            const cta = (_b = cell === null || cell === void 0 ? void 0 : cell.cta) === null || _b === void 0 ? void 0 : _b[0];
                                            return _jsx("td", { "data-label": col.header, children: cta ? _jsx(CTALink, { link: cta }) : _jsx(RichTextContent, { html: (_c = cell === null || cell === void 0 ? void 0 : cell.content) !== null && _c !== void 0 ? _c : '' }) }, ci);
                                        }) }, rowIndex);
                                })
                                : _jsx("tr", { children: _jsx("td", { className: "table-empty", colSpan: columns.length, children: q ? 'No rows match your filter.' : emptyMessage }) }) })] }) }), limited
                ? _jsxs("button", { type: "button", className: "table-show-more", onClick: () => setShowAll(true), children: ["Show ", displayIndexes.length - rowLimit, " more ", displayIndexes.length - rowLimit === 1 ? 'row' : 'rows'] })
                : null] });
}
