/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `CivicActions | Open and Agile Digital Government Services`,
    titleTemplate: `%s | CivicActions`,
    description: `We use Agile and DevOps, open source software, and human-centered design to elevate government digital services.`,
    email: `contact@civicactions.com`,
    phone: `(510) 408-7510`,
    address: `3527 Mt Diablo Blvd,`,
    address_line_2: `Unit 269,`,
    city: `Lafayette, CA 94549`,
    url: `https://civicactions.com/`,
    siteUrl: `https://civicactions.com/`,
    twitterUsername: '@CivicActions',
    image: 'default-og-image.png',
  },
  pathPrefix: `/civicactions-homesite`,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-node-fields`,
    `gatsby-plugin-client-side-redirect`,
    `gatsby-remark-autolink-headers`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: 'https://civicactions.com/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `@danbruegge/gatsby-plugin-stylelint`,
      options: {
        files: [`src/**/*.(s(c|a)ss|css)`],
      },
    },
    {
      resolve: 'gatsby-source-greenhouse-job-board',
      options: {
        boardToken: 'civicactions',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-1170467-1', // Old UA ID - can be removed at some point in the future
          '5201178813', // GA4 Stream ID
          'G-Y5EFTNKK2G', // GA4 Measurement ID
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CivicActions`,
        short_name: `CA`,
        start_url: `/`,
        icon: 'src/favicon.svg',
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        queryLimit: 5000,
        // https://docs.strapi.io/dev-docs/api/rest/populate-select#components--dynamic-zones
        collectionTypes: [
          {
            singularName: 'case-study',
            queryParams: {
              publicationState: 'live', // only query published data
              //publicationState: 'preview', // Populate all fields even nested query field
              populate: {
                Title: '*',
                Client_Name: '*',
                Path: '*',
                Promoted_to_Homepage: '*',
                Related_Case_Studies: '*',
                Cover_Image: '*',
                Summary: '*',
                Hero_Image: '*',
                Stats: {
                  populate: {
                    Numerical_Element: '*',
                    Content_Element: '*'
                  },
                },
                Quote: {
                  populate: {
                    Quote: '*',
                    Source: '*'
                  },
                },
                Approach: {
                  populate: {
                    Title: '*',
                    Text: '*',
                    Image: '*'
                  },
                },
                Key_Outcome: {
                  populate: {
                    Title: '*',
                    Text: '*',
                  },
                },
                staff_profiles: '*',
                Challenge_Goal: {
                  populate: {
                    Challenge: '*',
                    Client_Goal: '*',
                  },
                },
                Expertise: {
                  populate: {
                    Expertise_Content: '*'
                  },
                },
                Tools_Technologies: {
                  populate: {
                    Tools_Technologies_Content: '*'
                  },
                },
                Sort_Order: '*',
                Service_Category: {
                  populate: {
                    Category: '*',
                  },
                },
                SEO: {
                  populate: {
                    OGTitle: '*',
                    OGDescription: '*',
                    OGImage: '*'
                  }
                }
              },
            },
          }, {
            singularName: 'offering',
            queryParams: {
              // Populate all fields even nested query field
              populate: {
                Title: '*',
                hero_button: {
                  populate: {
                    button_text: '*',
                    button_link: '*',
                  },
                },
                client_logo: {
                  populate: {
                    text: '*',
                    client_logo: '*',
                  },
                },
                Stats: {
                  populate: {
                    Numerical_Element: '*',
                    Content_Element: '*',
                  },
                },
                value_prop: {
                  populate: {
                    header_text: '*',
                    image: '*',
                    text: '*',
                  }
                },
                tabs: {
                  populate: {
                    tab_header: '*',
                    tabs_section: {
                      populate: {
                        header: '*',
                        body: '*',
                      },
                    },
                    cta_tab: {
                      populate: {
                        header: '*',
                        button_text: '*',
                        button_link: '*',
                      },
                    },
                  },
                },
                Quote: {
                  populate: {
                    Quote: '*',
                    Source: '*',
                  },
                },
                text_section: {
                  populate: {
                    Header: '*',
                    button: {
                      populate: {
                        button_text: '*',
                        button_link: '*',
                      },
                    },
                    body: '*',
                  },
                },
                FAQ_Accordion_Section: {
                  populate: {
                    list_questions: {
                      populate: {
                        questions: '*',
                        body: '*',
                      }
                    },
                  }

                },
                CTA: {
                  populate: {
                    Header: '*',
                    body: '*',
                    cta_button: {
                      populate: {
                        button_text: '*',
                        button_link: '*',
                      },
                    },
                  },
                },
                Body: '*',
                Path: '*',
                team_members: {
                  populate: {
                    Name: '*',
                    Role: '*',
                    Linkedin: '*',
                    image: '*',
                    Body: '*',
                  },
                },
                SEO: {
                  populate: {
                    OGTitle: '*',
                    OGDescription: '*',
                    OGImage: '*',
                  },
                },
              },
            }
          },
          {
            singularName: 'general',
            queryParams: {
              // Populate all fields even nested query field
              populate: {
                Title: '*',
                Path: '*',
                Hero_text: '*',
                Body: '*',
                SEO: {
                  populate: {
                    OGTitle: '*',
                    OGDescription: '*',
                    OGImage: '*',
                  },
                },
              }
            }
          },
          {
            singularName: 'press-release',
            queryParams: {
              // Populate all fields even nested query field
              populate: {
                Title: '*',
                Path: '*',
                Body: '*',
                Date: '*',
                Link: '*',
                Link_Text: '*',
                Publication: '*',
                Short_Description: '*',
                SEO: {
                  populate: {
                    OGTitle: '*',
                    OGDescription: '*',
                    OGImage: '*',
                  },
                },
              }
            }
          },
          {
            singularName: 'staff-profile',
            queryParams: {
              // Populate all fields even nested query field
              populate: {
                Path: '*',
                Name: '*',
                Personal_Pronouns: '*',
                Image: '*',
                Audio: '*',
                Pronunciation: '*',
                Role: '*',
                Location: '*',
                Quote: '*',
                Social: {
                  populate: {
                    Title: '*',
                    Url: '*'
                  },
                },
                Specialty: {
                  populate: {
                    Specialty: '*',
                  },
                },
                Body: '*',
                case_study: '*',
                Category: {
                  populate: {
                    Category: '*',
                  },
                },
                SEO: {
                  populate: {
                    OGTitle: '*',
                    OGDescription: '*',
                    OGImage: '*',
                  },
                },
              }
            }
          },
        ],
        singleTypes: []
      }
    },
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Nunito',
              variants: ['300', '400', '600', '700']
            },
            {
              family: 'Work Sans',
              variants: ['300', '400', '600', '700']
            },
          ]
        }
      }
    },
  ],
}
