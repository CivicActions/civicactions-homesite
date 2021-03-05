import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

const CaseStudyTemplate = ({ data }) => {
  const caseStudy = data.allStrapiCaseStudy.nodes[0];
  return <pre>{JSON.stringify(caseStudy, null, 4)}</pre>;
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
