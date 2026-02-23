'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { FlexPage } from './FlexPage';

function PageOverride({ pageData }: { pageData: any }) {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  if (page) {
    try { return <FlexPage data={[JSON.parse(page)]} />; } catch { /* ignore */ }
  }
  return <FlexPage data={pageData} />;
}

export function HomePage({ pageData }: { pageData: any }) {
  return <Suspense fallback={<FlexPage data={pageData} />}>
    <PageOverride pageData={pageData} />
  </Suspense>;
}
