// Loads OpenStax webinars from the CMS feed, mapped to display data. Shared by
// the upcoming / library / highlight blocks (server prefetch + client fetch).

export interface Webinar {
  id: number;
  start: string;
  end: string;
  title: string;
  description: string;
  speakers: string;
  registrationUrl: string;
  registrationText: string;
  // subjects[].subject — the academic subject, used as the library filter facet.
  subjects: string[];
  // collections[].collection — shown as tags on each webinar.
  collections: string[];
  // Pre-formatted date + time (fixed tz) so server and client render the same.
  dateLabel: string;
}

export type FetchWebinars = () => Promise<Webinar[]>;

const WEBINARS_URL = 'https://openstax.org/apps/cms/api/webinars/';
export const DEFAULT_UPCOMING_COUNT = 3;

interface RawWebinar {
  id: number;
  start: string;
  end: string;
  title: string;
  description: string;
  speakers: string;
  registration_url: string;
  registration_link_text: string;
  subjects?: { subject: string }[];
  collections?: { collection: string }[];
}

const dateFormat = new Intl.DateTimeFormat('en-US', {
  month: 'long', day: 'numeric', year: 'numeric',
  hour: 'numeric', minute: '2-digit',
  timeZone: 'America/Chicago', timeZoneName: 'short',
});

function formatDate(iso: string): string {
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? '' : dateFormat.format(date);
}

function toWebinar(raw: RawWebinar): Webinar {
  return {
    id: raw.id,
    start: raw.start,
    end: raw.end,
    title: raw.title,
    description: raw.description ?? '',
    speakers: raw.speakers ?? '',
    registrationUrl: raw.registration_url ?? '',
    registrationText: raw.registration_link_text || 'Register',
    subjects: (raw.subjects ?? []).map((s) => s.subject),
    collections: (raw.collections ?? []).map((c) => c.collection),
    dateLabel: formatDate(raw.start),
  };
}

// The feed is small and changes rarely, so fetch once and cache at module scope
// (mirrors fetchBooks).
let webinarsPromise: Promise<Webinar[]> | undefined;

export const fetchWebinars: FetchWebinars = () => {
  if (!webinarsPromise) {
    webinarsPromise = fetch(WEBINARS_URL)
      .then((response) => {
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
        return response.json();
      })
      .then((data: RawWebinar[]) => data.map(toWebinar))
      .catch((err) => {
        webinarsPromise = undefined; // allow a later retry
        throw new Error(`Fetching OpenStax webinars: ${err}`);
      });
  }
  return webinarsPromise;
};

const startMs = (w: Webinar) => new Date(w.start).getTime();
const endMs = (w: Webinar) => new Date(w.end || w.start).getTime();

// Future webinars, soonest first; optionally limited and filtered to a subject.
export function selectUpcoming(
  webinars: Webinar[], now: Date, opts: { subject?: string; limit?: number } = {},
): Webinar[] {
  const t = now.getTime();
  let list = webinars.filter((w) => startMs(w) >= t).sort((a, b) => startMs(a) - startMs(b));
  if (opts.subject) list = list.filter((w) => w.subjects.includes(opts.subject!));
  if (opts.limit) list = list.slice(0, opts.limit);
  return list;
}

// Finished webinars, most recent first.
export function selectPast(webinars: Webinar[], now: Date): Webinar[] {
  const t = now.getTime();
  return webinars.filter((w) => endMs(w) < t).sort((a, b) => startMs(b) - startMs(a));
}

// The whole timeline: upcoming (soonest first) followed by past (most recent first).
export function selectAll(webinars: Webinar[], now: Date): Webinar[] {
  return [...selectUpcoming(webinars, now), ...selectPast(webinars, now)];
}

// A webinar is past once its end (or start, if no end) is before now.
export function isPast(webinar: Webinar, now: Date): boolean {
  return endMs(webinar) < now.getTime();
}

export function selectById(webinars: Webinar[], id: number | undefined): Webinar | undefined {
  return id === undefined ? undefined : webinars.find((w) => w.id === id);
}

// Distinct subjects across the given webinars, for the library filter control.
export function subjectsOf(webinars: Webinar[]): string[] {
  return [...new Set(webinars.flatMap((w) => w.subjects))].sort();
}
