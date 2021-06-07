import '../sass/styles.scss';
import React, { useState } from 'react';
import RedLayout from '../layouts/red';
import TeaserGrid from '../components/teaser-grid.js';
import StaffQuote from '../components/staff-quote.js';
import Hero from '../components/hero.js';
import { graphql, useStaticQuery } from 'gatsby';
import alanaCaseyProfilePicture from '../files/images/alanna_casey_profile.jpg';
import { Helmet } from "react-helmet";

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
              gatsbyImageData(width: 264, height: 264, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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
      console.log(e);

    if (e.target.textContent !== 'undefined') {
      if (filterState === e.target.textContent) {
        // The button was already selected.
        setFilterState(null);
      } else {
        setFilterState(e.target.textContent);
      }
    }
  };
  console.log(filterState);
  let team;
  if (filterState != null) {
      team = teamDataNodes.filter((person) => {
          let category = person.Category.map((type) => type.Category);
          console.log(category);
          // For each case study, loop through the selected filters and only
          // return results that match the selected categories.
          for (let filter of filterState) {
              if (category === filter) {
                  return true
              }
          }
      });
    team = teamDataNodes.filter((person) => person.Category.map((category) => category.Category === filterState));
      console.log(team);
  } else {
    team = teamDataNodes;
  }

  return (
    <RedLayout>
      <Helmet>
        <title data-react-helmet="true">Civicactions Team Member Page</title>
      </Helmet>
      <Hero
        title="You've never met a team like this one"
        description='We are leaders in technology, design, and strategy for
                government digital services. We combine our diverse expertise
                and backgrounds to bring value to our customers and each other.'
      />

      <section className="team--filter-btns-section">
        <div className="inner">
          <FilterButtons parentCallback={callback} team={teamDataNodes} filterState={filterState} />
        </div>
      </section>

      <section className="team--staff-teasers-grid-section">
        <div className="inner">
          <div className="section__teaser-grid">
            <TeamTeasers team={team} />
          </div>
        </div>
      </section>

      <StaffQuote
        quote="My teammates are brilliant innovators, high performers, and conscientious human beings. Together we’re working to improve lives."
        name="Alanna Casey"
        role="Technical Writer"
        img={alanaCaseyProfilePicture}
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
      {id: 1, value: 'Leadership', name: 'Leadership'},
      {id: 2, value: 'Growth Strategy', name: 'Growth_Strategy'},
      {id: 3, value: 'People Operations', name: 'Poeple_Operations'},
      {id: 4, value: 'Product Design', name: 'Product_Design'},
      {id: 5, value: 'Engineering', name: 'Engineering'},
      {id: 6, value: 'Client Services', name: 'Client_Services'},
  ]
  return category.map((role, index) => {
    const selected = role.name === filterState ? true : false;
    return (
      <button
        key={index}
        className={selected ? 'team-filter-btn selected' : 'team-filter-btn'}
        onClick={(e) => {
          parentCallback(e);
        }}
      >
        {role.value}
      </button>
    );
  });
};

export default TeamPage;
