'use client';
import type { RouteConfig } from '@openstax/flex-page-renderer/RouteContext';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
  PAGE_ID_ROUTE, pageIdHref, pageIdPath, SLUG_ROUTE, slugHref, slugPath,
} from './routes';

/*
 * Builds the cross-page RouteConfig. Lives apart from lib/routes (which stays
 * fs-free AND client-free so the server can import its url builders): this hook
 * pulls in next/navigation, so it's client-only.
 *
 * Both routes navigate via the router for soft (SPA) nav. `render` returns the
 * public href (basePath included) for the anchor; `handler` pushes the
 * app-relative path (the router applies basePath itself).
 */
export function useRoutes(): RouteConfig {
  const router = useRouter();
  return React.useMemo<RouteConfig>(() => ({
    [SLUG_ROUTE]: {
      id: SLUG_ROUTE,
      label: 'Page',
      render: (params) => slugHref(params?.slug ?? ''),
      handler: (params) => router.push(slugPath(params?.slug ?? '')),
    },
    [PAGE_ID_ROUTE]: {
      id: PAGE_ID_ROUTE,
      label: 'Page permalink',
      render: (params) => pageIdHref(params?.id),
      handler: (params) => router.push(pageIdPath(params?.id)),
    },
  }), [router]);
}
