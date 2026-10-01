'use client';
import { Image } from '@openstax/flex-page-renderer/components/Image';
import { fetchContent as defaultFetchContent } from '../lib/fetchContent.js';
import type { FetchContent } from '../lib/fetchContent.js';
import { useContent } from '../lib/useContent.js';
import type { ContentCardBlockConfig } from './ContentCardBlock.config.js';
import './ContentCardBlock.css';

// Factory binding a content-data source for the client fetch path (mirrors
// createBookTileList). The default-wired Component is what the barrel exports.
export function createContentCard(fetchContent: FetchContent) {
  return function ContentCard({data}: {data: ContentCardBlockConfig}) {
    const {reference, title, image, excerpt} = data.value;
    const hydrated = useContent(
      {id: reference.id, type: reference.type},
      fetchContent,
      data.prefetched,
    );

    const displayTitle = title ?? hydrated?.title ?? reference.title;
    const displayExcerpt = excerpt ?? hydrated?.excerpt;
    const hydratedImage = hydrated?.image;

    return <a className='content-card' href={reference.url}>
      <span className='content-card-image'>
        {image
          ? <Image image={image} alt='' />
          : hydratedImage && <img src={hydratedImage} alt='' role='presentation' />}
      </span>
      <span className='content-card-title'>{displayTitle}</span>
      {displayExcerpt && <span className='content-card-excerpt'>{displayExcerpt}</span>}
    </a>;
  };
}

export const Component = createContentCard(defaultFetchContent);
