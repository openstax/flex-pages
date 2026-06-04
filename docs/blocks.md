# Flex Page Block Reference

> Generated from the block field definitions by `script/generate-block-docs.ts`.
> Do not edit by hand — run `yarn workspace @openstax/flex-page-renderer generate:docs`.

## Block categories

A block may be placed in a slot when the slot's allowed categories include one of the block's categories.

- **content**: Call to Action (`cta_block`), Cards Block (`cards_block`), HTML (`html`), Links (`links_group`), Quote (`quote`), Text (`text`), Well (`well`)
- **page**: Page (`flex_page`)
- **structure**: Columns (`columns`), Divider (`divider`), HTML (`html`), Hero (`hero`), Section (`section`), Tabbed Content (`tabbed_content`)

## Value types

Some fields hold a structured value rather than a plain string. Their shapes:

### Image (`image`)

An uploaded image reference.

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| file | string | Yes | URL or path of the image |
| width | number | Yes | Intrinsic width in pixels |
| height | number | Yes | Intrinsic height in pixels |
| id | string |  | Optional image identifier |

### Link (`link-target`)

A link target: a `type` that selects the kind of link, plus a `value` whose meaning depends on that type. `action` and `route` links may also carry a `params` object resolved by the host app.

| type | value | Description |
| --- | --- | --- |
| external | URL | A full external URL |
| internal | URL or path | An internal URL |
| anchor | `#element-id` | An anchor on the current page |
| action | action name | A host-registered action |
| route | route name | A host-registered route |

## Blocks

### Call to Action — `cta_block`

*Categories: content*

**Fields**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Description | rich text |  |  |
| Actions | list |  |  |

**Configuration options**

| Option | Type | Values / format | Description |
| --- | --- | --- | --- |
| Analytics Label | text |  | Analytics events from within this section will include this label |
| Layout | select | Inline |  |
| Rendering Condition | text |  | Comma-separated condition slugs. Block renders only when at least one is active. |

**Actions** — list; each item has:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Link Text | text | Yes |  |
| Aria Label | text |  |  |
| Link Target | link | Yes |  |

_Actions — per-item options:_

| Option | Type | Values / format | Description |
| --- | --- | --- | --- |
| Style | select | Orange, White, Blue Outline, Deep Green Outline |  |
| Custom Color | text | must match `#[a-fA-F0-9]{6}` | Hex color override. Overrides Style preset. |

### Cards Block — `cards_block`

*Categories: content*

**Fields**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Cards | list |  |  |

**Configuration options**

| Option | Type | Values / format | Description |
| --- | --- | --- | --- |
| Style | select | Rounded, Square |  |
| Size | number | a number | A single number representing 10px increments |
| Columns | number | a number | Number of columns (works with Size) |
| Accent Colors | text |  | Comma-separated hex colors for card borders/shadows, e.g. #ff0000,#00ff00,#0000ff |
| Divider Colors | text |  | Comma-separated hex colors for card divider lines, e.g. #ff0000,#00ff00 |
| Background Color | text | must match `#[a-fA-F0-9]{6}` | Hex background color for cards |
| Border Size | number | a number | Border thickness in pixels. Rounded: border width (default: 1px). Square: top accent height (default: 10px). |

**Cards** — list; each item has:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Card Text | rich text | Yes |  |
| Call To Action | list |  |  |

**Cards › Call To Action** — list (max 1); each item has:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Link Text | text | Yes |  |
| Aria Label | text |  |  |
| Link Target | link | Yes |  |

_Cards › Call To Action — per-item options:_

| Option | Type | Values / format | Description |
| --- | --- | --- | --- |
| Style | select | Orange, White, Blue Outline, Deep Green Outline |  |
| Custom Color | text | must match `#[a-fA-F0-9]{6}` | Hex color override. Overrides Style preset. |

### Columns — `columns`

*Categories: structure*

**Child content**

| Slot | Allowed blocks |
| --- | --- |
| Left Column Content | Call to Action (`cta_block`), Cards Block (`cards_block`), HTML (`html`), Links (`links_group`), Quote (`quote`), Text (`text`), Well (`well`) |
| Right Column Content | Call to Action (`cta_block`), Cards Block (`cards_block`), HTML (`html`), Links (`links_group`), Quote (`quote`), Text (`text`), Well (`well`) |

**Fields**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Left Column Content | child blocks | Yes |  |
| Right Column Content | child blocks | Yes |  |

**Configuration options**

| Option | Type | Values / format | Description |
| --- | --- | --- | --- |
| Background Color | text | must match `#[a-fA-Z0-9]{6}` |  |
| Gradient To Color | text | must match `#[a-fA-Z0-9]{6}` | Second color for gradient effect. Background Color is the starting color. |
| Gradient Direction | select | Top to Bottom, Bottom to Top, Left to Right, Right to Left, Top-Left to Bottom-Right, Top-Right to Bottom-Left, Bottom-Left to Top-Right, Bottom-Right to Top-Left |  |
| Padding | number | a number | Top and Bottom padding, in 10px increments |
| Padding Top | number | a number | Top padding, in 10px increments |
| Padding Bottom | number | a number | Bottom padding, in 10px increments |
| Height | select | Grow to fill available page space, Shrink to fit available page space, Fit to available page space |  |
| Analytics Label | text |  | Analytics events from within this section will include this label |
| ID | text |  | The HTML id of the section (can be referenced by anchor links). |
| Column Gap | number | a number | The space between the columns, in 10px increments |
| Stack Below Width | text |  | Column width at which the two columns stack vertically (CSS length, e.g. 60em, 400px). Defaults to 60em. |
| Right Column Size | text |  | CSS text for the right column eg (20rem, 30%) |
| Left Column Size | text |  | CSS text for the left column eg (20rem, 30%) |

### Divider — `divider`

*Categories: structure*

**Fields**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Image | image | Yes |  |

**Configuration options**

| Option | Type | Values / format | Description |
| --- | --- | --- | --- |
| Image Display Width | text |  | CSS text for the width to display the image |
| Image Display Height | text |  | CSS text for the height to display the image |
| Image Alignment | select | Left side of Content, Right side of Content, Left side of Page, Right side of Page, Center |  |
| Offset Vertical | text |  | CSS text for vertical offset eg `-50%` to center the image vertically |
| Offset Horizontal | text |  | CSS text for horizontal offset eg `-50%` to center the image horizontally |

### Hero — `hero`

*Categories: structure*

**Child content**

| Slot | Allowed blocks |
| --- | --- |
| Content | Call to Action (`cta_block`), Cards Block (`cards_block`), HTML (`html`), Links (`links_group`), Quote (`quote`), Text (`text`), Well (`well`) |

**Fields**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Content | child blocks |  |  |
| Image Alt | text |  |  |
| Hero Image | image | Yes |  |

**Configuration options**

| Option | Type | Values / format | Description |
| --- | --- | --- | --- |
| Image Alignment | select | Left, Top Left, Bottom Left, Right, Top Right, Bottom Right |  |
| Text Alignment | select | Left, Right, Center |  |
| Background Color | text | must match `#[a-fA-Z0-9]{6}` |  |
| Gradient To Color | text | must match `#[a-fA-Z0-9]{6}` | Second color for gradient effect. Background Color is the starting color. |
| Gradient Direction | select | Top to Bottom, Bottom to Top, Left to Right, Right to Left, Top-Left to Bottom-Right, Top-Right to Bottom-Left, Bottom-Left to Top-Right, Bottom-Right to Top-Left |  |
| Padding | number | a number | Top and Bottom padding, in 10px increments |
| Padding Top | number | a number | Top padding, in 10px increments |
| Padding Bottom | number | a number | Bottom padding, in 10px increments |
| Analytics Label | text |  | Analytics events from within this section will include this label |
| ID | text |  | The HTML id of the section (can be referenced by anchor links). |
| Image Border Radius | number | a number | Border radius for the hero image in pixels |
| Image Border Color | text | must match `#[a-fA-F0-9]{6}` | Hex color for the hero image border |
| Image Border Size | number | a number | Border width for the hero image in pixels |
| Image Overhang | text |  | Extends the image beyond the content area by this amount (e.g. 5rem, 10%) |
| Rendering Condition | text |  | Comma-separated condition slugs. Block renders only when at least one is active. |

### HTML — `html`

*Categories: structure, content*

**Fields**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| HTML | long text | Yes | Raw html to be embedded in the page |

### Links — `links_group`

*Categories: content*

**Fields**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Links | list |  |  |

**Configuration options**

| Option | Type | Values / format | Description |
| --- | --- | --- | --- |
| Analytics Label | text |  | Analytics events from within this section will include this label |
| Color | select | White, Blue, Deep Green |  |
| Custom Color | text | must match `#[a-fA-F0-9]{6}` | Hex color override. Overrides Color preset. |
| Size | select | Small, Large |  |
| Layout | select | Grid, Inline |  |

**Links** — list; each item has:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Link Text | text | Yes |  |
| Aria Label | text |  |  |
| Link Target | link | Yes |  |

### Page — `flex_page`

*Categories: page*

**Child content**

| Slot | Allowed blocks |
| --- | --- |
| Page Content | Columns (`columns`), Divider (`divider`), HTML (`html`), Hero (`hero`), Section (`section`), Tabbed Content (`tabbed_content`) |

**Fields**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Page Content | child blocks |  |  |

**Configuration options**

| Option | Type | Values / format | Description |
| --- | --- | --- | --- |
| Width | select | Fixed, Full Width |  |
| Height | select | Expand to fill screen (short content expands to screen, longer content scrolls page normally), Shrink to contain to screen (short content appears normally, longer content shrinks to fit page), Expand & Shrink (bottom of content always aligns to screen edge) |  |

### Quote — `quote`

*Categories: content*

**Fields**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Quote Text | long text | Yes |  |
| Quotee's title | text |  |  |
| Quotee's name | text | Yes |  |
| Image | image | Yes |  |

**Configuration options**

| Option | Type | Values / format | Description |
| --- | --- | --- | --- |
| Accent Color | text | must match `#[a-fA-F0-9]{6}` | Hex color for the quote mark |

### Section — `section`

*Categories: structure*

**Child content**

| Slot | Allowed blocks |
| --- | --- |
| Section Content | Call to Action (`cta_block`), Cards Block (`cards_block`), HTML (`html`), Links (`links_group`), Quote (`quote`), Text (`text`), Well (`well`) |

**Fields**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Section Content | child blocks | Yes |  |

**Configuration options**

| Option | Type | Values / format | Description |
| --- | --- | --- | --- |
| Text Alignment | select | Left, Right, Center |  |
| Height | select | Grow to fill available page space, Shrink to fit available page space, Fit to available page space |  |
| Background Color | text | must match `#[a-fA-Z0-9]{6}` |  |
| Gradient To Color | text | must match `#[a-fA-Z0-9]{6}` | Second color for gradient effect. Background Color is the starting color. |
| Gradient Direction | select | Top to Bottom, Bottom to Top, Left to Right, Right to Left, Top-Left to Bottom-Right, Top-Right to Bottom-Left, Bottom-Left to Top-Right, Bottom-Right to Top-Left |  |
| Padding | number | a number | Top and Bottom padding, in 10px increments |
| Padding Top | number | a number | Top padding, in 10px increments |
| Padding Bottom | number | a number | Bottom padding, in 10px increments |
| Analytics Label | text |  | Analytics events from within this section will include this label |
| ID | text |  | The HTML id of the section (can be referenced by anchor links). |
| Rendering Condition | text |  | Comma-separated condition slugs. Block renders only when at least one is active. |

### Tabbed Content — `tabbed_content`

*Categories: structure*

**Child content**

| Slot | Allowed blocks |
| --- | --- |
| Tab Content | Columns (`columns`), Divider (`divider`), HTML (`html`), Hero (`hero`), Section (`section`), Tabbed Content (`tabbed_content`) |

**Fields**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Tabs | list |  |  |

**Configuration options**

| Option | Type | Values / format | Description |
| --- | --- | --- | --- |
| Tab Alignment | select | Left, Center, Right |  |
| Active Tab Color | text | must match `#[a-fA-F0-9]{6}` | Hex color for the active tab underline |
| Background Color | text | must match `#[a-fA-Z0-9]{6}` |  |
| Gradient To Color | text | must match `#[a-fA-Z0-9]{6}` | Second color for gradient effect. Background Color is the starting color. |
| Gradient Direction | select | Top to Bottom, Bottom to Top, Left to Right, Right to Left, Top-Left to Bottom-Right, Top-Right to Bottom-Left, Bottom-Left to Top-Right, Bottom-Right to Top-Left |  |
| Default Tab | number | a number | Zero-based index of the tab to show by default |
| Analytics Label | text |  | Analytics events from within this block will include this label |
| Border Width | select | Content Width, Full Width |  |
| ID | text |  | The HTML id of the tabbed content block (can be referenced by anchor links). |

**Tabs** — list; each item has:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Tab Label | text | Yes |  |
| Tab Content | child blocks |  |  |

### Text — `text`

*Categories: content*

**Fields**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Text | rich text | Yes |  |

### Well — `well`

*Categories: content*

**Child content**

| Slot | Allowed blocks |
| --- | --- |
| Well Content | Call to Action (`cta_block`), Cards Block (`cards_block`), HTML (`html`), Links (`links_group`), Quote (`quote`), Text (`text`), Well (`well`) |

**Fields**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| Well Content | child blocks |  |  |

**Configuration options**

| Option | Type | Values / format | Description |
| --- | --- | --- | --- |
| Background Color | text | must match `#[a-fA-Z0-9]{6}` |  |
| Gradient To Color | text | must match `#[a-fA-Z0-9]{6}` | Second color for gradient effect. Background Color is the starting color. |
| Gradient Direction | select | Top to Bottom, Bottom to Top, Left to Right, Right to Left, Top-Left to Bottom-Right, Top-Right to Bottom-Left, Bottom-Left to Top-Right, Bottom-Right to Top-Left |  |
| Border Radius | number | a number | Border radius in pixels |
| Border Color | text | must match `#[a-fA-F0-9]{6}` | Hex border color |
| Border Size | number | a number | Border width in pixels. Only applies when border color is set. |
| Padding | number | a number | Inner padding, in 10px increments |
| Margin | number | a number | Outer margin, in 10px increments |
| Pull Up | number | a number | Pulls the well upward by this amount in rem units. Use with extra padding on the section above to create an overlap effect. |
| Width | text |  | Maximum width of the well content (e.g., 600px, 50%, auto) |
| Text Alignment | select | Left, Right, Center |  |
| Analytics Label | text |  | Analytics events from within this well will include this label |
| ID | text |  | The HTML id of the well (can be referenced by anchor links). |
