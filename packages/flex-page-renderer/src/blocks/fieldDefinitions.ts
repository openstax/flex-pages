import type { BlockFieldDefinitions } from '../ContentBlockContext';
import { fields as cta_block } from './CTABlock.fields';
import { fields as cards_block } from './CardsBlock.fields';
import { fields as columns } from './ColumnsBlock.fields';
import { fields as divider } from './DividerBlock.fields';
import { fields as flex_page } from './FlexPage.fields';
import { fields as html } from './HTMLBlock.fields';
import { fields as hero } from './HeroBlock.fields';
import { fields as links_group } from './LinksBlock.fields';
import { fields as quote } from './QuoteBlock.fields';
import { fields as text } from './RichTextBlock.fields';
import { fields as section } from './SectionBlock.fields';
import { fields as tabbed_content } from './TabbedContentBlock.fields';
import { fields as well } from './WellBlock.fields';

/*
 * The built-in blocks' field definitions, keyed exactly as src/blocks/index.ts
 * keys them (which is what `block.type` holds in data). Unlike that barrel, this
 * imports only the pure `.fields` modules — no Components, so no CSS — making it
 * safe to use under plain node/tsx (e.g. validateBlock or generateBlockDocs in a
 * script or server with no CSS loader). Keep keys in sync with blocks/index.ts.
 */
export const blockFieldDefinitions: BlockFieldDefinitions = {
  cta_block: { fields: cta_block },
  cards_block: { fields: cards_block },
  divider: { fields: divider },
  html: { fields: html },
  hero: { fields: hero },
  links_group: { fields: links_group },
  quote: { fields: quote },
  text: { fields: text },
  section: { fields: section },
  well: { fields: well },
  columns: { fields: columns },
  tabbed_content: { fields: tabbed_content },
  flex_page: { fields: flex_page },
};
