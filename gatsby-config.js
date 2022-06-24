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
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `@danbruegge/gatsby-plugin-stylelint`,
      options: {
        files: [`src/**/*.(s(c|a)ss|css)`],
      },
    },
    {
      // This is pointing at a branch which adjusts dependencies to work with Gatsby 3+
      // Once merged (or if a stable fork emerges) we can replace
      // https://github.com/kevinbarnett/gatsby-source-greenhouse-job-board
      resolve: 'gatsby-source-greenhouse-job-board',
      options: {
        boardToken: 'civicactions'
      },
    },
    `gatsby-plugin-node-fields`,
    `gatsby-plugin-client-side-redirect`,
    `gatsby-remark-autolink-headers`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Nunito\:300,400,600,700`, `Work Sans\:300,400,600,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-1170467-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
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
        icon: 'src/favicon-32x32.png',
      },
    },
  ],
};
