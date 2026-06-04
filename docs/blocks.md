# Flex Page Block Reference

> Generated from the block field definitions by `script/generate-block-docs.ts`.
> Do not edit by hand — run `yarn workspace @openstax/flex-page-renderer generate:docs`.

## Node shape

The content is an array of block nodes. Each node is:

```json
{ "type": "<block key>", "id": "<unique string>", "value": <value> }
```

`type` is the block key from the headings below. `value` is an object keyed by the block's field keys (the **Key** column), except for single-field blocks, whose `value` is that one field's value directly (e.g. a Text block's `value` is its HTML string).

A block's configuration options are not keyed fields; they live in a `config` array on the value:

```json
"value": { ...fields, "config": [ { "type": "<option key>", "value": <value> } ] }
```

Each config entry's `type` is the option's **Key** and `value` is its value. List fields hold an array of item objects (keyed by the item's field keys), and a list item may carry its own `config` array in the same shape.

## Block categories

A block may be placed in a slot when the slot's allowed categories include one of the block's categories.

- **content**: Call to Action (`cta_block`), Cards Block (`cards_block`), HTML (`html`), Links (`links_group`), Quote (`quote`), Text (`text`), Well (`well`)
- **page**: Page (`flex_page`)
- **structure**: Columns (`columns`), Divider (`divider`), HTML (`html`), Hero (`hero`), Section (`section`), Tabbed Content (`tabbed_content`)

## Value types

Some fields hold a value with a specific shape:

### Rich text (`rich-text`)

An HTML string.

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

`value` is an object keyed by the field and slot keys below (with options under `config`).

**Fields**

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Description | `description` | rich text |  |  |
| Actions | `actions` | list |  |  |

**Configuration options**

| Option | Key | Type | Values / format | Description |
| --- | --- | --- | --- | --- |
| Analytics Label | `analytics_label` | text |  | Analytics events from within this section will include this label |
| Layout | `layout` | select | see options below |  |
| Rendering Condition | `rendering_condition` | text |  | Comma-separated condition slugs. Block renders only when at least one is active. |

_Layout (`layout`) options:_

| Value | Label |
| --- | --- |
| `inline` | Inline |

**Actions** — list; each item has:

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Link Text | `text` | text | Yes |  |
| Aria Label | `ariaLabel` | text |  |  |
| Link Target | `target` | link | Yes |  |

_Actions — per-item options:_

| Option | Key | Type | Values / format | Description |
| --- | --- | --- | --- | --- |
| Style | `style` | select | see options below |  |
| Custom Color | `custom_color` | text | must match `#[a-fA-F0-9]{6}` | Hex color override. Overrides Style preset. |

_Style (`style`) options:_

| Value | Label |
| --- | --- |
| `orange` | Orange |
| `white` | White |
| `blue_outline` | Blue Outline |
| `deep_green_outline` | Deep Green Outline |

### Cards Block — `cards_block`

*Categories: content*

`value` is an object keyed by the field and slot keys below (with options under `config`).

**Fields**

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Cards | `cards` | list |  |  |

**Configuration options**

| Option | Key | Type | Values / format | Description |
| --- | --- | --- | --- | --- |
| Style | `card_style` | select | see options below |  |
| Size | `card_size` | number | a number | A single number representing 10px increments |
| Columns | `card_columns` | number | a number | Number of columns (works with Size) |
| Accent Colors | `accent_colors` | text |  | Comma-separated hex colors for card borders/shadows, e.g. #ff0000,#00ff00,#0000ff |
| Divider Colors | `divider_colors` | text |  | Comma-separated hex colors for card divider lines, e.g. #ff0000,#00ff00 |
| Background Color | `background_color` | text | must match `#[a-fA-F0-9]{6}` | Hex background color for cards |
| Border Size | `border_size` | number | a number | Border thickness in pixels. Rounded: border width (default: 1px). Square: top accent height (default: 10px). |

_Style (`card_style`) options:_

| Value | Label |
| --- | --- |
| `rounded` | Rounded |
| `square` | Square |

**Cards** — list; each item has:

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Card Text | `text` | rich text | Yes |  |
| Call To Action | `ctaBlock` | list |  |  |

**Cards › Call To Action** — list (max 1); each item has:

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Link Text | `text` | text | Yes |  |
| Aria Label | `ariaLabel` | text |  |  |
| Link Target | `target` | link | Yes |  |

_Cards › Call To Action — per-item options:_

| Option | Key | Type | Values / format | Description |
| --- | --- | --- | --- | --- |
| Style | `style` | select | see options below |  |
| Custom Color | `custom_color` | text | must match `#[a-fA-F0-9]{6}` | Hex color override. Overrides Style preset. |

_Style (`style`) options:_

| Value | Label |
| --- | --- |
| `orange` | Orange |
| `white` | White |
| `blue_outline` | Blue Outline |
| `deep_green_outline` | Deep Green Outline |

### Columns — `columns`

*Categories: structure*

`value` is an object keyed by the field and slot keys below (with options under `config`).

**Child content**

| Slot | Key | Allowed blocks |
| --- | --- | --- |
| Left Column Content | `leftContent` | Call to Action (`cta_block`), Cards Block (`cards_block`), HTML (`html`), Links (`links_group`), Quote (`quote`), Text (`text`), Well (`well`) |
| Right Column Content | `rightContent` | Call to Action (`cta_block`), Cards Block (`cards_block`), HTML (`html`), Links (`links_group`), Quote (`quote`), Text (`text`), Well (`well`) |

**Fields**

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Left Column Content | `leftContent` | child blocks | Yes |  |
| Right Column Content | `rightContent` | child blocks | Yes |  |

**Configuration options**

| Option | Key | Type | Values / format | Description |
| --- | --- | --- | --- | --- |
| Background Color | `background_color` | text | must match `#[a-fA-Z0-9]{6}` |  |
| Gradient To Color | `gradient_color` | text | must match `#[a-fA-Z0-9]{6}` | Second color for gradient effect. Background Color is the starting color. |
| Gradient Direction | `gradient_direction` | select | see options below |  |
| Padding | `padding` | number | a number | Top and Bottom padding, in 10px increments |
| Padding Top | `padding_top` | number | a number | Top padding, in 10px increments |
| Padding Bottom | `padding_bottom` | number | a number | Bottom padding, in 10px increments |
| Height | `flex` | select | see options below |  |
| Analytics Label | `analytics_label` | text |  | Analytics events from within this section will include this label |
| ID | `id` | text |  | The HTML id of the section (can be referenced by anchor links). |
| Column Gap | `gap` | number | a number | The space between the columns, in 10px increments |
| Stack Below Width | `stack_at` | text |  | Column width at which the two columns stack vertically (CSS length, e.g. 60em, 400px). Defaults to 60em. |
| Right Column Size | `right_size` | text |  | CSS text for the right column eg (20rem, 30%) |
| Left Column Size | `left_size` | text |  | CSS text for the left column eg (20rem, 30%) |

_Gradient Direction (`gradient_direction`) options:_

| Value | Label |
| --- | --- |
| `to bottom` | Top to Bottom |
| `to top` | Bottom to Top |
| `to right` | Left to Right |
| `to left` | Right to Left |
| `to bottom right` | Top-Left to Bottom-Right |
| `to bottom left` | Top-Right to Bottom-Left |
| `to top right` | Bottom-Left to Top-Right |
| `to top left` | Bottom-Right to Top-Left |

_Height (`flex`) options:_

| Value | Label |
| --- | --- |
| `flex-grow` | Grow to fill available page space |
| `flex-shrink` | Shrink to fit available page space |
| `flex` | Fit to available page space |

### Divider — `divider`

*Categories: structure*

`value` is an object keyed by the field and slot keys below (with options under `config`).

**Fields**

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Image | `image` | image | Yes |  |

**Configuration options**

| Option | Key | Type | Values / format | Description |
| --- | --- | --- | --- | --- |
| Image Display Width | `width` | text |  | CSS text for the width to display the image |
| Image Display Height | `height` | text |  | CSS text for the height to display the image |
| Image Alignment | `alignment` | select | see options below |  |
| Offset Vertical | `offset_vertical` | text |  | CSS text for vertical offset eg `-50%` to center the image vertically |
| Offset Horizontal | `offset_horizontal` | text |  | CSS text for horizontal offset eg `-50%` to center the image horizontally |

_Image Alignment (`alignment`) options:_

| Value | Label |
| --- | --- |
| `content_left` | Left side of Content |
| `content_right` | Right side of Content |
| `body_left` | Left side of Page |
| `body_right` | Right side of Page |
| `center` | Center |

### Hero — `hero`

*Categories: structure*

`value` is an object keyed by the field and slot keys below (with options under `config`).

**Child content**

| Slot | Key | Allowed blocks |
| --- | --- | --- |
| Content | `content` | Call to Action (`cta_block`), Cards Block (`cards_block`), HTML (`html`), Links (`links_group`), Quote (`quote`), Text (`text`), Well (`well`) |

**Fields**

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Content | `content` | child blocks |  |  |
| Image Alt | `imageAlt` | text |  |  |
| Hero Image | `image` | image | Yes |  |

**Configuration options**

| Option | Key | Type | Values / format | Description |
| --- | --- | --- | --- | --- |
| Image Alignment | `image_alignment` | select | see options below |  |
| Text Alignment | `text_alignment` | select | see options below |  |
| Background Color | `background_color` | text | must match `#[a-fA-Z0-9]{6}` |  |
| Gradient To Color | `gradient_color` | text | must match `#[a-fA-Z0-9]{6}` | Second color for gradient effect. Background Color is the starting color. |
| Gradient Direction | `gradient_direction` | select | see options below |  |
| Padding | `padding` | number | a number | Top and Bottom padding, in 10px increments |
| Padding Top | `padding_top` | number | a number | Top padding, in 10px increments |
| Padding Bottom | `padding_bottom` | number | a number | Bottom padding, in 10px increments |
| Analytics Label | `analytics_label` | text |  | Analytics events from within this section will include this label |
| ID | `id` | text |  | The HTML id of the section (can be referenced by anchor links). |
| Image Border Radius | `image_border_radius` | number | a number | Border radius for the hero image in pixels |
| Image Border Color | `image_border_color` | text | must match `#[a-fA-F0-9]{6}` | Hex color for the hero image border |
| Image Border Size | `image_border_size` | number | a number | Border width for the hero image in pixels |
| Image Overhang | `image_overhang` | text |  | Extends the image beyond the content area by this amount (e.g. 5rem, 10%) |
| Rendering Condition | `rendering_condition` | text |  | Comma-separated condition slugs. Block renders only when at least one is active. |

_Image Alignment (`image_alignment`) options:_

| Value | Label |
| --- | --- |
| `left` | Left |
| `top_left` | Top Left |
| `bottom_left` | Bottom Left |
| `right` | Right |
| `top_right` | Top Right |
| `bottom_right` | Bottom Right |

_Text Alignment (`text_alignment`) options:_

| Value | Label |
| --- | --- |
| `left` | Left |
| `right` | Right |
| `center` | Center |

_Gradient Direction (`gradient_direction`) options:_

| Value | Label |
| --- | --- |
| `to bottom` | Top to Bottom |
| `to top` | Bottom to Top |
| `to right` | Left to Right |
| `to left` | Right to Left |
| `to bottom right` | Top-Left to Bottom-Right |
| `to bottom left` | Top-Right to Bottom-Left |
| `to top right` | Bottom-Left to Top-Right |
| `to top left` | Bottom-Right to Top-Left |

### HTML — `html`

*Categories: structure, content*

`value` is the long text value directly (a bare `long-text`, not an object).

**Fields**

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| HTML | `html` | long text | Yes | Raw html to be embedded in the page |

### Links — `links_group`

*Categories: content*

`value` is an object keyed by the field and slot keys below (with options under `config`).

**Fields**

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Links | `links` | list |  |  |

**Configuration options**

| Option | Key | Type | Values / format | Description |
| --- | --- | --- | --- | --- |
| Analytics Label | `analytics_label` | text |  | Analytics events from within this section will include this label |
| Color | `color` | select | see options below |  |
| Custom Color | `custom_color` | text | must match `#[a-fA-F0-9]{6}` | Hex color override. Overrides Color preset. |
| Size | `size` | select | see options below |  |
| Layout | `layout` | select | see options below |  |

_Color (`color`) options:_

| Value | Label |
| --- | --- |
| `white` | White |
| `blue` | Blue |
| `deep-green` | Deep Green |

_Size (`size`) options:_

| Value | Label |
| --- | --- |
| `small` | Small |
| `large` | Large |

_Layout (`layout`) options:_

| Value | Label |
| --- | --- |
| `grid` | Grid |
| `inline` | Inline |

**Links** — list; each item has:

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Link Text | `text` | text | Yes |  |
| Aria Label | `ariaLabel` | text |  |  |
| Link Target | `target` | link | Yes |  |

### Page — `flex_page`

*Categories: page*

`value` is an object keyed by the field and slot keys below (with options under `config`).

**Child content**

| Slot | Key | Allowed blocks |
| --- | --- | --- |
| Page Content | `content` | Columns (`columns`), Divider (`divider`), HTML (`html`), Hero (`hero`), Section (`section`), Tabbed Content (`tabbed_content`) |

**Fields**

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Page Content | `content` | child blocks |  |  |

**Configuration options**

| Option | Key | Type | Values / format | Description |
| --- | --- | --- | --- | --- |
| Width | `width` | select | see options below |  |
| Height | `height` | select | see options below |  |

_Width (`width`) options:_

| Value | Label |
| --- | --- |
| `fixed` | Fixed |
| `full` | Full Width |

_Height (`height`) options:_

| Value | Label |
| --- | --- |
| `fill-to-screen` | Expand to fill screen (short content expands to screen, longer content scrolls page normally) |
| `contain-to-screen` | Shrink to contain to screen (short content appears normally, longer content shrinks to fit page) |
| `fit-to-screen` | Expand & Shrink (bottom of content always aligns to screen edge) |

### Quote — `quote`

*Categories: content*

`value` is an object keyed by the field and slot keys below (with options under `config`).

**Fields**

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Quote Text | `content` | long text | Yes |  |
| Quotee's title | `title` | text |  |  |
| Quotee's name | `name` | text | Yes |  |
| Image | `image` | image | Yes |  |

**Configuration options**

| Option | Key | Type | Values / format | Description |
| --- | --- | --- | --- | --- |
| Accent Color | `accent_color` | text | must match `#[a-fA-F0-9]{6}` | Hex color for the quote mark |

### Section — `section`

*Categories: structure*

`value` is an object keyed by the field and slot keys below (with options under `config`).

**Child content**

| Slot | Key | Allowed blocks |
| --- | --- | --- |
| Section Content | `content` | Call to Action (`cta_block`), Cards Block (`cards_block`), HTML (`html`), Links (`links_group`), Quote (`quote`), Text (`text`), Well (`well`) |

**Fields**

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Section Content | `content` | child blocks | Yes |  |

**Configuration options**

| Option | Key | Type | Values / format | Description |
| --- | --- | --- | --- | --- |
| Text Alignment | `text_alignment` | select | see options below |  |
| Height | `flex` | select | see options below |  |
| Background Color | `background_color` | text | must match `#[a-fA-Z0-9]{6}` |  |
| Gradient To Color | `gradient_color` | text | must match `#[a-fA-Z0-9]{6}` | Second color for gradient effect. Background Color is the starting color. |
| Gradient Direction | `gradient_direction` | select | see options below |  |
| Padding | `padding` | number | a number | Top and Bottom padding, in 10px increments |
| Padding Top | `padding_top` | number | a number | Top padding, in 10px increments |
| Padding Bottom | `padding_bottom` | number | a number | Bottom padding, in 10px increments |
| Analytics Label | `analytics_label` | text |  | Analytics events from within this section will include this label |
| ID | `id` | text |  | The HTML id of the section (can be referenced by anchor links). |
| Rendering Condition | `rendering_condition` | text |  | Comma-separated condition slugs. Block renders only when at least one is active. |

_Text Alignment (`text_alignment`) options:_

| Value | Label |
| --- | --- |
| `left` | Left |
| `right` | Right |
| `center` | Center |

_Height (`flex`) options:_

| Value | Label |
| --- | --- |
| `flex-grow` | Grow to fill available page space |
| `flex-shrink` | Shrink to fit available page space |
| `flex` | Fit to available page space |

_Gradient Direction (`gradient_direction`) options:_

| Value | Label |
| --- | --- |
| `to bottom` | Top to Bottom |
| `to top` | Bottom to Top |
| `to right` | Left to Right |
| `to left` | Right to Left |
| `to bottom right` | Top-Left to Bottom-Right |
| `to bottom left` | Top-Right to Bottom-Left |
| `to top right` | Bottom-Left to Top-Right |
| `to top left` | Bottom-Right to Top-Left |

### Tabbed Content — `tabbed_content`

*Categories: structure*

`value` is an object keyed by the field and slot keys below (with options under `config`).

**Child content**

| Slot | Key | Allowed blocks |
| --- | --- | --- |
| Tab Content | `content` | Columns (`columns`), Divider (`divider`), HTML (`html`), Hero (`hero`), Section (`section`), Tabbed Content (`tabbed_content`) |

**Fields**

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Tabs | `tabs` | list |  |  |

**Configuration options**

| Option | Key | Type | Values / format | Description |
| --- | --- | --- | --- | --- |
| Tab Alignment | `tab_alignment` | select | see options below |  |
| Active Tab Color | `active_color` | text | must match `#[a-fA-F0-9]{6}` | Hex color for the active tab underline |
| Background Color | `background_color` | text | must match `#[a-fA-Z0-9]{6}` |  |
| Gradient To Color | `gradient_color` | text | must match `#[a-fA-Z0-9]{6}` | Second color for gradient effect. Background Color is the starting color. |
| Gradient Direction | `gradient_direction` | select | see options below |  |
| Default Tab | `default_tab` | number | a number | Zero-based index of the tab to show by default |
| Analytics Label | `analytics_label` | text |  | Analytics events from within this block will include this label |
| Border Width | `border_width` | select | see options below |  |
| ID | `id` | text |  | The HTML id of the tabbed content block (can be referenced by anchor links). |

_Tab Alignment (`tab_alignment`) options:_

| Value | Label |
| --- | --- |
| `left` | Left |
| `center` | Center |
| `right` | Right |

_Gradient Direction (`gradient_direction`) options:_

| Value | Label |
| --- | --- |
| `to bottom` | Top to Bottom |
| `to top` | Bottom to Top |
| `to right` | Left to Right |
| `to left` | Right to Left |
| `to bottom right` | Top-Left to Bottom-Right |
| `to bottom left` | Top-Right to Bottom-Left |
| `to top right` | Bottom-Left to Top-Right |
| `to top left` | Bottom-Right to Top-Left |

_Border Width (`border_width`) options:_

| Value | Label |
| --- | --- |
| `content` | Content Width |
| `full` | Full Width |

**Tabs** — list; each item has:

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Tab Label | `label` | text | Yes |  |
| Tab Content | `content` | child blocks |  |  |

### Text — `text`

*Categories: content*

`value` is the rich text value directly (a bare `rich-text`, not an object).

**Fields**

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Text | `text` | rich text | Yes |  |

### Well — `well`

*Categories: content*

`value` is an object keyed by the field and slot keys below (with options under `config`).

**Child content**

| Slot | Key | Allowed blocks |
| --- | --- | --- |
| Well Content | `content` | Call to Action (`cta_block`), Cards Block (`cards_block`), HTML (`html`), Links (`links_group`), Quote (`quote`), Text (`text`), Well (`well`) |

**Fields**

| Field | Key | Type | Required | Description |
| --- | --- | --- | --- | --- |
| Well Content | `content` | child blocks |  |  |

**Configuration options**

| Option | Key | Type | Values / format | Description |
| --- | --- | --- | --- | --- |
| Background Color | `background_color` | text | must match `#[a-fA-Z0-9]{6}` |  |
| Gradient To Color | `gradient_color` | text | must match `#[a-fA-Z0-9]{6}` | Second color for gradient effect. Background Color is the starting color. |
| Gradient Direction | `gradient_direction` | select | see options below |  |
| Border Radius | `border_radius` | number | a number | Border radius in pixels |
| Border Color | `border_color` | text | must match `#[a-fA-F0-9]{6}` | Hex border color |
| Border Size | `border_size` | number | a number | Border width in pixels. Only applies when border color is set. |
| Padding | `padding` | number | a number | Inner padding, in 10px increments |
| Margin | `margin` | number | a number | Outer margin, in 10px increments |
| Pull Up | `pull_up` | number | a number | Pulls the well upward by this amount in rem units. Use with extra padding on the section above to create an overlap effect. |
| Width | `width` | text |  | Maximum width of the well content (e.g., 600px, 50%, auto) |
| Text Alignment | `text_alignment` | select | see options below |  |
| Analytics Label | `analytics_label` | text |  | Analytics events from within this well will include this label |
| ID | `id` | text |  | The HTML id of the well (can be referenced by anchor links). |

_Gradient Direction (`gradient_direction`) options:_

| Value | Label |
| --- | --- |
| `to bottom` | Top to Bottom |
| `to top` | Bottom to Top |
| `to right` | Left to Right |
| `to left` | Right to Left |
| `to bottom right` | Top-Left to Bottom-Right |
| `to bottom left` | Top-Right to Bottom-Left |
| `to top right` | Bottom-Left to Top-Right |
| `to top left` | Bottom-Right to Top-Left |

_Text Alignment (`text_alignment`) options:_

| Value | Label |
| --- | --- |
| `left` | Left |
| `right` | Right |
| `center` | Center |
