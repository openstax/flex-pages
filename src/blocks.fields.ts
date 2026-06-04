import type { BlockFieldDefinitions } from './ContentBlockContext.js';
import { fields as cta_block } from './blocks/CTABlock.fields.js';
import { fields as cards_block } from './blocks/CardsBlock.fields.js';
import { fields as columns } from './blocks/ColumnsBlock.fields.js';
import { fields as divider } from './blocks/DividerBlock.fields.js';
import { fields as flex_page } from './blocks/FlexPage.fields.js';
import { fields as html } from './blocks/HTMLBlock.fields.js';
import { fields as hero } from './blocks/HeroBlock.fields.js';
import { fields as links_group } from './blocks/LinksBlock.fields.js';
import { fields as quote } from './blocks/QuoteBlock.fields.js';
import { fields as text } from './blocks/RichTextBlock.fields.js';
import { fields as section } from './blocks/SectionBlock.fields.js';
import { fields as tabbed_content } from './blocks/TabbedContentBlock.fields.js';
import { fields as well } from './blocks/WellBlock.fields.js';

/*
 * The built-in blocks' field definitions, keyed exactly as blocks/index.ts keys
 * them (which is what `block.type` holds in data). This is the CSS-free sibling
 * of the Component barrel: it imports only the pure `.fields` modules, so it can
 * be used under plain node/tsx (validateBlock, generateBlockDocs) where the
 * Component barrel's CSS imports would fail. Keep keys in sync with
 * blocks/index.ts.
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
