"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockFieldDefinitions = void 0;
const CTABlock_fields_js_1 = require("./blocks/CTABlock.fields.js");
const CardsBlock_fields_js_1 = require("./blocks/CardsBlock.fields.js");
const ColumnsBlock_fields_js_1 = require("./blocks/ColumnsBlock.fields.js");
const DividerBlock_fields_js_1 = require("./blocks/DividerBlock.fields.js");
const FlexPage_fields_js_1 = require("./blocks/FlexPage.fields.js");
const HTMLBlock_fields_js_1 = require("./blocks/HTMLBlock.fields.js");
const HeroBlock_fields_js_1 = require("./blocks/HeroBlock.fields.js");
const LinksBlock_fields_js_1 = require("./blocks/LinksBlock.fields.js");
const QuoteBlock_fields_js_1 = require("./blocks/QuoteBlock.fields.js");
const RichTextBlock_fields_js_1 = require("./blocks/RichTextBlock.fields.js");
const SectionBlock_fields_js_1 = require("./blocks/SectionBlock.fields.js");
const TabbedContentBlock_fields_js_1 = require("./blocks/TabbedContentBlock.fields.js");
const WellBlock_fields_js_1 = require("./blocks/WellBlock.fields.js");
/*
 * The built-in blocks' field definitions, keyed exactly as blocks/index.ts keys
 * them (which is what `block.type` holds in data). This is the CSS-free sibling
 * of the Component barrel: it imports only the pure `.fields` modules, so it can
 * be used under plain node/tsx (validateBlock, generateBlockDocs) where the
 * Component barrel's CSS imports would fail. Keep keys in sync with
 * blocks/index.ts.
 */
exports.blockFieldDefinitions = {
    cta_block: { fields: CTABlock_fields_js_1.fields },
    cards_block: { fields: CardsBlock_fields_js_1.fields },
    divider: { fields: DividerBlock_fields_js_1.fields },
    html: { fields: HTMLBlock_fields_js_1.fields },
    hero: { fields: HeroBlock_fields_js_1.fields },
    links_group: { fields: LinksBlock_fields_js_1.fields },
    quote: { fields: QuoteBlock_fields_js_1.fields },
    text: { fields: RichTextBlock_fields_js_1.fields },
    section: { fields: SectionBlock_fields_js_1.fields },
    well: { fields: WellBlock_fields_js_1.fields },
    columns: { fields: ColumnsBlock_fields_js_1.fields },
    tabbed_content: { fields: TabbedContentBlock_fields_js_1.fields },
    flex_page: { fields: FlexPage_fields_js_1.fields },
};
