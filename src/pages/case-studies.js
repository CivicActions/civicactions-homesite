import '../sass/styles.scss';
import React from 'react';
import GeneralLayout from '../layouts/general';
import { graphql, useStaticQuery } from 'gatsby';

const CaseStudiesPage = () => {
  const data = useStaticQuery(query);
  return (
    <GeneralLayout>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </GeneralLayout>
  );
};

export const query = graphql`
  {
    allStrapiCaseStudy {
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

export default CaseStudiesPage;
