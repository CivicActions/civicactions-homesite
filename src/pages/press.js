import '../sass/styles.scss';
import React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';
import RedLayout from '../layouts/red';
import Hero from '../components/hero';
import SEO from '../components/seo';
import PrimaryPageCTA from "../components/primary-page-cta";
import PressReleaseGrid from '../components/press-release-grid.js';


const Press = () => {
  // Will need to add new field Short_Description
  const data = useStaticQuery(graphql`
    {
      allStrapiPressRelease(sort: {order: DESC, fields: Date}) {
        nodes {
          Title
          Path
          Body
          Date
        }
      }
    }
  `);

  const pressReleases = data.allStrapiPressRelease.nodes;

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
      <section className='temp-press-releases--main-section'>
        <div className='inner'>
          <PressTeasers presses={pressReleases} />
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
    const { Path, Date, Title, Body } = press;
    // Will need to update the description field to new field Short_Description
    return <PressReleaseGrid path={Path} date={Date} title={Title} description={Body} />;
  });
};
export default Press;
