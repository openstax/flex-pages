"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBlock = TableBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const utils_js_1 = require("../utils.js");
const CTABlock_component_js_1 = require("./CTABlock.component.js");
const RichTextBlock_component_js_1 = require("./RichTextBlock.component.js");
require("./TableBlock.css");
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
// Compare two cells' text by the column's declared sort type; values that
// don't parse fall back to a natural-order string compare.
function compareCellText(a, b, type) {
    if (type === 'date') {
        const da = Date.parse(a);
        const db = Date.parse(b);
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
function TableBlock({ data }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    const columns = (_a = data.value.columns) !== null && _a !== void 0 ? _a : [];
    const rows = (_b = data.value.rows) !== null && _b !== void 0 ? _b : [];
    const striped = ((_c = (0, utils_js_1.findByType)(data.value.config, 'striped')) === null || _c === void 0 ? void 0 : _c.value) === 'on';
    const condensed = ((_d = (0, utils_js_1.findByType)(data.value.config, 'condensed')) === null || _d === void 0 ? void 0 : _d.value) === 'on';
    const sortable = ((_e = (0, utils_js_1.findByType)(data.value.config, 'sortable')) === null || _e === void 0 ? void 0 : _e.value) === 'on';
    const filterable = ((_f = (0, utils_js_1.findByType)(data.value.config, 'filterable')) === null || _f === void 0 ? void 0 : _f.value) === 'on';
    const rowColors = ((_h = (_g = (0, utils_js_1.findByType)(data.value.config, 'row_colors')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : '')
        .split(',').map((c) => c.trim()).filter(Boolean);
    const anchorId = ((_j = (0, utils_js_1.findByType)(data.value.config, 'id')) === null || _j === void 0 ? void 0 : _j.value) || undefined;
    const authoredEmptyMessage = (_k = (0, utils_js_1.findByType)(data.value.config, 'empty_message')) === null || _k === void 0 ? void 0 : _k.value;
    const emptyMessage = authoredEmptyMessage || 'There is nothing to show here yet.';
    const rowLimit = parseInt(String((_m = (_l = (0, utils_js_1.findByType)(data.value.config, 'row_limit')) === null || _l === void 0 ? void 0 : _l.value) !== null && _m !== void 0 ? _m : ''), 10);
    const defaultSortColumn = parseInt(String((_p = (_o = (0, utils_js_1.findByType)(data.value.config, 'default_sort_column')) === null || _o === void 0 ? void 0 : _o.value) !== null && _p !== void 0 ? _p : ''), 10);
    const defaultSortDirection = ((_q = (0, utils_js_1.findByType)(data.value.config, 'default_sort_direction')) === null || _q === void 0 ? void 0 : _q.value) === 'desc' ? 'desc' : 'asc';
    const [query, setQuery] = react_1.default.useState('');
    const [showAll, setShowAll] = react_1.default.useState(false);
    const [sort, setSort] = react_1.default.useState(() => defaultSortColumn >= 1 && defaultSortColumn <= columns.length
        ? { col: defaultSortColumn - 1, dir: defaultSortDirection }
        : null);
    // Cell text is derived from row data once, not re-stripped per keystroke or
    // per sort comparison.
    const textMatrix = react_1.default.useMemo(() => rows.map((row) => columns.map((_, ci) => { var _a; return cellText((_a = row.cells) === null || _a === void 0 ? void 0 : _a[ci]); })), [rows, columns]);
    if (!columns.length) {
        // A dynamic source that fails (or returns nothing) serializes empty
        // columns; keep the caption and say so instead of vanishing silently.
        if (!data.value.caption && !authoredEmptyMessage)
            return null;
        return (0, jsx_runtime_1.jsxs)("div", { className: "content-block-table", id: anchorId, children: [data.value.caption ? (0, jsx_runtime_1.jsx)("p", { className: "table-caption", children: data.value.caption }) : null, (0, jsx_runtime_1.jsx)("p", { className: "table-empty", children: emptyMessage })] });
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
    return (0, jsx_runtime_1.jsxs)("div", { className: "content-block-table", id: anchorId, children: [filterable
                ? (0, jsx_runtime_1.jsxs)("div", { className: "table-filter", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: filterId, children: "Filter" }), (0, jsx_runtime_1.jsx)("input", { id: filterId, type: "text", value: query, placeholder: "Filter rows\u2026", onChange: (e) => setQuery(e.target.value) }), (0, jsx_runtime_1.jsx)("p", { className: "table-status", role: "status", children: q ? `${displayIndexes.length} of ${rows.length} rows shown` : '' })] })
                : null, (0, jsx_runtime_1.jsx)("div", { className: "table-scroll", children: (0, jsx_runtime_1.jsxs)("table", { className: (0, classnames_1.default)({ striped, condensed }), children: [data.value.caption ? (0, jsx_runtime_1.jsx)("caption", { children: data.value.caption }) : null, (0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: columns.map((col, ci) => {
                                    const active = sortable && (sort === null || sort === void 0 ? void 0 : sort.col) === ci;
                                    return (0, jsx_runtime_1.jsx)("th", { scope: "col", "aria-sort": sortable ? (active ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none') : undefined, children: sortable
                                            ? (0, jsx_runtime_1.jsxs)("button", { type: "button", className: "table-sort", onClick: () => toggleSort(ci), children: [(0, jsx_runtime_1.jsx)("span", { children: col.header }), (0, jsx_runtime_1.jsx)("span", { className: "table-sort-indicator", "aria-hidden": "true", children: active ? (sort.dir === 'asc' ? '▲' : '▼') : '↕' })] })
                                            : col.header }, ci);
                                }) }) }), (0, jsx_runtime_1.jsx)("tbody", { children: visibleIndexes.length
                                ? visibleIndexes.map((rowIndex, position) => {
                                    const row = rows[rowIndex];
                                    const bg = rowColors.length ? rowColors[position % rowColors.length] : undefined;
                                    return (0, jsx_runtime_1.jsx)("tr", { style: bg ? { backgroundColor: bg } : undefined, children: columns.map((col, ci) => {
                                            var _a, _b, _c;
                                            const cell = (_a = row.cells) === null || _a === void 0 ? void 0 : _a[ci];
                                            const cta = (_b = cell === null || cell === void 0 ? void 0 : cell.cta) === null || _b === void 0 ? void 0 : _b[0];
                                            return (0, jsx_runtime_1.jsx)("td", { "data-label": col.header, children: cta ? (0, jsx_runtime_1.jsx)(CTABlock_component_js_1.CTALink, { link: cta }) : (0, jsx_runtime_1.jsx)(RichTextBlock_component_js_1.RichTextContent, { html: (_c = cell === null || cell === void 0 ? void 0 : cell.content) !== null && _c !== void 0 ? _c : '' }) }, ci);
                                        }) }, rowIndex);
                                })
                                : (0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { className: "table-empty", colSpan: columns.length, children: q ? 'No rows match your filter.' : emptyMessage }) }) })] }) }), limited
                ? (0, jsx_runtime_1.jsxs)("button", { type: "button", className: "table-show-more", onClick: () => setShowAll(true), children: ["Show ", displayIndexes.length - rowLimit, " more ", displayIndexes.length - rowLimit === 1 ? 'row' : 'rows'] })
                : null] });
}
