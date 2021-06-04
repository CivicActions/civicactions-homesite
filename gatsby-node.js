exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        pressReleases: allStrapiPressRelease {
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
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }


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

  const staffProfiles = result.data.staffProfiles.edges;
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
exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type FeedJobLists implements Node {
      title: String,
      link: String
    }
  `
  createTypes(typeDefs)
}
