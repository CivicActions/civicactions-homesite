/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require("path")
const { paginate } = require('gatsby-awesome-pagination')

exports.onPreBuild = () => {
  // This writes a CSS file for use with our external Greenhouse jobs pages.
  // A custom prebuild step is needed so that we get a fixed URL to point to.
  const sass = require('sass');
  var fs = require('fs'); 
  const result = sass.renderSync({file: "src/sass/greenhouse.scss"});
  fs.writeFileSync('static/greenhouse.css', result.css.toString());
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
    {
      pressReleases: allStrapiPressRelease(sort: {Date: DESC}) {
        edges {
          node {
            Path
          }
        }
      }
      caseStudies: allStrapiCaseStudy {
        edges {
          node {
            Path
          }
        }
      }
      staffProfiles: allStrapiStaffProfile {
        edges {
          node {
            Path
          }
        }
      }
      offering: allStrapiOffering {
        edges {
          node {
            Path
          }
        }
      }
      general: allStrapiGeneral {
        edges {
          node {
            Path
          }
        }
      }
    }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const { createRedirect } = actions
  createRedirect({
    fromPath: "/case-study",
    toPath: "/case-studies",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/case-study/cms-design-challenge-mvp",
    toPath: "/case-studies/cms-design-challenge-mvp",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/case-study/va-cms-modernization",
    toPath: "/case-studies/va-cms-modernization",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/case-study/digital-democracy",
    toPath: "/case-studies",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/case-study/globalnet",
    toPath: "/case-studies/globalnet-platform-support",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/case-study/eatfresh",
    toPath: "/case-studies",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/case-study/fcc",
    toPath: "/case-studies/fcc-website-modernization",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/case-study/hhs",
    toPath: "/case-studies",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/case-study/msf",
    toPath: "/case-studies",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/case-study/usva",
    toPath: "/case-studies",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/case-study/cdt-foss",
    toPath: "/case-studies",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/case-study/la-business-portal",
    toPath: "/case-studies",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/case-study/lincs",
    toPath: "/case-studies/dept-of-education-system-lifecycle-development-management",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/case-study/mta",
    toPath: "/case-studies/nyc-metro-transit-digital-clocks",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/values",
    toPath: "/",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/communities",
    toPath: "/",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/approach",
    toPath: "/",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/talks",
    toPath: "https://medium.com/civicactions",
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: "/dkan",
    toPath: "https://getdkan.org/",
    isPermanent: true,
    redirectInBrowser: true,
  })

  const caseStudies = result.data.caseStudies.edges;
  const CaseStudyTemplate = require.resolve('./src/templates/case-study.js');
  caseStudies.forEach((caseStudy, index) => {
    createPage({
      path: `${caseStudy.node.Path}`,
      component: CaseStudyTemplate,
      context: {
        pagePath: caseStudy.node.Path,
      },
    });

  });

  const pressReleases = result.data.pressReleases.edges;
  const PressTemplate = require.resolve('./src/templates/press-release.js');
  pressReleases.forEach((pressRelease, index) => {
    createPage({
      path: `${pressRelease.node.Path}`,
      component: PressTemplate,
      context: {
        pagePath: pressRelease.node.Path,
      },
    });

  });
  // Create pagination
  paginate({
    createPage,
    items: pressReleases,
    itemsPerPage: 5,
    pathPrefix: '/press',
    component: path.resolve('src/templates/press.js')
  })

  /* const staffProfiles = result.data.staffProfiles.edges;
  const StaffProfileTemplate = require.resolve(
    './src/templates/staff-profile.js'
  );
  staffProfiles.forEach((profile, index) => {
    createPage({
      path: `${profile.node.Path}`,
      component: StaffProfileTemplate,
      context: {
        pagePath: profile.node.Path,
      },
    });
  }); */

  const generalPages = result.data.general.edges;
  const GeneralTemplate = require.resolve(
    './src/templates/general.js'
  );
  generalPages.forEach((generals, index) => {
    createPage({
      path: `${generals.node.Path}`,
      component: GeneralTemplate,
      context: {
        pagePath: generals.node.Path,
      },
    });
  });

  const offerings = result.data.offering.edges;
  const OfferingTemplate = require.resolve('./src/templates/offering.js');
  offerings.forEach((offering, index) => {
    createPage({
      path: `${offering.node.Path}`,
      component: OfferingTemplate,
      context: {
        pagePath: offering.node.Path,
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type FeedJobLists implements Node {
      title: String,
      link: String
    }
    type GreenhouseJob implements Node {
      title: String,
      absolute_url: String
    }
    type TABS_SECTION {
      header: String
      body: String
    }
  `

  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    STRAPI_CASE_STUDY: {
      Related_Case_Studies: {
        type: "[STRAPI_CASE_STUDY]",
        resolve: (source, args, context, info) => {
          if (source.Related_Case_Studies___NODE?.length > 0) {
            return source.Related_Case_Studies___NODE.map((id) => {
              return context.nodeModel.getNodeById({
                id,
                type: "STRAPI_CASE_STUDY"
              })
            })
          } else {
            return []
          }
        }
      }
    },
    STRAPI__COMPONENT_OFFERING_TABS_SECTIONS: {
      tabs_section: {
        type: "[TABS_SECTION]",
        resolve: (source, args, context, info) => {
          if (source.tabs_section___NODE?.length > 0) {
            return source.tabs_section___NODE.map((id) => {
              return context.nodeModel.getNodeById({
                id,
                type: "TABS_SECTION"
              })
            })
          } else {
            return []
          }
        }
      }
    }
  })
}

exports.onPostBuild = async ({ graphql }) => {
  const path = require("path")
  const fs = require("fs").promises
  const { data } = await graphql(`
    {
      pages: allSitePage {
        nodes {
          path
        }
      }
    }
  `)

  return fs.writeFile(
    path.resolve(__dirname, "pages.txt"),
    data.pages.nodes.map(node => node.path).join("\n")
  )
}