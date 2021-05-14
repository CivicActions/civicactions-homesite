import '../sass/styles.scss';
import React from 'react';
import RedLayout from '../layouts/red';
import { graphql, useStaticQuery } from 'gatsby';
import {Helmet} from "react-helmet";

const CaseStudyPage = () => {
  const data = useStaticQuery(query);
  return (
    <RedLayout>
        <Helmet>
            <title data-react-helmet="true">Case Study Landing page</title>
        </Helmet>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </RedLayout>
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

export default CaseStudyPage;
