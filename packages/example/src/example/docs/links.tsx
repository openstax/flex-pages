import React from 'react';
import * as UI from '@openstax/ui-components';
import { createRoute, makeScreen } from "../../core/services";
import * as allBlocks from '@openstax/flex-page-renderer/blocks/index';
import { ContentBlockRoot } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { Layout } from '../../components/Layout';
import { actions } from '../actions';

export const LinksComponent = () => {
  return <Layout>
    <UI.NavBar logo />
    <ContentBlockRoot actions={actions} blocks={allBlocks} data={sampleContent as any} />
  </Layout>;
};

export const linksScreen = createRoute({name: 'LinksComponent',
  path: '/links',
  handler: makeScreen(LinksComponent)
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
                "id": "7bc4169a-b0ad-4e52-8e1e-92e39acf90e4"
              },
              {
                "type": "text",
                "value": "<h1 data-block-key=\"t6nx6\">Links Component</h1>",
                "id": "80753358-d38f-4eda-b7ee-4d73f841cd77"
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
                "value": "<p data-block-key=\"iu0dt\"><a href=\"#/\">documentation home</a></p>",
                "id": "a6b73cb4-4606-4d6d-82ef-a7b4a97250f6"
              }
            ],
            "config": [
              {
                "type": "padding_top",
                "value": 1,
                "id": "d03b8774-96b9-48a8-841a-d1d69f0d5bb3"
              }
            ]
          },
          "id": "e5c9987b-09e1-4daa-8f3d-56d37f801435"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"36jpq\">Overview</h2><p data-block-key=\"cs4gd\">The links section displays a wall of links</p>",
                "id": "7e545b58-c7c8-4986-af47-12e611f70b86"
              }
            ],
            "config": [
              {
                "type": "padding",
                "value": 5,
                "id": "36f23849-a92a-48ab-8eef-6e312689ce3f"
              }
            ]
          },
          "id": "51b27f0a-30af-496c-8d6b-2155fa006a20"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"t6nx6\">Config</h2><p data-block-key=\"4sc9\"><b>analytics label</b>: sets the link nav field in google analytics clicks</p><p data-block-key=\"u5na\"><b>color</b>: the color of the link buttons</p><p data-block-key=\"buhkq\"></p>",
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
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h1 data-block-key=\"36jpq\">Examples</h1>",
                "id": "f411eaea-b9b8-4574-8c72-8fde5fe7c5f1"
              },
              {
                "type": "links_group",
                "value": {
                  "links": [
                    {
                      "text": "default link style",
                      "aria_label": "",
                      "target": {
                        "value": "https://openstax.org",
                        "type": "external"
                      }
                    },
                    {
                      "text": "default link style",
                      "aria_label": "",
                      "target": {
                        "value": "https://openstax.org",
                        "type": "external"
                      }
                    },
                    {
                      "text": "default link style",
                      "aria_label": "",
                      "target": {
                        "value": "https://openstax.org",
                        "type": "external"
                      }
                    },
                    {
                      "text": "default link style",
                      "aria_label": "",
                      "target": {
                        "value": "https://openstax.org",
                        "type": "external"
                      }
                    }
                  ],
                  "config": []
                },
                "id": "9f7c6c45-3311-4ea6-af98-734fe2f929af"
              },
              {
                "type": "links_group",
                "value": {
                  "links": [
                    {
                      "text": "blue link style",
                      "aria_label": "",
                      "target": {
                        "value": "https://openstax.org",
                        "type": "external"
                      }
                    },
                    {
                      "text": "blue link style",
                      "aria_label": "",
                      "target": {
                        "value": "https://openstax.org",
                        "type": "external"
                      }
                    },
                    {
                      "text": "blue link style",
                      "aria_label": "",
                      "target": {
                        "value": "https://openstax.org",
                        "type": "external"
                      }
                    },
                    {
                      "text": "blue link style",
                      "aria_label": "",
                      "target": {
                        "value": "https://openstax.org",
                        "type": "external"
                      }
                    }
                  ],
                  "config": [
                    {
                      "type": "color",
                      "value": "blue",
                      "id": "cd11bd1b-063e-493c-87c4-02171fd06392"
                    }
                  ]
                },
                "id": "0c4c7ed5-65ef-4a7d-b2ab-76e542fde3c9"
              },
              {
                "type": "links_group",
                "value": {
                  "links": [
                    {
                      "text": "deep green link style",
                      "aria_label": "",
                      "target": {
                        "value": "https://openstax.org",
                        "type": "external"
                      }
                    },
                    {
                      "text": "deep green link style",
                      "aria_label": "",
                      "target": {
                        "value": "https://openstax.org",
                        "type": "external"
                      }
                    },
                    {
                      "text": "deep green link style",
                      "aria_label": "",
                      "target": {
                        "value": "https://openstax.org",
                        "type": "external"
                      }
                    },
                    {
                      "text": "deep green link style",
                      "aria_label": "",
                      "target": {
                        "value": "https://openstax.org",
                        "type": "external"
                      }
                    }
                  ],
                  "config": [
                    {
                      "type": "color",
                      "value": "deep-green",
                      "id": "986392fe-9ab8-4c90-aeef-5ad2760349f4"
                    }
                  ]
                },
                "id": "599aa824-3481-4c8f-8dc5-64faeb140365"
              }
            ],
            "config": []
          },
          "id": "d9538f8f-fe2a-4c07-b676-d3f4d7ef65a6"
        },
        {
          "type": "hero",
          "value": {
            "content": [
              {
                "type": "links_group",
                "value": {
                  "links": [
                    {
                      "text": "also in heroes",
                      "aria_label": "",
                      "target": {
                        "value": "https://openstax.org",
                        "type": "external"
                      }
                    },
                    {
                      "text": "also in heroes",
                      "aria_label": "",
                      "target": {
                        "value": "https://openstax.org",
                        "type": "external"
                      }
                    },
                    {
                      "text": "also in heroes",
                      "aria_label": "",
                      "target": {
                        "value": "https://openstax.org",
                        "type": "external"
                      }
                    },
                    {
                      "text": "also in heroes",
                      "aria_label": "",
                      "target": {
                        "value": "https://openstax.org",
                        "type": "external"
                      }
                    }
                  ],
                  "config": []
                },
                "id": "8508dfc5-bbcf-493f-a214-929f701bffe7"
              }
            ],
            "image": {
              "id": 1044,
              "file": "https://assets.openstax.org/oscms-prod/media/original_images/OpenStax_AM.gif",
              "title": "OpenStax_AM",
              "height": 1365,
              "width": 2048,
              "created_at": "2024-07-12T14:33:51.592227-05:00"
            },
            "image_alt": "",
            "config": []
          },
          "id": "849ff6b4-cac4-4fdd-b75a-a47f1c0780ea"
        }
      ]
    }
  }
];
