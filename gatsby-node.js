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
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const pressReleases = result.data.pressReleases.edges;
  const PressReleaseTemplate = require.resolve(
    './src/templates/press-release.js'
  );
  pressReleases.forEach((release, index) => {
    createPage({
      path: `${release.node.Path}`,
      component: PressReleaseTemplate,
      context: {
        pagePath: release.node.Path,
      },
    });
  });

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
};
exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type JobLists implements Node {
      title: String
    }
  `
  createTypes(typeDefs)
}
