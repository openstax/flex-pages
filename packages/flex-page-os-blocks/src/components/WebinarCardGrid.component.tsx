'use client';
import { CardsBlock } from '@openstax/flex-page-renderer/blocks/CardsBlock.component';
import React from 'react';
import type { Webinar } from '../lib/fetchWebinars.js';
import { webinarsToCards } from '../lib/webinarCards.js';
import './Webinars.css';

// Renders a list of webinars as a Cards-block grid, optionally paginated. When
// `perPage` is set, shows one page at a time with prev/next controls; `resetKey`
// (e.g. the active subject) snaps back to page 1 when it changes.
export function WebinarCardGrid({webinars, blockId, descriptionWords, perPage, resetKey}: {
  webinars: Webinar[];
  blockId: string;
  descriptionWords?: number;
  perPage?: number;
  resetKey?: string;
}) {
  const [page, setPage] = React.useState(0);
  React.useEffect(() => { setPage(0); }, [resetKey]);

  if (!webinars.length) return null;

  const pageCount = perPage ? Math.max(1, Math.ceil(webinars.length / perPage)) : 1;
  const safePage = Math.min(page, pageCount - 1);
  const items = perPage ? webinars.slice(safePage * perPage, (safePage + 1) * perPage) : webinars;

  return <>
    <CardsBlock data={webinarsToCards(items, {id: blockId, descriptionWords})} />
    {perPage && pageCount > 1
      ? <nav className="webinar-pagination" aria-label="Webinar pages">
          <button type="button" disabled={safePage === 0} onClick={() => setPage(safePage - 1)}>Previous</button>
          <span className="webinar-page-status">Page {safePage + 1} of {pageCount}</span>
          <button type="button" disabled={safePage >= pageCount - 1} onClick={() => setPage(safePage + 1)}>Next</button>
        </nav>
      : null}
  </>;
}
