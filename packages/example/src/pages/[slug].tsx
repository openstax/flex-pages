import { GetStaticPaths, GetStaticProps } from 'next';
import { getPageSlugs, getPageData } from '../lib/pages';
import { FlexPage } from '../components/FlexPage';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getPageSlugs().map(slug => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { pageData: getPageData(params!.slug as string) }
});

export default function DocPage({ pageData }: { pageData: any }) {
  return <FlexPage data={pageData} />;
}
