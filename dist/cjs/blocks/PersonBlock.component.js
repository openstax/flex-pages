"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonBlock = PersonBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const CardGrid_component_1 = require("@openstax/flex-page-renderer/blocks/CardGrid.component");
const RichTextBlock_component_1 = require("@openstax/flex-page-renderer/blocks/RichTextBlock.component");
const Image_1 = require("@openstax/flex-page-renderer/components/Image");
const react_1 = __importStar(require("react"));
const react_dom_1 = require("react-dom");
require("./PersonBlock.css");
const LINK_LABEL = {
    linkedin: 'LinkedIn', orcid: 'ORCID', website: 'Website',
    email: 'Email', scholar: 'Google Scholar', x: 'X',
};
function Avatar({ person }) {
    if (person.image) {
        return (0, jsx_runtime_1.jsx)(Image_1.Image, { image: person.image, className: "person-card-photo", alt: person.name });
    }
    const initials = person.name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('');
    return (0, jsx_runtime_1.jsx)("div", { className: "person-card-photo person-card-photo--placeholder", "aria-hidden": "true", children: initials });
}
function Tags({ person }) {
    var _a;
    if (!((_a = person.tags) === null || _a === void 0 ? void 0 : _a.length))
        return null;
    return (0, jsx_runtime_1.jsx)("ul", { className: "person-card-tags", children: person.tags.map((t) => (0, jsx_runtime_1.jsx)("li", { className: "person-card-tag", "data-tag": t.slug, children: t.name }, t.id)) });
}
function Links({ person }) {
    var _a;
    if (!((_a = person.links) === null || _a === void 0 ? void 0 : _a.length))
        return null;
    return (0, jsx_runtime_1.jsx)("ul", { className: "person-card-links", children: person.links.map((l, i) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: l.url, className: `person-card-link person-card-link--${l.type}`, "aria-label": `${person.name} on ${LINK_LABEL[l.type]}`, rel: "noopener noreferrer", target: "_blank", onClick: (e) => e.stopPropagation(), children: (0, jsx_runtime_1.jsx)("span", { className: "person-card-link-label", children: LINK_LABEL[l.type] }) }) }, i))) });
}
function PersonModal({ person, onClose }) {
    react_1.default.useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape')
            onClose(); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [onClose]);
    if (typeof document === 'undefined')
        return null;
    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)("div", { className: "person-modal-overlay", onClick: (e) => { e.stopPropagation(); onClose(); }, children: (0, jsx_runtime_1.jsxs)("div", { className: "person-modal", role: "dialog", "aria-modal": "true", "aria-label": person.name, onClick: (e) => e.stopPropagation(), children: [(0, jsx_runtime_1.jsx)("button", { type: "button", className: "person-modal-close", "aria-label": "Close", onClick: onClose, children: "\u00D7" }), (0, jsx_runtime_1.jsx)(Avatar, { person: person }), (0, jsx_runtime_1.jsx)("h3", { className: "person-modal-name", children: person.name }), person.title ? (0, jsx_runtime_1.jsx)("p", { className: "person-modal-title", children: person.title }) : null, (0, jsx_runtime_1.jsx)(Tags, { person: person }), person.full_bio ? (0, jsx_runtime_1.jsx)(RichTextBlock_component_1.RichTextContent, { html: person.full_bio }) : null, (0, jsx_runtime_1.jsx)(Links, { person: person })] }) }), document.body);
}
function PersonCard({ person }) {
    const [open, setOpen] = (0, react_1.useState)(false);
    const expandable = Boolean(person.full_bio);
    const interactive = expandable
        ? { role: 'button', tabIndex: 0,
            onClick: () => setOpen(true),
            onKeyDown: (e) => {
                if (e.target !== e.currentTarget)
                    return;
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpen(true);
                }
            } }
        : {};
    return (0, jsx_runtime_1.jsxs)("div", { className: `person-card${expandable ? ' person-card--expandable' : ''}`, ...interactive, children: [(0, jsx_runtime_1.jsx)(Avatar, { person: person }), (0, jsx_runtime_1.jsx)("h3", { className: "person-card-name", children: person.name }), person.title ? (0, jsx_runtime_1.jsx)("p", { className: "person-card-title", children: person.title }) : null, (0, jsx_runtime_1.jsx)(Tags, { person: person }), person.short_bio ? (0, jsx_runtime_1.jsx)("p", { className: "person-card-bio", children: person.short_bio }) : null, (0, jsx_runtime_1.jsx)(Links, { person: person }), open ? (0, jsx_runtime_1.jsx)(PersonModal, { person: person, onClose: () => setOpen(false) }) : null] });
}
function PersonBlock({ data }) {
    return (0, jsx_runtime_1.jsxs)("div", { className: "content-block-person", children: [data.value.heading ? (0, jsx_runtime_1.jsx)("h2", { className: "person-block-heading", children: data.value.heading }) : null, (0, jsx_runtime_1.jsx)(CardGrid_component_1.CardGrid, { config: data.value.config, children: data.value.people.map((p, i) => (0, jsx_runtime_1.jsx)(PersonCard, { person: p }, i)) })] });
}
