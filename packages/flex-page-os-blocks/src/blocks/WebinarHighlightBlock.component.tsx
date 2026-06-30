'use client';
import { CardsBlock } from '@openstax/flex-page-renderer/blocks/CardsBlock.component';
import React from 'react';
import { fetchWebinars as defaultFetchWebinars, selectById } from '../lib/fetchWebinars.js';
import type { FetchWebinars, Webinar } from '../lib/fetchWebinars.js';
import { useWebinars } from '../lib/useWebinars.js';
import { webinarsToCards } from '../lib/webinarCards.js';
import type { WebinarHighlightBlockConfig } from './WebinarHighlightBlock.config.js';
import '../components/Webinars.css';

export function createWebinarHighlight(fetchWebinars: FetchWebinars) {
  return function WebinarHighlight({data}: {data: WebinarHighlightBlockConfig}) {
    const id = data.value.webinar_id == null ? undefined : Number(data.value.webinar_id);
    const select = React.useCallback((all: Webinar[]) => {
      const webinar = selectById(all, id);
      return webinar ? [webinar] : [];
    }, [id]);
    const webinar = useWebinars(fetchWebinars, select, data.prefetched)[0];

    if (!webinar) return null;

    return <div className="content-block-webinars content-block-webinar-highlight">
      <p className="webinar-highlight-eyebrow">{data.value.eyebrow || 'Featured webinar'}</p>
      <CardsBlock data={webinarsToCards([webinar], {id: data.id})} />
    </div>;
  };
}

export const Component = createWebinarHighlight(defaultFetchWebinars);
