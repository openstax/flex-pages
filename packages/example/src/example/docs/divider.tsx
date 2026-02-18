import React from 'react';
import * as UI from '@openstax/ui-components';
import { createRoute, makeScreen } from "../../core/services";
import * as allBlocks from '@openstax/flex-page-renderer/blocks/index';
import { ContentBlockRoot } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { Layout } from '../../components/Layout';
import { actions } from '../actions';

export const DividerComponent = () => {
  return <Layout>
    <UI.NavBar logo />
    <ContentBlockRoot actions={actions} blocks={allBlocks} data={sampleContent as any} />
  </Layout>;
};

export const dividerScreen = createRoute({name: 'DividerComponent',
  path: '/divider',
  handler: makeScreen(DividerComponent)
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
                "id": "7bc4169a-b0ad-4e52-8e1e-92e39acf90e4"
              },
              {
                "type": "text",
                "value": "<h1 data-block-key=\"t6nx6\">Divider Component</h1>",
                "id": "4d5e1cb2-0260-46d1-af6b-d3d31478470f"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 7,
                "id": "e5f57252-5f8f-4ee0-a688-059f344c10ae"
              },
              {
                "type": "background_color",
                "value": "#0dc0dc",
                "id": "e008d57c-5114-451f-aeb1-3960df40945d"
              }
            ]
          },
          "id": "2d7d1acc-5ba9-48f9-bfa6-4796b18a8750"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<p data-block-key=\"yw19e\"><a href=\"#/\">documentation home</a></p>",
                "id": "1d01474d-8b55-4127-bff2-437ef5a9f84b"
              }
            ],
            "config": [
              {
                "type": "padding_top",
                "value": 1,
                "id": "6d80acf3-eef0-4c87-aea1-e70409c936b1"
              }
            ]
          },
          "id": "1fdec09a-9294-4ea1-9316-0b35f9d087ff"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"t6nx6\">Overview</h2><p data-block-key=\"6f164\">The divider component does not have content. It can be placed between sections, and it takes up zero vertical space on the page. the image that is configured in the divider will show behind the adjacent sections. Dividers can be used to add visual breakup or background image graphics to the page.</p><p data-block-key=\"buhkq\">Dividers accept an image and some configuration options. The image is assumed to be decorative, so no alt text definition is required.</p>",
                "id": "a54aa88b-7973-4f6a-86bb-a01ff8bba831"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 5,
                "id": "a5e84fb7-a67a-4107-b656-9d804674339b"
              }
            ]
          },
          "id": "bbd61408-d955-4a79-93bd-a101edd41979"
        },
        {
          "type": "divider",
          "value": {
            "image": {
              "id": 1066,
              "file": "https://assets.openstax.org/oscms-prod/media/original_images/strips.svg",
              "title": "strips",
              "height": 10,
              "width": 932,
              "created_at": "2024-07-30T08:57:15.626863-05:00"
            },
            "config": [
              {
                "type": "alignment",
                "value": "body_left",
                "id": "2bbe1c4e-fc9a-49fa-88f3-71c1a2f99254"
              },
              {
                "type": "width",
                "value": "80%",
                "id": "7ac91c76-901d-4bdf-b821-531f2ce7fe08"
              },
              {
                "type": "height",
                "value": "1rem",
                "id": "e845df70-0dcf-4ec1-9cca-5e4975ed7358"
              }
            ]
          },
          "id": "c4821894-22e3-4625-99c6-eb3f8cc0f420"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"t6nx6\">Config</h2><p data-block-key=\"2ehkg\"><b>alignment</b>: how to align the divider (center, left/right of content container, or left/right of window), default is \"center\"</p><p data-block-key=\"51o7c\"><b>width</b>: the width of the image. can be percentage of available space (eg 50%) or a fixed amount (eg 30rem) <a href=\"https://staging.openstax.org/flexpage-what-is-a-rem\">what the heck is a rem</a></p><p data-block-key=\"aqckd\"><b>height</b>: the width of the image. (eg 1rem)</p><p data-block-key=\"2tjqj\"><b>offset vertical</b>: fuss with the vertical position of the divider. percentages are percentages of the image size, can also use rem or px values. default is -50%, which is centering the image on the divider line.</p><p data-block-key=\"49gdt\"><b>offset horizontal</b>: fuss with the horizontal position of the divider. percentages are percentages of the image size, can also use rem or px values.</p>",
                "id": "f91d3bd9-0dc8-431f-a77f-b57e3ba9ff40"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 5,
                "id": "bed22890-38f2-46e9-be31-79a8826f92db"
              }
            ]
          },
          "id": "48a56cf1-82e9-475f-a5b8-b26e935c468e"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"p3vxp\">Examples</h2>",
                "id": "ca2d974c-382e-44c2-91b1-951067cf0b66"
              }
            ],
            "config": [
              {
                "type": "padding_bottom",
                "value": 5,
                "id": "e77d61d6-8808-4033-9fea-a69999d6ea29"
              }
            ]
          },
          "id": "439f01bf-8e9f-4680-a2fe-ae9cbd6f0272"
        },
        {
          "type": "divider",
          "value": {
            "image": {
              "id": 1066,
              "file": "https://assets.openstax.org/oscms-prod/media/original_images/strips.svg",
              "title": "strips",
              "height": 10,
              "width": 932,
              "created_at": "2024-07-30T08:57:15.626863-05:00"
            },
            "config": [
              {
                "type": "alignment",
                "value": "body_right",
                "id": "3cbcb52d-cb29-4403-a92a-c2afba626ff7"
              },
              {
                "type": "width",
                "value": "80%",
                "id": "7e4c2b63-cc41-4a60-bef5-f6775a4ba936"
              },
              {
                "type": "height",
                "value": "1rem",
                "id": "d55ac1d7-540e-4eb6-85cf-c5ce5c2a3772"
              }
            ]
          },
          "id": "edfdb85d-8d76-4e28-b4d5-835fc6557216"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<p data-block-key=\"p3vxp\">above this section there is a divider using the \"Strips\" image, its aligned with the right side of the window, 80% width, and has a fixed height of 1rem. the previous divider higher up the page is the same thing but on the left side of the window.</p>",
                "id": "2354d914-cf76-43a0-92cc-b979cd061db8"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 5,
                "id": "822c79cd-bfd4-4ed1-8357-1d3b4eac88d6"
              }
            ]
          },
          "id": "85b8942f-7cd5-4f5e-a695-522056db49db"
        },
        {
          "type": "divider",
          "value": {
            "image": {
              "id": 1066,
              "file": "https://assets.openstax.org/oscms-prod/media/original_images/strips.svg",
              "title": "strips",
              "height": 10,
              "width": 932,
              "created_at": "2024-07-30T08:57:15.626863-05:00"
            },
            "config": [
              {
                "type": "alignment",
                "value": "content_right",
                "id": "6e08e083-5b4b-4008-b193-1f03a4cb8b70"
              },
              {
                "type": "width",
                "value": "80%",
                "id": "30417162-4e46-44b6-9f8d-d470de366ee1"
              },
              {
                "type": "height",
                "value": "1rem",
                "id": "42af0cbc-3769-4e8f-86eb-7f80c2e2aea5"
              }
            ]
          },
          "id": "6333b79a-0ed7-45d9-8f66-720023a036f3"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<p data-block-key=\"p3vxp\">above this section is the same exact config but aligned to the content container instead of the window. see how the width applies to the container width instead of the window width, and the image is aligned with the edge of the content.</p>",
                "id": "dcf73e23-b4d2-4974-816c-2de7229ed90f"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 5,
                "id": "ae6120f1-858f-43b6-9582-7316ac088b06"
              }
            ]
          },
          "id": "a582db55-ae16-4b5e-a3b4-7c50829d4671"
        },
        {
          "type": "divider",
          "value": {
            "image": {
              "id": 1056,
              "file": "https://assets.openstax.org/oscms-prod/media/original_images/textbooks.svg",
              "title": "textbooks",
              "height": 80,
              "width": 80,
              "created_at": "2024-07-30T06:07:53.386699-05:00"
            },
            "config": [
              {
                "type": "alignment",
                "value": "content_left",
                "id": "dc0b76e0-efbc-4a6b-9a5e-5b655148479b"
              },
              {
                "type": "height",
                "value": "3rem",
                "id": "53005c8f-fa28-4ea2-ba57-96406cb75646"
              }
            ]
          },
          "id": "fdf80135-4af5-4993-a65e-72845da2b270"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<p data-block-key=\"96yz9\">above this section is a divider with a little book icon. notice how if my section doesn't have any padding, the content shows on top of the divider. this is intentional and desired in some cases. make sure if you're putting text in a section it has enough padding to not overlap the divider.</p>",
                "id": "37b48e82-9d6e-46f7-bdf3-2afbfaacff71"
              }
            ],
            "config": [
              {
                "type": "padding_bottom",
                "value": 5,
                "id": "870bf6db-b74a-4678-a8a5-5d6787c88107"
              }
            ]
          },
          "id": "f336ee10-95b5-4aa5-9450-0e6a25c99b3c"
        },
        {
          "type": "divider",
          "value": {
            "image": {
              "id": 1056,
              "file": "https://assets.openstax.org/oscms-prod/media/original_images/textbooks.svg",
              "title": "textbooks",
              "height": 80,
              "width": 80,
              "created_at": "2024-07-30T06:07:53.386699-05:00"
            },
            "config": [
              {
                "type": "alignment",
                "value": "center",
                "id": "fa812c89-f1d6-40aa-82fe-a431677a3529"
              },
              {
                "type": "height",
                "value": "3rem",
                "id": "5b4d137f-c817-438d-8c32-07f3c3a45003"
              }
            ]
          },
          "id": "0b493fbd-7193-43ca-818c-2181e05316a3"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<p data-block-key=\"vqp8a\">above this section there is a centered divider image</p>",
                "id": "1dba8200-77fb-42b0-b65a-310c6e1ba1f8"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 2,
                "id": "ad1e3772-8c64-4d5a-90a2-f129730ec665"
              }
            ]
          },
          "id": "7e66efa9-a115-4bec-989c-de8ce25d4260"
        },
        {
          "type": "divider",
          "value": {
            "image": {
              "id": 1064,
              "file": "https://assets.openstax.org/oscms-prod/media/original_images/confetti_2.svg",
              "title": "confetti 2",
              "height": 543,
              "width": 439,
              "created_at": "2024-07-30T08:24:02.848531-05:00"
            },
            "config": [
              {
                "type": "offset_horizontal",
                "value": "-100%",
                "id": "c9a26b41-ad35-4e81-8944-f5a45fce7cb1"
              },
              {
                "type": "alignment",
                "value": "content_left",
                "id": "dcb3dbc8-785b-476e-ba42-bff58596a4bc"
              }
            ]
          },
          "id": "f750104c-2167-434d-9b5b-ec68957ea59a"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<p data-block-key=\"96yz9\">above this section there is a divider with a background image of some neat shapes. its aligned with the left side of the content, but the \"offset horizontal\" config is set to -100% to move it left by the width of the image and push it into the margin.</p>",
                "id": "cdafc944-f2bd-4817-8af2-12329d3d4ec3"
              }
            ],
            "config": [
              {
                "type": "padding_bottom",
                "value": 5,
                "id": "aaee55ae-a1e6-4952-8bd7-386881ffcc0a"
              }
            ]
          },
          "id": "5a7d760a-dd16-41df-bd6a-8c221fdec3c7"
        }
      ]
    }
  }
];
