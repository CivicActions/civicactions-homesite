import '../sass/styles.scss';
import React, { useState } from 'react';
import RedLayout from '../layouts/red';
import TeaserGrid from '../components/teaser-grid.js';
import StaffQuote from '../components/staff-quote.js';
import Hero from '../components/hero.js';
import { graphql, useStaticQuery } from 'gatsby';
import alanaCaseyProfilePicture from '../files/images/alanna_casey_profile.jpg';
import LinkButton from '../components/link-button';
import SEO from '../components/seo';
import PrimaryPageCTA from "../components/primary-page-cta";

const TeamPage = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiStaffProfile {
        nodes {
          Name
          Role
          Path
          Image {
            childImageSharp {
              gatsbyImageData(
                width: 264
                height: 264
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          Category {
            Category
          }
        }
      }
    }
  `);

  const teamDataNodes = data.allStrapiStaffProfile.nodes;
  const [filterState, setFilterState] = useState(null);

  const callback = (e) => {
    if (e.target.name !== 'undefined') {
      if (filterState === e.target.name) {
        // The button was already selected.
        setFilterState(null);
      } else {
        setFilterState(e.target.name);
      }
    }
  };

  let team;
  if (filterState != null) {
    team = teamDataNodes.filter((person) => {
      const checkedCategory = person.Category.map((member) => member.Category);
      console.log(checkedCategory);
      if (!checkedCategory.indexOf(filterState)) {
        return true;
      }
      if (checkedCategory.includes(filterState)) {
        return true;
      }
    });
  } else {
    team = teamDataNodes;
  }
  return (
    <RedLayout>
      <SEO title='Team' description='Meet the humans of CivicActions.' />
      <section className='careers--hero-section hero-component'>
        <div className='inner'>
          <h1>Work for the public good.</h1>
          <p className='body'>
            Join our team of talented and open-minded people working to build
            modern and accessible government services for all.
          </p>
          <LinkButton src='/careers#open-positions' text='See open positions' />
        </div>
      </section>

      <section className='team--filter-btns-section'>
        <div className='inner'>
          <FilterButtons
            parentCallback={callback}
            team={teamDataNodes}
            filterState={filterState}
          />
        </div>
      </section>

      <section className='team--staff-teasers-grid-section'>
        <div className='inner'>
          <div className='section__teaser-grid'>
            <TeamTeasers team={team} />
          </div>
        </div>
      </section>

      <StaffQuote
        quote='My teammates are brilliant innovators, high performers, and conscientious human beings. Together we’re working to improve lives.'
        name='Alanna Casey'
        role='Technical Writer'
        img={alanaCaseyProfilePicture}
      />
      <PrimaryPageCTA
          title='Let’s build a public success story.'
          subtitle='Get in touch to start.'
      />
    </RedLayout>
  );
};

const TeamTeasers = ({ team }) => {
  return team.map((person, index) => {
    const { Path, Name, Role, Image } = person;
    return <TeaserGrid image={Image} name={Name} link={Path} title={Role} />;
  });
};

const FilterButtons = ({ team, parentCallback, filterState }) => {
  // const roles = [...new Set(team.map((item) => item.Category.map((category) => category.Category)))];

  const category = [
    { id: 1, value: 'Leadership', name: 'Leadership' },
    { id: 2, value: 'Growth Strategy', name: 'Growth_Strategy' },
    { id: 3, value: 'People Operations', name: 'People_Operations' },
    { id: 4, value: 'Product Design', name: 'Product_Design' },
    { id: 5, value: 'Engineering', name: 'Engineering' },
    { id: 6, value: 'Client Services', name: 'Client_Services' },
  ];
  return category.map((role, index) => {
    const selected = role.name === filterState ? true : false;
    return (
      <button
        key={index}
        className={selected ? 'team-filter-btn selected' : 'team-filter-btn'}
        onClick={(e) => {
          parentCallback(e);
        }}
        name={role.name}>
        {role.value}
      </button>
    );
  });
};

export default TeamPage;
