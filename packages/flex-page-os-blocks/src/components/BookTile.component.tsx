'use client';
import { Image } from '@openstax/flex-page-renderer/components/Image.js';
import { LinkComponent } from '@openstax/flex-page-renderer/components/Link.js';
import type { BookTileConfig } from '../blocks/BookTileListBlock.component.js';
import type { BookData } from '../lib/fetchBooks.js';
import { BookMenu } from './BookMenu.component.js';

// A single book tile: cover + optional badge + title (one clickable link), and
// either the per-book dropdown menu or a disabled CTA when the book has no menu
// (e.g. a coming-soon book the proxy emits with an empty menu).
export function BookTile({config, book}: {
  config: BookTileConfig;
  book?: BookData;
}) {
  const title = book?.title ?? '';
  const items = (config.menu ?? []).flatMap((section) => section.items);
  const buttonText = config.button_text ?? 'Get the book';

  const head = <>
    {book && <img className='book-tile-cover' src={book.coverUrl} role='presentation' alt='' width={240} height={240} />}
    {config.badge && <Image className='book-tile-badge' image={config.badge} alt={config.badge_alt ?? ''} />}
    <span className='book-tile-title'>{title}</span>
  </>;

  return <div className='book-tile'>
    {config.title_link
      ? <LinkComponent className='book-tile-head' linkTarget={config.title_link} ariaLabel={title ? `${title} book` : undefined}>{head}</LinkComponent>
      : <div className='book-tile-head'>{head}</div>}
    {items.length > 0
      ? <BookMenu buttonText={buttonText} items={items} />
      : <button className='book-tile-cta' type='button' disabled>{buttonText}</button>}
  </div>;
}
