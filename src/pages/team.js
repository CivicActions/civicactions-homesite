import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';

import RedLayout from '../layouts/red';
import TeaserGrid from '../components/teaser-grid.js';
import StaffQuote from '../components/staff-quote.js';
import Hero from '../components/hero.js';
import SEO from '../components/seo';
import PrimaryPageCTA from "../components/primary-page-cta";

import alanaCaseyProfilePicture from '../files/images/alanna_casey_profile.jpg';
import teamOgImage from '../../static/team-og-image.png'


import '../sass/styles.scss';

const TeamPage = () => {
  const data = useStaticQuery(graphql`
  {
    allStrapiStaffProfile(sort: {order: ASC, fields: Name}) {
      nodes {
        id
        Name
        Role
        Path
        Image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 264
                height: 264
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
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
      <SEO
        title='Team'
        description='Meet the humans of CivicActions.'
        image={teamOgImage}
      />

      <Hero
        title='Meet the humans of CivicActions'
        description='People who work with us say there’s “something magical” about our team. We are good listeners, strategic thinkers, honest communicators, and problem solvers. (We’re also cheerful and kind, which is a nice bonus.) Let’s get to know each other!'
      />

      <section className='team--filter-btns-section'>
        <h2 className='visually-hidden'>Team filters by role</h2>
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
        quote='“My teammates are brilliant innovators, high performers, and conscientious human beings. Together we’re working to improve lives.”'
        name='Alanna Casey'
        role='Technical Writer'
        img={alanaCaseyProfilePicture}
        alt='Headshot of Alanna Casey'
      />

      <PrimaryPageCTA
        title='Let’s build a public success story.'
        subtitle='Get in touch to start.'
      />

    </RedLayout>
  );
};

const TeamTeasers = ({ team }) => {
  return team.map((person) => {
    const { id, Path, Name, Role, Image } = person;
    return <TeaserGrid key={id} image={Image} name={Name} link={Path} title={Role} />;
  });
};

const FilterButtons = ({ team, parentCallback, filterState }) => {
  // const roles = [...new Set(team.map((item) => item.Category.map((category) => category.Category)))];

  const category = [
    { id: 1, value: 'Leadership', name: 'Leadership' },
    { id: 2, value: 'Growth & Strategy', name: 'Growth_Strategy' },
    { id: 3, value: 'People & Operations', name: 'People_Operations' },
    { id: 4, value: 'Product & Design', name: 'Product_Design' },
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
