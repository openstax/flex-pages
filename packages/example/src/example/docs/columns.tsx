import React from 'react';
import * as UI from '@openstax/ui-components';
import { createRoute, makeScreen } from "../../core/services";
import * as allBlocks from '@openstax/flex-page-renderer/blocks/index';
import { ContentBlockRoot } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { Layout } from '../../components/Layout';
import { actions } from '../actions';

export const ColumnsComponent = () => {
  return <Layout>
    <UI.NavBar logo />
    <ContentBlockRoot actions={actions} blocks={allBlocks} data={sampleContent as any} />
  </Layout>;
};

export const columnsScreen = createRoute({name: 'ColumnsComponent',
  path: '/columns',
  handler: makeScreen(ColumnsComponent)
});

/* eslint-disable max-len */
const sampleContent = [
  {
    "type": "flex_page",
    "value": {
      "content": [
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<p data-block-key=\"t6nx6\"><b>Page Structure:</b></p>",
                "id": "b1b2c3d4-1111-1111-1111-000000000001"
              },
              {
                "type": "text",
                "value": "<h1 data-block-key=\"t6nx6\">Columns Component</h1>",
                "id": "b1b2c3d4-1111-1111-1111-000000000002"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 7,
                "id": "b1b2c3d4-1111-1111-1111-000000000003"
              },
              {
                "type": "background_color",
                "value": "#0dc0dc",
                "id": "b1b2c3d4-1111-1111-1111-000000000004"
              }
            ]
          },
          "id": "b1b2c3d4-1111-1111-1111-000000000005"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<p data-block-key=\"pvocz\"><a href=\"#/\">documentation home</a></p>",
                "id": "b1b2c3d4-1111-1111-1111-000000000006"
              }
            ],
            "config": [
              {
                "type": "padding_top",
                "value": 1,
                "id": "b1b2c3d4-1111-1111-1111-000000000007"
              }
            ]
          },
          "id": "b1b2c3d4-1111-1111-1111-000000000008"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"36jpq\">Overview</h2><p data-block-key=\"cs4gd\">The Columns component creates a two-column layout with left and right content areas. On smaller screens, the columns stack vertically. It supports configurable column sizing (fixed or flex), gap between columns, and padding options.</p>",
                "id": "b1b2c3d4-1111-1111-1111-000000000009"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 5,
                "id": "b1b2c3d4-1111-1111-1111-000000000010"
              }
            ]
          },
          "id": "b1b2c3d4-1111-1111-1111-000000000011"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"t6nx6\">Config</h2><p data-block-key=\"2ehkg\">Columns have a config section with options for controlling layout and appearance.</p><h3 data-block-key=\"7g4su\">The options</h3><p data-block-key=\"8ih75\"><b>Background Color</b>: Sets the background color of the columns section (hex format)</p><p data-block-key=\"42t6v\"><b>Padding</b>: Top and bottom padding, in 10px increments</p><p data-block-key=\"8d7hf\"><b>Padding Top</b>: Top padding only, in 10px increments</p><p data-block-key=\"ds68a\"><b>Padding Bottom</b>: Bottom padding only, in 10px increments</p><p data-block-key=\"8hv0d\"><b>Column Gap</b>: The space between the columns, in 10px increments</p><p data-block-key=\"2k4u0\"><b>Height</b>: Controls how the columns interact with available page space (grow, shrink, or fit)</p><p data-block-key=\"2gcvi\"><b>Left Column Size</b>: CSS value for the left column width (e.g., 20rem, 30%). Cannot be used with Right Column Size.</p><p data-block-key=\"3gcvi\"><b>Right Column Size</b>: CSS value for the right column width (e.g., 20rem, 30%). Cannot be used with Left Column Size.</p><p data-block-key=\"4gcvi\"><b>Analytics Label</b>: Analytics events from within this section will include this label</p><p data-block-key=\"5gcvi\"><b>ID</b>: The HTML id of the section, can be referenced by anchor links</p>",
                "id": "b1b2c3d4-1111-1111-1111-000000000012"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 5,
                "id": "b1b2c3d4-1111-1111-1111-000000000013"
              }
            ]
          },
          "id": "b1b2c3d4-1111-1111-1111-000000000014"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"36jpq\">Examples</h2><h3 data-block-key=\"cs4gd\">Basic two-column layout</h3>",
                "id": "b1b2c3d4-1111-1111-1111-000000000015"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 5,
                "id": "b1b2c3d4-1111-1111-1111-000000000016"
              }
            ]
          },
          "id": "b1b2c3d4-1111-1111-1111-000000000017"
        },
        {
          "type": "columns",
          "value": {
            "leftContent": [
              {
                "type": "text",
                "value": "<h3 data-block-key=\"col1l\">Left Column</h3><p data-block-key=\"col1l2\">This is the left side of a basic two-column layout. Both columns share equal space by default.</p>",
                "id": "b1b2c3d4-2222-1111-1111-000000000001"
              }
            ],
            "rightContent": [
              {
                "type": "text",
                "value": "<h3 data-block-key=\"col1r\">Right Column</h3><p data-block-key=\"col1r2\">This is the right side. On mobile, the columns will stack vertically.</p>",
                "id": "b1b2c3d4-2222-1111-1111-000000000002"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 3,
                "id": "b1b2c3d4-2222-1111-1111-000000000003"
              },
              {
                "type": "gap",
                "value": "3",
                "id": "b1b2c3d4-2222-1111-1111-000000000004"
              }
            ]
          },
          "id": "b1b2c3d4-2222-1111-1111-000000000005"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h3 data-block-key=\"36jpq\">Sidebar layout with left_size</h3>",
                "id": "b1b2c3d4-2222-1111-1111-000000000006"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 5,
                "id": "b1b2c3d4-2222-1111-1111-000000000007"
              }
            ]
          },
          "id": "b1b2c3d4-2222-1111-1111-000000000008"
        },
        {
          "type": "columns",
          "value": {
            "leftContent": [
              {
                "type": "text",
                "value": "<h3 data-block-key=\"col2l\">Sidebar</h3><p data-block-key=\"col2l2\">This left column has a fixed width of 20rem, creating a sidebar-style layout.</p>",
                "id": "b1b2c3d4-2222-1111-1111-000000000009"
              }
            ],
            "rightContent": [
              {
                "type": "text",
                "value": "<h3 data-block-key=\"col2r\">Main Content</h3><p data-block-key=\"col2r2\">The right column takes up the remaining space, flexing to fill the available width.</p>",
                "id": "b1b2c3d4-2222-1111-1111-000000000010"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 3,
                "id": "b1b2c3d4-2222-1111-1111-000000000011"
              },
              {
                "type": "gap",
                "value": "3",
                "id": "b1b2c3d4-2222-1111-1111-000000000012"
              },
              {
                "type": "left_size",
                "value": "20rem",
                "id": "b1b2c3d4-2222-1111-1111-000000000013"
              }
            ]
          },
          "id": "b1b2c3d4-2222-1111-1111-000000000014"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h3 data-block-key=\"36jpq\">With custom gap</h3>",
                "id": "b1b2c3d4-2222-1111-1111-000000000015"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 5,
                "id": "b1b2c3d4-2222-1111-1111-000000000016"
              }
            ]
          },
          "id": "b1b2c3d4-2222-1111-1111-000000000017"
        },
        {
          "type": "columns",
          "value": {
            "leftContent": [
              {
                "type": "text",
                "value": "<p data-block-key=\"col3l\">This layout has a larger gap of 6 (60px) between the columns.</p>",
                "id": "b1b2c3d4-2222-1111-1111-000000000018"
              }
            ],
            "rightContent": [
              {
                "type": "text",
                "value": "<p data-block-key=\"col3r\">Notice the extra space between this column and the one on the left.</p>",
                "id": "b1b2c3d4-2222-1111-1111-000000000019"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 3,
                "id": "b1b2c3d4-2222-1111-1111-000000000020"
              },
              {
                "type": "gap",
                "value": "6",
                "id": "b1b2c3d4-2222-1111-1111-000000000021"
              }
            ]
          },
          "id": "b1b2c3d4-2222-1111-1111-000000000022"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h3 data-block-key=\"36jpq\">With background color</h3>",
                "id": "b1b2c3d4-2222-1111-1111-000000000023"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 5,
                "id": "b1b2c3d4-2222-1111-1111-000000000024"
              }
            ]
          },
          "id": "b1b2c3d4-2222-1111-1111-000000000025"
        },
        {
          "type": "columns",
          "value": {
            "leftContent": [
              {
                "type": "text",
                "value": "<h3 data-block-key=\"col4l\">Left Column</h3><p data-block-key=\"col4l2\">Columns can have a background color applied to the entire section.</p>",
                "id": "b1b2c3d4-2222-1111-1111-000000000026"
              }
            ],
            "rightContent": [
              {
                "type": "text",
                "value": "<h3 data-block-key=\"col4r\">Right Column</h3><p data-block-key=\"col4r2\">The background color spans across both columns and the gap between them.</p>",
                "id": "b1b2c3d4-2222-1111-1111-000000000027"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 3,
                "id": "b1b2c3d4-2222-1111-1111-000000000028"
              },
              {
                "type": "gap",
                "value": "3",
                "id": "b1b2c3d4-2222-1111-1111-000000000029"
              },
              {
                "type": "background_color",
                "value": "#d4edda",
                "id": "b1b2c3d4-2222-1111-1111-000000000030"
              }
            ]
          },
          "id": "b1b2c3d4-2222-1111-1111-000000000031"
        }
      ]
    }
  }
];
