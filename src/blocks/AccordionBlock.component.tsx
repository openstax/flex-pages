'use client';
import cn from 'classnames';
import React from 'react';
import { findByType } from '../utils.js';
import { RichTextContent } from './RichTextBlock.component.js';
import './AccordionBlock.css';

type AccordionConfigOptions = {
  type: 'heading_level';
  value: string;
} | {
  type: 'allow_multiple';
  value: string;
} | {
  type: 'accent_color';
  value: string;
};

export type AccordionItemConfig = {
  header: string;
  content: string;
  id: string;
};

export interface AccordionBlockConfig {
  id: string;
  type: 'accordion';
  value: {
    items: AccordionItemConfig[];
    config: AccordionConfigOptions[];
  };
}

// Derive a stable, URL- and DOM-safe id from an author-supplied id, falling
// back to the item index. The allowlist keeps only id-safe characters, so a
// value like "/assignable-isbn" becomes "assignable-isbn".
function toAnchorId(id: string | undefined, index: number) {
  const cleaned = (id ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return cleaned || `item-${index}`;
}

export function AccordionBlock({data}: {data: AccordionBlockConfig}) {
  const items = data.value.items;
  const headingLevel = findByType(data.value.config, 'heading_level')?.value ?? '3';
  const allowMultiple = findByType(data.value.config, 'allow_multiple')?.value === 'true';
  const accentColor = findByType(data.value.config, 'accent_color')?.value;
  const baseId = `accordion-${data.id}`;

  const [open, setOpen] = React.useState<Set<number>>(new Set());
  const buttonRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  // Deep-link support: when the URL hash matches an item's id, open that
  // item and scroll it into view — both on load and when an in-page anchor
  // link changes the hash.
  React.useEffect(() => {
    const openFromHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (!hash) return;
      const index = items.findIndex((item, i) => toAnchorId(item.id, i) === hash);
      if (index < 0) return;
      setOpen((prev) => (allowMultiple ? new Set(prev).add(index) : new Set([index])));
      // Defer the scroll until the panel has expanded so the target lands in view.
      window.requestAnimationFrame(() => buttonRefs.current[index]?.scrollIntoView({block: 'start'}));
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, [items, allowMultiple]);

  if (!items.length) return null;

  const toggle = (i: number) => {
    setOpen((prev) => {
      const isOpen = prev.has(i);
      if (allowMultiple) {
        const next = new Set(prev);
        if (isOpen) {
          next.delete(i);
        } else {
          next.add(i);
        }
        return next;
      }
      // Single-open accordion: opening one closes the rest.
      return isOpen ? new Set() : new Set([i]);
    });
  };

  // Roving focus between item triggers, per the WAI-ARIA accordion pattern.
  const handleKeyDown = (e: React.KeyboardEvent, i: number) => {
    let nextIndex: number | undefined;
    switch (e.key) {
      case 'ArrowDown':
        nextIndex = (i + 1) % items.length;
        break;
      case 'ArrowUp':
        nextIndex = (i - 1 + items.length) % items.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = items.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    buttonRefs.current[nextIndex]?.focus();
  };

  const Heading = `h${headingLevel}` as React.ElementType;

  return <div
    className="content-block-accordion"
    style={accentColor ? {'--accordion-accent-color': accentColor} as React.CSSProperties : undefined}
  >
    {items.map((item, i) => {
      const anchorId = toAnchorId(item.id, i);
      const triggerId = `${baseId}-trigger-${anchorId}`;
      const panelId = `${baseId}-panel-${anchorId}`;
      const isOpen = open.has(i);

      return <div key={i} className={cn('accordion-item', {open: isOpen})}>
        <Heading className="accordion-header" id={anchorId}>
          <button
            ref={(el) => { buttonRefs.current[i] = el; }}
            type="button"
            id={triggerId}
            className="accordion-trigger"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => toggle(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          >
            <span className="accordion-header-text">{item.header}</span>
            <svg
              className="accordion-icon"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M4 6l4 4 4-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Heading>
        <RichTextContent id={panelId} className="accordion-content" hidden={!isOpen} html={item.content} />
      </div>;
    })}
  </div>;
}
