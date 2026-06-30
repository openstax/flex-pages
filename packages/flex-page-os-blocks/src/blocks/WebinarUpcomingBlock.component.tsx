'use client';
import React from 'react';
import { WebinarCardGrid } from '../components/WebinarCardGrid.component.js';
import { fetchWebinars as defaultFetchWebinars, selectUpcoming, DEFAULT_UPCOMING_COUNT } from '../lib/fetchWebinars.js';
import type { FetchWebinars, Webinar } from '../lib/fetchWebinars.js';
import { useWebinars } from '../lib/useWebinars.js';
import type { WebinarUpcomingBlockConfig } from './WebinarUpcomingBlock.config.js';

export function createWebinarUpcoming(fetchWebinars: FetchWebinars) {
  return function WebinarUpcoming({data}: {data: WebinarUpcomingBlockConfig}) {
    const count = data.value.count ?? DEFAULT_UPCOMING_COUNT;
    const subject = data.value.subject || undefined;
    const descriptionWords = Number(data.value.description_words) || undefined;
    const perPage = Number(data.value.per_page) || undefined;
    const select = React.useCallback(
      (all: Webinar[], now: Date) => selectUpcoming(all, now, {subject, limit: count}),
      [subject, count]);
    const webinars = useWebinars(fetchWebinars, select, data.prefetched);

    return <div className="content-block-webinars content-block-webinars-upcoming">
      {webinars.length
        ? <WebinarCardGrid webinars={webinars} blockId={data.id} descriptionWords={descriptionWords} perPage={perPage} />
        : <p className="webinar-empty">No upcoming webinars right now — check back soon.</p>}
    </div>;
  };
}

export const Component = createWebinarUpcoming(defaultFetchWebinars);
