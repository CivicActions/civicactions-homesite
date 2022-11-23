import '../sass/styles.scss';
import React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';
import RedLayout from '../layouts/red';
import Hero from '../components/hero';
import SEO from '../components/seo';
import PrimaryPageCTA from "../components/primary-page-cta";
import PressReleaseGrid from '../components/press-release-grid.js';
import ReactMarkdown from "react-markdown";


const Pressold = () => {
  const data = useStaticQuery(query);

  const pressReleases = data.allStrapiPressRelease.edges;
  console.log(pressReleases)
  return (
    <RedLayout>
      <SEO
        title='Pressold'
        description="This work is worth talking about. Learn how we've been elevating government digital services."
      />
      <Hero
        title='This work is worth talking about.'
        description='When government invests in smart technology and thoughtful design of services, millions of people stand to benefit for years to come. We are honored to be part of this work.'
      />
      <section className='press-releases'>
        <div className='inner'>

          {pressReleases.map(({ node }) => {
            console.log(node['id']);
            console.log(node.Title);
              return (
                <div>node['id']</div>
                )

            // <div>{node.Title}</div>
            // <div className='press-release--item' key={node.id}>
            //   <span>New Release: {node.Date}</span>
            //   <h2>{node.Title}</h2>
            //   <ReactMarkdown className='body' children={node.Short_Description} />
            //   <p className='body'>Full Story: <Link to={node.Path}>{node.Title}</Link></p>
            // </div>
            // <div key={node.id}>{node.title}</div>
          })}

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
const PressTeasers = ({ presses }) => {
  return presses.map((press) => {
    const { Path, Date, Title, Short_Description, id } = press;
    // Will need to update the description field to new field Short_Description
    return <PressReleaseGrid path={Path} date={Date} title={Title} description={Short_Description} id={id} />;
  });
};
export const query = graphql`
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
            Short_Description
            id
          }
        }
    }
  }
`;
export default Pressold;
