exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type StrapiCaseStudy implements Node {
      Cover_Image: File,
      Hero_Image: File,
      Related_Case_Studies: RelatedStudies
    }
    type StrapiCaseStudyApproach implements Node {
      Image: File
    }
    type RelatedStudies {
      Path: String
      Title: String
      Cover_Image : File
    }
    type File {
      url: String,
      alternativeText: String,
      caption: String
    }
  `
  createTypes(typeDefs);
}

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
  const {createRedirect} = actions //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions
  createRedirect(
      {
        fromPath: '/case-study/globalnet-platform-support',
        toPath: '/case-studies/globalnet-platform-support',
        isPermanent: true
      }
      );


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
