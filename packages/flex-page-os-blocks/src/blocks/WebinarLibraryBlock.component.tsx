'use client';
import React from 'react';
import { WebinarCardGrid } from '../components/WebinarCardGrid.component.js';
import { fetchWebinars as defaultFetchWebinars, selectPast, subjectsOf } from '../lib/fetchWebinars.js';
import type { FetchWebinars, Webinar } from '../lib/fetchWebinars.js';
import { useWebinars } from '../lib/useWebinars.js';
import type { WebinarLibraryBlockConfig } from './WebinarLibraryBlock.config.js';

export function createWebinarLibrary(fetchWebinars: FetchWebinars) {
  return function WebinarLibrary({data}: {data: WebinarLibraryBlockConfig}) {
    const select = React.useCallback((all: Webinar[], now: Date) => selectPast(all, now), []);
    const webinars = useWebinars(fetchWebinars, select, data.prefetched);
    const subjects = React.useMemo(() => subjectsOf(webinars), [webinars]);
    const [subject, setSubject] = React.useState(data.value.default_subject ?? '');

    const count = Number(data.value.count) || undefined;
    const descriptionWords = Number(data.value.description_words) || undefined;
    const perPage = Number(data.value.per_page) || undefined;

    const filtered = subject ? webinars.filter((w) => w.subjects.includes(subject)) : webinars;
    const capped = count ? filtered.slice(0, count) : filtered;
    const filterId = `webinar-subject-${data.id}`;

    return <div className="content-block-webinars content-block-webinars-library">
      <div className="webinar-filter">
        <label htmlFor={filterId}>Filter by subject</label>
        <select id={filterId} value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">All subjects</option>
          {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      {capped.length
        ? <WebinarCardGrid
            webinars={capped}
            blockId={data.id}
            descriptionWords={descriptionWords}
            perPage={perPage}
            resetKey={subject}
          />
        : <p className="webinar-empty">No webinars match this subject.</p>}
    </div>;
  };
}

export const Component = createWebinarLibrary(defaultFetchWebinars);
