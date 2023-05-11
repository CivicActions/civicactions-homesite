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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
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
    `gatsby-plugin-node-fields`,
    `gatsby-plugin-client-side-redirect`,
    `gatsby-remark-autolink-headers`,
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Nunito',
              variants: ['300', '400', '600', '700'],
            },
            {
              family: 'Work Sans',
              variants: ['300', '400', '600', '700'],
            },
          ],
        },
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
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://civicactions-content.civicactions-content.app.civicactions.net`,
        queryLimit: 1000,
        contentTypes: [
          `case-study`,
          `offering`,
          `press`,
          `general`,
          `press-release`,
          `staff-profile`,
        ],
        singleTypes: [],
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
  ],
};
