import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FlexPage } from '../../components/FlexPage';
import { getPageData, getPageSlugs } from '../../lib/pages';

export function generateStaticParams() {
  return getPageSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = getPageData(slug);
  if (!data) return {};
  return data.metadata;
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = getPageData(slug);
  if (!pageData) notFound();
  return <FlexPage data={pageData.page} />;
}
