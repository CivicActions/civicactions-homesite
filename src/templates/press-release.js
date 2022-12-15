import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from "react-markdown";
import RedLayout from '../layouts/red';
import PrimaryPageCTA from "../components/primary-page-cta";
import SEO from "../components/seo";
import Hero from "../components/hero";

const PressTemplate = ({ data }) => {
  const press = data.allStrapiPressRelease.edges[0].node;
  const { Title, Body } = press;
  return (
    <RedLayout>

      <SEO
        title={Title}
        description='Press release from civicactions.com'
      />
      <Hero title={Title}/>
      <div className='single--press-releases--main'>


        <div className='inner'>
          <div className='body'>
            <ReactMarkdown className='body' children={Body} />
          </div>
        </div>
      </div>
      <PrimaryPageCTA
        title='Inspired by newsworthy work?'
        subtitle='See what we can do together.'
        primaryButtonText='EXPLORE SERVICES'
        primaryButtonLink='/services'
        secondaryButtonText='CONTRACTING INFO'
        secondaryButtonLink='/contracting'
      />



    </RedLayout>
  );
};

export const query = graphql`
query PressQuery($pagePath: String!) {
  allStrapiPressRelease(filter: { Path: { eq: $pagePath } }) {
    edges {
      node {
        Title
        Body {
          data {
            Body
          }
        }
        Date
        Path
      }
    }
  }
}

`;

export default PressTemplate;

