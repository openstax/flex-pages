import React from 'react';
import * as UI from '@openstax/ui-components';
import { createRoute, makeScreen } from "../core/services";
import * as allBlocks from '@openstax/flex-page-renderer/blocks/index';
import { ContentBlockRoot } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { useQuery } from '../routing/useQuery';
import { Layout } from '../components/Layout';

export const Home = () => {
  const query = useQuery();
  const page = React.useMemo(() =>
    typeof query.page === 'string' ? JSON.parse(query.page) : undefined
  , [query.page]);

  return <Layout>
    <UI.NavBar logo />
    <ContentBlockRoot blocks={allBlocks} data={(page ? [page] : sampleContent) as any} />
  </Layout>;
};

export const homeScreen = createRoute({name: 'HomeScreen',
  path: '/',
  handler: makeScreen(Home)
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
                "value": "<h1 data-block-key=\"0344r\">FlexPage Documentation Portal</h1>",
                "id": "7e9d53b4-44a9-432e-a09e-d8eaaaedea8e"
              },
              {
                "type": "cta_block",
                "value": {
                  "actions": [
                    {
                      "text": "Components",
                      "ariaLabel": "",
                      "target": {
                        "value": "#components",
                        "type": "anchor"
                      },
                      "config": []
                    }
                  ],
                  "config": []
                },
                "id": "21e808f9-32aa-4592-a695-938c5331da77"
              }
            ],
            "config": [
              {
                "type": "background_color",
                "value": "#0dc0dc",
                "id": "2fe488fa-cc47-4734-947f-f501886a25c5"
              },
              {
                "type": "padding",
                "value": 7,
                "id": "8bc583cf-cae4-4070-8c88-f988f8d9858d"
              }
            ]
          },
          "id": "62c42751-556b-4d81-bd09-07b909cff0bd"
        },
        {
          "type": "hero",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"npzc6\">They&#x27;re flexible!</h2><p data-block-key=\"f5993\">FlexPages can be used to create pages on openstax.org without a developer. There is one editing interface that is used for any page, and no special code is necessary for your new page or content edits to be published.</p><p data-block-key=\"5crhr\"><a href=\"https://staging.openstax.org/how-to-use-the-flexpage-editor\">how to use the FlexPage editor</a></p>",
                "id": "b42543b4-0671-42bc-8850-0c896fa69ef8"
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
            "config": [
              {
                "type": "padding",
                "value": 4,
                "id": "62126071-427f-4306-9ac6-ade1d12ec32e"
              }
            ]
          },
          "id": "fc64d035-34fb-49c6-a3ec-74fe8dbc4c17"
        },
        {
          "type": "columns",
          "value": {
            "leftContent": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"0344r\">Meet the components</h2><p data-block-key=\"cnqgr\">FlexPages are a little bit more limited than a drag-and-drop page builder product. FlexPages use a discrete set of content and design components that accept specific data and are implemented explicitly on the website.</p><p data-block-key=\"3m756\">The components are flexible to use, but with specific structure and design to guarantee accessibility, functionality, and responsive design.</p>",
                "id": "b658b242-d49a-48b5-9668-76654bdd57fd"
              }
            ],
            "rightContent": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"0344r\">Meet the components</h2><p data-block-key=\"cnqgr\">FlexPages are a little bit more limited than a drag-and-drop page builder product. FlexPages use a discrete set of content and design components that accept specific data and are implemented explicitly on the website.</p><p data-block-key=\"3m756\">The components are flexible to use, but with specific structure and design to guarantee accessibility, functionality, and responsive design.</p>",
                "id": "b658b242-d49a-48b5-9668-76654bdd57fd"
              }
            ],
            "config": [
              {
                "type": "gap",
                "value": "1rem",
                "id": "d8b713ec-0744-4f3d-9443-4e4e38f3d993"
              },
              {
                "type": "left_size",
                "value": "20rem",
                "id": "d8b713ec-0744-4f3d-9443-4e4e38f3d993"
              }
            ]
          },
          "id": "7dd11353-b405-4b4b-92fb-e5948d1a5a1g"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"0344r\">Meet the components</h2><p data-block-key=\"cnqgr\">FlexPages are a little bit more limited than a drag-and-drop page builder product. FlexPages use a discrete set of content and design components that accept specific data and are implemented explicitly on the website.</p><p data-block-key=\"3m756\">The components are flexible to use, but with specific structure and design to guarantee accessibility, functionality, and responsive design.</p>",
                "id": "b658b242-d49a-48b5-9668-76654bdd57fd"
              }
            ],
            "config": [
              {
                "type": "id",
                "value": "components",
                "id": "d8b713ec-0744-4f3d-9443-4e4e38f3d993"
              }
            ]
          },
          "id": "7dd11353-b405-4b4b-92fb-e5948d1a5a1d"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "cards_block",
                "value": {
                  "cards": [
                    {
                      "text": "<h3 data-block-key=\"q184j\">Layouts</h3><p data-block-key=\"crdkf\">Layouts define the overall structure of a page, including the top nav, header, footer, default content width, and other base styles.</p>",
                      "ctaBlock": []
                    }
                  ],
                  "config": [
                    {
                      "type": "card_size",
                      "value": 63,
                      "id": "d99d08ff-7143-435d-a7a4-fffba3229de1"
                    }
                  ]
                },
                "id": "a2c0fa28-8a3a-43ad-b590-4cb984cf693d"
              },
              {
                "type": "links_group",
                "value": {
                  "links": [
                    {
                      "text": "Default",
                      "ariaLabel": "",
                      "target": {
                        "value": "https://staging.openstax.org/flexpage-default-layout",
                        "type": "external"
                      }
                    },
                    {
                      "text": "Landing Page",
                      "ariaLabel": "",
                      "target": {
                        "value": "https://staging.openstax.org/flexpage-landing-page-layout",
                        "type": "external"
                      }
                    }
                  ],
                  "config": []
                },
                "id": "3c71c06c-ba95-488e-8c72-b120f166ca45"
              }
            ],
            "config": [
              {
                "type": "text_alignment",
                "value": "center",
                "id": "d1173e86-8b81-4b52-8d1c-b64efc630950"
              },
              {
                "type": "padding",
                "value": 4,
                "id": "b5324de5-f516-4a79-9244-78f8d979bcfa"
              },
              {
                "type": "id",
                "value": "layouts",
                "id": "215ba275-a727-4b9e-b371-8c42a776e73f"
              }
            ]
          },
          "id": "b70123ce-3c85-4b5c-8ae2-bdd8a0c630ab"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "cards_block",
                "value": {
                  "cards": [
                    {
                      "text": "<h3 data-block-key=\"re4k8\">Page Structure</h3><p data-block-key=\"71esi\">These components are used to organize the overall page structure and non-content visual effects.</p>",
                      "ctaBlock": []
                    }
                  ],
                  "config": [
                    {
                      "type": "card_size",
                      "value": 63,
                      "id": "e2f06e0d-4a65-4cdc-8705-be20520a3c9b"
                    }
                  ]
                },
                "id": "fd1cd2aa-f912-4f1c-8b93-d43ef3a11f9e"
              },
              {
                "type": "links_group",
                "value": {
                  "links": [
                    {
                      "text": "Section",
                      "ariaLabel": "Section Component",
                      "target": {
                        "value": "https://staging.openstax.org/flexpage-section-component",
                        "type": "external"
                      }
                    },
                    {
                      "text": "Hero",
                      "ariaLabel": "",
                      "target": {
                        "value": "https://staging.openstax.org/flexpage-hero-component",
                        "type": "external"
                      }
                    },
                    {
                      "text": "Divider",
                      "ariaLabel": "Divider Component",
                      "target": {
                        "value": "https://staging.openstax.org/flexpage-divider-component",
                        "type": "external"
                      }
                    }
                  ],
                  "config": [
                    {
                      "type": "color",
                      "value": "blue",
                      "id": "6d079c8e-767a-435f-a42d-a86a4c199908"
                    }
                  ]
                },
                "id": "3f48e200-d4cc-4e4c-b1f8-ba071c5ee78e"
              }
            ],
            "config": [
              {
                "type": "text_alignment",
                "value": "center",
                "id": "d233c64d-63b8-4f0d-a28e-c8a291a7bbe1"
              },
              {
                "type": "padding",
                "value": 4,
                "id": "a4122776-3b22-4ca7-a531-59195ac08241"
              },
              {
                "type": "id",
                "value": "page-structure",
                "id": "ef61f57a-c7eb-485a-93e6-71ca34c6a306"
              }
            ]
          },
          "id": "2ffd92df-fc9f-47d5-a35c-67f0083d0f83"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "cards_block",
                "value": {
                  "cards": [
                    {
                      "text": "<h3 data-block-key=\"uemmh\">Page Content</h3><p data-block-key=\"abfbv\">Heroes and Sections can contain content, these are the components that can be used in content areas.</p>",
                      "ctaBlock": []
                    }
                  ],
                  "config": [
                    {
                      "type": "card_size",
                      "value": 63,
                      "id": "deb196f2-ff61-40d4-b56e-99b3069e8559"
                    }
                  ]
                },
                "id": "d56ca947-28ba-470b-81ce-14f0ee29ba1a"
              },
              {
                "type": "links_group",
                "value": {
                  "links": [
                    {
                      "text": "Text",
                      "ariaLabel": "Text Component",
                      "target": {
                        "value": "https://staging.openstax.org/flexpage-text-component",
                        "type": "external"
                      }
                    },
                    {
                      "text": "Cards Block",
                      "ariaLabel": "Cards Block Component",
                      "target": {
                        "value": "https://staging.openstax.org/flexpage-cards-block-component",
                        "type": "external"
                      }
                    },
                    {
                      "text": "Calls to Action",
                      "ariaLabel": "Calls to Action Component",
                      "target": {
                        "value": "https://staging.openstax.org/flexpage-ctas-component",
                        "type": "external"
                      }
                    },
                    {
                      "text": "Links Group",
                      "ariaLabel": "Links Group Component",
                      "target": {
                        "value": "https://staging.openstax.org/flexpage-links-component",
                        "type": "external"
                      }
                    },
                    {
                      "text": "Quote",
                      "ariaLabel": "Quote Component",
                      "target": {
                        "value": "https://staging.openstax.org/flexpage-quote-component",
                        "type": "external"
                      }
                    },
                    {
                      "text": "Frequently Asked Questions",
                      "ariaLabel": "Frequently Asked Questions Component",
                      "target": {
                        "value": "https://staging.openstax.org/flexpage-faq-component",
                        "type": "external"
                      }
                    }
                  ],
                  "config": [
                    {
                      "type": "color",
                      "value": "deep-green",
                      "id": "6e912a0f-f694-431f-9a5a-a6a498aafae0"
                    }
                  ]
                },
                "id": "4fefad71-38c6-4b37-ac38-568b9fb21c9f"
              }
            ],
            "config": [
              {
                "type": "text_alignment",
                "value": "center",
                "id": "830526d3-83aa-4c91-8b27-b73d9212015c"
              },
              {
                "type": "padding",
                "value": 4,
                "id": "bba6cbb1-71ea-4e88-9a31-08b3dac9e2fb"
              },
              {
                "type": "id",
                "value": "page-content",
                "id": "31b6a921-b141-4985-bf18-d3e588d36801"
              }
            ]
          },
          "id": "7170a476-0125-4a8f-bd47-2511901621e1"
        },
        {
          "type": "hero",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"fcyvo\">Escape Hatch</h2><p data-block-key=\"3lc8u\">There are HTML components available under the page body and section contents for when an escape hatch is really needed. There have been situations where we&#x27;ve written entire pages in HTML components. Less drastically, its useful for an embedded item like a video.</p><p data-block-key=\"ecbgv\"><a href=\"/flexpage-html-blocks\">html block examples</a></p>",
                "id": "6b34e72a-cb09-449f-b82f-8366ac52b8b6"
              }
            ],
            "image": {
              "id": 985,
              "file": "https://assets.openstax.org/oscms-prod/media/original_images/computer_science_UYWuYOg.png",
              "title": "computer science",
              "height": 612,
              "width": 612,
              "created_at": "2024-03-15T11:08:11.032348-05:00"
            },
            "image_alt": "",
            "config": []
          },
          "id": "f8020f84-2982-43f3-b57a-7787c9bb156c"
        },
        {
          "type": "section",
          "value": {
            "content": [
              {
                "type": "text",
                "value": "<h2 data-block-key=\"i8q9n\">This is a FlexPage!</h2><p data-block-key=\"cntqk\">The FlexPage component system is indented to provide all the building blocks you need to publish content pages on openstax.org, but it might be missing something! If you have a new component, config option, or design variant you think would enhance the system, contact your friendly neighborhood CMS developer!</p>",
                "id": "6379883e-c4bb-4c28-beeb-321c415ed531"
              },
              {
                "type": "cta_block",
                "value": {
                  "actions": [
                    {
                      "text": "FlexPage Issue Backlog",
                      "ariaLabel": "",
                      "target": {
                        "value": "https://openstax.atlassian.net/jira/software/c/projects/DISCO/issues/?filter=10023",
                        "type": "external"
                      },
                      "config": [
                        {
                          "type": "style",
                          "value": "blue_outline",
                          "id": "5a4a0877-c0c8-4202-9ad3-5f8b6adad2e1"
                        }
                      ]
                    },
                    {
                      "text": "Feature Request",
                      "ariaLabel": "",
                      "target": {
                        "value": "https://openstax.atlassian.net/secure/CreateIssueDetails!init.jspa?pid=10001&issuetype=10005&components=10003&labels=FlexPages&priority=4",
                        "type": "external"
                      },
                      "config": [
                        {
                          "type": "style",
                          "value": "deep_green_outline",
                          "id": "a31ba6eb-c0be-42f4-900b-400214cd20d8"
                        }
                      ]
                    }
                  ],
                  "config": []
                },
                "id": "9e3b37bf-6d34-458f-8c84-e37f2ffc34d2"
              }
            ],
            "config": [
              {
                "type": "padding_bottom",
                "value": 5,
                "id": "fd8551ce-3ee1-4283-8c86-5061a725bd72"
              },
              {
                "type": "text_alignment",
                "value": "center",
                "id": "4e2c8398-7711-4a70-8f5d-515ef8c2686a"
              }
            ]
          },
          "id": "e58396d7-ea4c-4b51-a1a6-084606d1d58e"
        }
      ]
    }
  }
];
