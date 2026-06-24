'use client';
import { Image } from '@openstax/flex-page-renderer/components/Image';
import { LinkComponent } from '@openstax/flex-page-renderer/components/Link';
import type { BookTileConfig } from '../blocks/BookTileListBlock.component.js';
import type { BookData } from '../lib/fetchBooks.js';
import { BookMenu } from './BookMenu.component.js';

// A single book tile: cover + optional badge + title (one clickable link), and
// either the per-book dropdown menu or a disabled CTA when the book has no menu
// (e.g. a coming-soon book the proxy emits with an empty menu).
export function BookTile({config, book, defaultButtonText}: {
  config: BookTileConfig;
  book?: BookData;
  defaultButtonText?: string;
}) {
  const title = book?.title ?? '';
  const items = (config.menu ?? []).flatMap((section) => section.items);
  const buttonText = config.button_text ?? defaultButtonText;

  const head = <>
    <span className='book-tile-cover-wrap'>
      {/* OpenStax web-card covers are a standard 400x400; set intrinsic dims so
          the browser reserves the (square) space before load — no layout shift.
          CSS keeps it responsive (width:100%, height:auto). */}
      {book && <img className='book-tile-cover' src={book.coverUrl} role='presentation' alt='' width={400} height={400} />}
      {config.badge && <Image className='book-tile-badge' image={config.badge} alt={config.badge_alt ?? ''} />}
    </span>
    <span className='book-tile-title'>{title}</span>
  </>;

  return <div className='book-tile'>
    {config.title_link
      ? <LinkComponent className='book-tile-head' linkTarget={config.title_link} ariaLabel={title ? `${title} book` : undefined}>{head}</LinkComponent>
      : <div className='book-tile-head'>{head}</div>}
    <div className='book-tile-foot'>
      <BookMenu buttonText={buttonText} items={items} disabled={items.length === 0} />
    </div>
  </div>;
}
