'use client';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { CardGrid } from '@openstax/flex-page-renderer/blocks/CardGrid.component';
import { RichTextContent } from '@openstax/flex-page-renderer/blocks/RichTextBlock.component';
import { Image } from '@openstax/flex-page-renderer/components/Image';
import type { PersonBlockConfig, PersonConfig, PersonLink } from './PersonBlock.config.js';
import './PersonBlock.css';

const LINK_LABEL: Record<PersonLink['type'], string> = {
  linkedin: 'LinkedIn', orcid: 'ORCID', website: 'Website',
  email: 'Email', scholar: 'Google Scholar', x: 'X',
};

function Avatar({person}: {person: PersonConfig}) {
  if (person.image) {
    return <Image image={person.image} className="person-card-photo" alt={person.name} />;
  }
  const initials = person.name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('');
  return <div className="person-card-photo person-card-photo--placeholder" aria-hidden="true">{initials}</div>;
}

function Tags({person}: {person: PersonConfig}) {
  if (!person.tags?.length) return null;
  return <ul className="person-card-tags">
    {person.tags.map((t) => <li key={t.id} className="person-card-tag" data-tag={t.slug}>{t.name}</li>)}
  </ul>;
}

function Links({person}: {person: PersonConfig}) {
  if (!person.links?.length) return null;
  return <ul className="person-card-links">
    {person.links.map((l, i) => (
      <li key={i}>
        <a href={l.url} className={`person-card-link person-card-link--${l.type}`}
           aria-label={`${person.name} on ${LINK_LABEL[l.type]}`}
           rel="noopener noreferrer" target="_blank"
           onClick={(e) => e.stopPropagation()}>
          <span className="person-card-link-label">{LINK_LABEL[l.type]}</span>
        </a>
      </li>
    ))}
  </ul>;
}

function PersonModal({person, onClose}: {person: PersonConfig; onClose: () => void}) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);
  if (typeof document === 'undefined') return null;
  return createPortal(
    <div className="person-modal-overlay" onClick={(e) => { e.stopPropagation(); onClose(); }}>
      <div className="person-modal" role="dialog" aria-modal="true" aria-label={person.name}
           onClick={(e) => e.stopPropagation()}>
        <button type="button" className="person-modal-close" aria-label="Close" onClick={onClose}>&times;</button>
        <Avatar person={person} />
        <h3 className="person-modal-name">{person.name}</h3>
        {person.title ? <p className="person-modal-title">{person.title}</p> : null}
        <Tags person={person} />
        {person.full_bio ? <RichTextContent html={person.full_bio} /> : null}
        <Links person={person} />
      </div>
    </div>,
    document.body
  );
}

function PersonCard({person}: {person: PersonConfig}) {
  const [open, setOpen] = useState(false);
  const expandable = Boolean(person.full_bio);
  const interactive = expandable
    ? {role: 'button', tabIndex: 0,
       onClick: () => setOpen(true),
       onKeyDown: (e: React.KeyboardEvent) => {
         if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(true); }
       }}
    : {};
  return <div className={`person-card${expandable ? ' person-card--expandable' : ''}`} {...interactive}>
    <Avatar person={person} />
    <h3 className="person-card-name">{person.name}</h3>
    {person.title ? <p className="person-card-title">{person.title}</p> : null}
    <Tags person={person} />
    {person.short_bio ? <p className="person-card-bio">{person.short_bio}</p> : null}
    <Links person={person} />
    {open ? <PersonModal person={person} onClose={() => setOpen(false)} /> : null}
  </div>;
}

export function PersonBlock({data}: {data: PersonBlockConfig}) {
  return <div className="content-block-person">
    {data.value.heading ? <h2 className="person-block-heading">{data.value.heading}</h2> : null}
    <CardGrid config={data.value.config}>
      {data.value.people.map((p, i) => <PersonCard key={i} person={p} />)}
    </CardGrid>
  </div>;
}
