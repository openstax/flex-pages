import React from 'react';
import * as UI from '@openstax/ui-components';
import { createRoute, makeScreen } from "../../core/services";
import * as allBlocks from '@openstax/flex-page-renderer/blocks/index';
import { ContentBlockRoot } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { Layout } from '../../components/Layout';
import { actions } from '../actions';

export const WellComponent = () => {
  return <Layout>
    <UI.NavBar logo />
    <ContentBlockRoot actions={actions} blocks={allBlocks} data={sampleContent as any} />
  </Layout>;
};

export const wellScreen = createRoute({name: 'WellComponent',
  path: '/well',
  handler: makeScreen(WellComponent)
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
                "value": "<p data-block-key=\"t6nx6\"><b>Page Content:</b></p>",
                "id": "a1b2c3d4-1111-1111-1111-000000000001"
              },
              {
                "type": "text",
                "value": "<h1 data-block-key=\"t6nx6\">Well Component</h1>",
                "id": "a1b2c3d4-1111-1111-1111-000000000002"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 7,
                "id": "a1b2c3d4-1111-1111-1111-000000000003"
              },
              {
                "type": "background_color",
                "value": "#0dc0dc",
                "id": "a1b2c3d4-1111-1111-1111-000000000004"
              }
            ]
          },
          "id": "a1b2c3d4-1111-1111-1111-000000000005"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<p data-block-key=\"pvocz\"><a href=\"#/\">documentation home</a></p>",
                "id": "a1b2c3d4-1111-1111-1111-000000000006"
              }
            ],
            "config": [
              {
                "type": "padding_top",
                "value": 1,
                "id": "a1b2c3d4-1111-1111-1111-000000000007"
              }
            ]
          },
          "id": "a1b2c3d4-1111-1111-1111-000000000008"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"36jpq\">Overview</h2><p data-block-key=\"cs4gd\">The Well component is a styled container that wraps content blocks. It supports customizable background color, padding, border radius, and max-width. When a dark background color is set, text automatically switches to white for readability.</p>",
                "id": "a1b2c3d4-1111-1111-1111-000000000009"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 5,
                "id": "a1b2c3d4-1111-1111-1111-000000000010"
              }
            ]
          },
          "id": "a1b2c3d4-1111-1111-1111-000000000011"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"t6nx6\">Config</h2><p data-block-key=\"2ehkg\">Wells have a config section with a number of options for controlling their appearance.</p><h3 data-block-key=\"7g4su\">The options</h3><p data-block-key=\"8ih75\"><b>Background Color</b>: Sets the background color of the well (hex format, e.g. #f0f0f0). Dark colors automatically switch text to white.</p><p data-block-key=\"42t6v\"><b>Border Radius</b>: Border radius in pixels (default: 8)</p><p data-block-key=\"42brc\"><b>Border Color</b>: Hex border color (e.g. #cccccc). No border by default.</p><p data-block-key=\"42brs\"><b>Border Size</b>: Border width (e.g. 1px, 2px, thin). Only applies when border color is set. Defaults to 1px.</p><p data-block-key=\"8d7hf\"><b>Padding</b>: Inner padding, in 10px increments (default: 2)</p><p data-block-key=\"ds68a\"><b>Margin</b>: Vertical (top and bottom) outer margin, in 10px increments (default: 0)</p><p data-block-key=\"8hv0d\"><b>Width</b>: Maximum width of the well content (e.g., 600px, 50%, auto)</p><p data-block-key=\"2k4u0\"><b>Text Alignment</b>: Alignment of text in the well (left, right, or center)</p><p data-block-key=\"2gcvi\"><b>Analytics Label</b>: Analytics events from within this well will include this label</p><p data-block-key=\"3gcvi\"><b>ID</b>: The HTML id of the well, can be referenced by anchor links</p>",
                "id": "a1b2c3d4-1111-1111-1111-000000000012"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 5,
                "id": "a1b2c3d4-1111-1111-1111-000000000013"
              }
            ]
          },
          "id": "a1b2c3d4-1111-1111-1111-000000000014"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"36jpq\">Examples</h2>",
                "id": "a1b2c3d4-1111-1111-1111-000000000015"
              },
              {
                "type": "text",
                "value": "<h3 data-block-key=\"36jpq\">Basic well with default styling</h3>",
                "id": "a1b2c3d4-1111-1111-1111-000000000016"
              },
              {
                "type": "well",
                "value": {
                  "content": [
                    {
                      "type": "text",
                      "value": "<p data-block-key=\"well1\">This is a basic well with default settings. It has a default border radius of 8px and padding of 2.</p>",
                      "id": "a1b2c3d4-2222-1111-1111-000000000001"
                    }
                  ],
                  "config": [
                    {
                      "type": "background_color",
                      "value": "#f0f0f0",
                      "id": "a1b2c3d4-2222-1111-1111-000000000002"
                    }
                  ]
                },
                "id": "a1b2c3d4-2222-1111-1111-000000000003"
              },
              {
                "type": "text",
                "value": "<h3 data-block-key=\"36jpq\">Custom background color and border radius</h3>",
                "id": "a1b2c3d4-2222-1111-1111-000000000004"
              },
              {
                "type": "well",
                "value": {
                  "content": [
                    {
                      "type": "text",
                      "value": "<p data-block-key=\"well2\">This well has a custom background color and a larger border radius of 20px.</p>",
                      "id": "a1b2c3d4-2222-1111-1111-000000000005"
                    }
                  ],
                  "config": [
                    {
                      "type": "background_color",
                      "value": "#d4edda",
                      "id": "a1b2c3d4-2222-1111-1111-000000000006"
                    },
                    {
                      "type": "border_radius",
                      "value": "20",
                      "id": "a1b2c3d4-2222-1111-1111-000000000007"
                    }
                  ]
                },
                "id": "a1b2c3d4-2222-1111-1111-000000000008"
              },
              {
                "type": "text",
                "value": "<h3 data-block-key=\"36jpq\">Dark background (auto white text)</h3>",
                "id": "a1b2c3d4-2222-1111-1111-000000000009"
              },
              {
                "type": "well",
                "value": {
                  "content": [
                    {
                      "type": "text",
                      "value": "<p data-block-key=\"well3\">This well has a dark background color. The text automatically switches to white for readability.</p>",
                      "id": "a1b2c3d4-2222-1111-1111-000000000010"
                    }
                  ],
                  "config": [
                    {
                      "type": "background_color",
                      "value": "#1a1a2e",
                      "id": "a1b2c3d4-2222-1111-1111-000000000011"
                    }
                  ]
                },
                "id": "a1b2c3d4-2222-1111-1111-000000000012"
              },
              {
                "type": "text",
                "value": "<h3 data-block-key=\"36jpq\">Custom width and text alignment</h3>",
                "id": "a1b2c3d4-2222-1111-1111-000000000013"
              },
              {
                "type": "well",
                "value": {
                  "content": [
                    {
                      "type": "text",
                      "value": "<p data-block-key=\"well4\">This well has a max width of 500px and center-aligned text.</p>",
                      "id": "a1b2c3d4-2222-1111-1111-000000000014"
                    }
                  ],
                  "config": [
                    {
                      "type": "background_color",
                      "value": "#e8daef",
                      "id": "a1b2c3d4-2222-1111-1111-000000000015"
                    },
                    {
                      "type": "width",
                      "value": "500px",
                      "id": "a1b2c3d4-2222-1111-1111-000000000016"
                    },
                    {
                      "type": "text_alignment",
                      "value": "center",
                      "id": "a1b2c3d4-2222-1111-1111-000000000017"
                    }
                  ]
                },
                "id": "a1b2c3d4-2222-1111-1111-000000000018"
              },
              {
                "type": "text",
                "value": "<h3 data-block-key=\"36jpq\">Extra padding and margin</h3>",
                "id": "a1b2c3d4-2222-1111-1111-000000000019"
              },
              {
                "type": "well",
                "value": {
                  "content": [
                    {
                      "type": "text",
                      "value": "<p data-block-key=\"well5\">This well has padding set to 4 and margin set to 2, giving it more breathing room inside and out.</p>",
                      "id": "a1b2c3d4-2222-1111-1111-000000000020"
                    }
                  ],
                  "config": [
                    {
                      "type": "background_color",
                      "value": "#fff3cd",
                      "id": "a1b2c3d4-2222-1111-1111-000000000021"
                    },
                    {
                      "type": "padding",
                      "value": "4",
                      "id": "a1b2c3d4-2222-1111-1111-000000000022"
                    },
                    {
                      "type": "margin",
                      "value": "2",
                      "id": "a1b2c3d4-2222-1111-1111-000000000023"
                    }
                  ]
                },
                "id": "a1b2c3d4-2222-1111-1111-000000000024"
              },
              {
                "type": "text",
                "value": "<h3 data-block-key=\"36jpq\">Border color only (default 1px)</h3>",
                "id": "a1b2c3d4-2222-1111-1111-000000000030"
              },
              {
                "type": "well",
                "value": {
                  "content": [
                    {
                      "type": "text",
                      "value": "<p data-block-key=\"well6\">This well has a border color set without a border size, so it defaults to a 1px solid border.</p>",
                      "id": "a1b2c3d4-2222-1111-1111-000000000031"
                    }
                  ],
                  "config": [
                    {
                      "type": "background_color",
                      "value": "#f0f0f0",
                      "id": "a1b2c3d4-2222-1111-1111-000000000032"
                    },
                    {
                      "type": "border_color",
                      "value": "#333333",
                      "id": "a1b2c3d4-2222-1111-1111-000000000033"
                    }
                  ]
                },
                "id": "a1b2c3d4-2222-1111-1111-000000000034"
              },
              {
                "type": "text",
                "value": "<h3 data-block-key=\"36jpq\">Border color + size + radius</h3>",
                "id": "a1b2c3d4-2222-1111-1111-000000000035"
              },
              {
                "type": "well",
                "value": {
                  "content": [
                    {
                      "type": "text",
                      "value": "<p data-block-key=\"well7\">This well has a 3px border with a custom color and 16px border radius.</p>",
                      "id": "a1b2c3d4-2222-1111-1111-000000000036"
                    }
                  ],
                  "config": [
                    {
                      "type": "background_color",
                      "value": "#e8f5e9",
                      "id": "a1b2c3d4-2222-1111-1111-000000000037"
                    },
                    {
                      "type": "border_color",
                      "value": "#2e7d32",
                      "id": "a1b2c3d4-2222-1111-1111-000000000038"
                    },
                    {
                      "type": "border_size",
                      "value": "3px",
                      "id": "a1b2c3d4-2222-1111-1111-000000000039"
                    },
                    {
                      "type": "border_radius",
                      "value": "16",
                      "id": "a1b2c3d4-2222-1111-1111-000000000040"
                    }
                  ]
                },
                "id": "a1b2c3d4-2222-1111-1111-000000000041"
              },
              {
                "type": "text",
                "value": "<h3 data-block-key=\"36jpq\">Border with dark background</h3>",
                "id": "a1b2c3d4-2222-1111-1111-000000000042"
              },
              {
                "type": "well",
                "value": {
                  "content": [
                    {
                      "type": "text",
                      "value": "<p data-block-key=\"well8\">This well combines a dark background with a contrasting border color.</p>",
                      "id": "a1b2c3d4-2222-1111-1111-000000000043"
                    }
                  ],
                  "config": [
                    {
                      "type": "background_color",
                      "value": "#1a1a2e",
                      "id": "a1b2c3d4-2222-1111-1111-000000000044"
                    },
                    {
                      "type": "border_color",
                      "value": "#e94560",
                      "id": "a1b2c3d4-2222-1111-1111-000000000045"
                    },
                    {
                      "type": "border_size",
                      "value": "2px",
                      "id": "a1b2c3d4-2222-1111-1111-000000000046"
                    }
                  ]
                },
                "id": "a1b2c3d4-2222-1111-1111-000000000047"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 5,
                "id": "a1b2c3d4-1111-1111-1111-000000000017"
              }
            ]
          },
          "id": "a1b2c3d4-1111-1111-1111-000000000018"
        }
      ]
    }
  }
];
