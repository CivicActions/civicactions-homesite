import React from 'react';
import { graphql } from 'gatsby';
import GeneralLayout from '../layouts/general';

const PressReleaseTemplate = ({ data }) => {
  const pressRelease = data.allStrapiPressRelease.nodes[0];
  return (
    <GeneralLayout>
      <pre>{JSON.stringify(pressRelease, null, 4)}</pre>
    </GeneralLayout>
  );
};

export const query = graphql`
  query PressReleaseQuery($pagePath: String!) {
    allStrapiPressRelease(
      filter: { Path: { eq: $pagePath } }
      sort: { fields: Date, order: DESC }
    ) {
      nodes {
        Body
        Date
        Link
        Link_Text
        Path
        Publication
        Title
      }
    }
  }
`;

export default PressReleaseTemplate;
