import React from 'react';
import { graphql } from 'gatsby';
import GeneralLayout from '../layouts/general';

const CaseStudyTemplate = ({ data }) => {
  const caseStudy = data.allStrapiCaseStudy.nodes[0];
  return (
    <GeneralLayout>
      <pre>{JSON.stringify(caseStudy, null, 4)}</pre>
    </GeneralLayout>
  );
};

export const query = graphql`
  query CaseStudyQuery($pagePath: String!) {
    allStrapiCaseStudy(
      filter: { Path: { eq: $pagePath }, Featured: { eq: "True" } }
    ) {
      nodes {
        id
        Path
        Style
        Title
        Client_Name
      }
    }
  }
`;

export default CaseStudyTemplate;
