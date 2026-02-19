import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { getPageData } from '../lib/pages';
import { FlexPage } from '../components/FlexPage';

export const getStaticProps: GetStaticProps = async () => ({
  props: { pageData: getPageData('home') }
});

export default function HomePage({ pageData }: { pageData: any }) {
  const router = useRouter();
  const data = useMemo(() => {
    if (typeof router.query.page === 'string') {
      try { return [JSON.parse(router.query.page)]; } catch { /* ignore */ }
    }
    return pageData;
  }, [router.query.page, pageData]);

  return <FlexPage data={data} />;
}
