'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CardGrid } from '@openstax/flex-page-renderer/blocks/CardGrid.component';
import { RichTextContent } from '@openstax/flex-page-renderer/blocks/RichTextBlock.component';
import { Image } from '@openstax/flex-page-renderer/components/Image';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './PersonBlock.css';
const LINK_LABEL = {
    linkedin: 'LinkedIn', orcid: 'ORCID', website: 'Website',
    email: 'Email', scholar: 'Google Scholar', x: 'X',
};
function Avatar({ person }) {
    if (person.image) {
        return _jsx(Image, { image: person.image, className: "person-card-photo", alt: person.name });
    }
    const initials = person.name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('');
    return _jsx("div", { className: "person-card-photo person-card-photo--placeholder", "aria-hidden": "true", children: initials });
}
function Tags({ person }) {
    var _a;
    if (!((_a = person.tags) === null || _a === void 0 ? void 0 : _a.length))
        return null;
    return _jsx("ul", { className: "person-card-tags", children: person.tags.map((t) => _jsx("li", { className: "person-card-tag", "data-tag": t.slug, children: t.name }, t.id)) });
}
function Links({ person }) {
    var _a;
    if (!((_a = person.links) === null || _a === void 0 ? void 0 : _a.length))
        return null;
    return _jsx("ul", { className: "person-card-links", children: person.links.map((l, i) => (_jsx("li", { children: _jsx("a", { href: l.url, className: `person-card-link person-card-link--${l.type}`, "aria-label": `${person.name} on ${LINK_LABEL[l.type]}`, rel: "noopener noreferrer", target: "_blank", onClick: (e) => e.stopPropagation(), children: _jsx("span", { className: "person-card-link-label", children: LINK_LABEL[l.type] }) }) }, i))) });
}
function PersonModal({ person, onClose }) {
    React.useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape')
            onClose(); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [onClose]);
    if (typeof document === 'undefined')
        return null;
    return createPortal(_jsx("div", { className: "person-modal-overlay", onClick: (e) => { e.stopPropagation(); onClose(); }, children: _jsxs("div", { className: "person-modal", role: "dialog", "aria-modal": "true", "aria-label": person.name, onClick: (e) => e.stopPropagation(), children: [_jsx("button", { type: "button", className: "person-modal-close", "aria-label": "Close", onClick: onClose, children: "\u00D7" }), _jsx(Avatar, { person: person }), _jsx("h3", { className: "person-modal-name", children: person.name }), person.title ? _jsx("p", { className: "person-modal-title", children: person.title }) : null, _jsx(Tags, { person: person }), person.full_bio ? _jsx(RichTextContent, { html: person.full_bio }) : null, _jsx(Links, { person: person })] }) }), document.body);
}
function PersonCard({ person }) {
    const [open, setOpen] = useState(false);
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
    return _jsxs("div", { className: `person-card${expandable ? ' person-card--expandable' : ''}`, ...interactive, children: [_jsx(Avatar, { person: person }), _jsx("h3", { className: "person-card-name", children: person.name }), person.title ? _jsx("p", { className: "person-card-title", children: person.title }) : null, _jsx(Tags, { person: person }), person.short_bio ? _jsx("p", { className: "person-card-bio", children: person.short_bio }) : null, _jsx(Links, { person: person }), open ? _jsx(PersonModal, { person: person, onClose: () => setOpen(false) }) : null] });
}
export function PersonBlock({ data }) {
    return _jsxs("div", { className: "content-block-person", children: [data.value.heading ? _jsx("h2", { className: "person-block-heading", children: data.value.heading }) : null, _jsx(CardGrid, { config: data.value.config, children: data.value.people.map((p, i) => _jsx(PersonCard, { person: p }, i)) })] });
}
