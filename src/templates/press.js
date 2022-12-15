import '../sass/styles.scss';
import React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';
import RedLayout from '../layouts/red';
import Hero from '../components/hero';
import SEO from '../components/seo';
import PrimaryPageCTA from "../components/primary-page-cta";
import PressReleaseGrid from '../components/press-release-grid.js';
import Pagination from "../components/pagination.js";


const Press = ({ data, location, pageContext }) => {
  const pressReleases = data.press.edges;
  return (
    <RedLayout>
      <SEO
        title='Press'
        description="This work is worth talking about. Learn how we've been elevating government digital services."
      />
      <Hero
        title='This work is worth talking about.'
        description='When government invests in smart technology and thoughtful design of services, millions of people stand to benefit for years to come. We are honored to be part of this work.'
      />
      <section className='press-releases'>
        <div className='inner'>

          {pressReleases.map(({ node }) => {
              return (
            <PressReleaseGrid
              path={node.Path}
              date={node.Date}
              title={node.Title}
              description={node.Short_Description}
              id={node.id} />
                )


          })}
          <Pagination pageContext={pageContext} />
        </div>

      </section>
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

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    press: allStrapiPressRelease(
      sort: {order: DESC, fields: Date}
      limit: $limit
      skip: $skip
    ) {
        edges {
          node {
            Title
            Path
            Date
            id
          }
        }
    }
  }
`;
export default Press;
