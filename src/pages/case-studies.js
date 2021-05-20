import '../sass/styles.scss';
import React from 'react';
import RedLayout from '../layouts/red';
import { graphql, useStaticQuery } from 'gatsby';
import {Helmet} from "react-helmet";
import Hero from '../components/hero.js';

const CaseStudyPage = () => {
  const data = useStaticQuery(query);
  return (
    <RedLayout>
        <Hero
            title='Work that makes a difference'
            description='Our work impacts the daily lives of millions of people. See how we’ve helped agencies build resilient services at scale.'
        />
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
