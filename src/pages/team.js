import '../sass/styles.scss';
import React, { useState } from 'react';
import RedLayout from '../layouts/red';
import TeaserGrid from '../components/teaser-grid.js';
import StaffQuote from '../components/staff-quote.js';
import Hero from '../components/hero.js';
import { graphql, useStaticQuery } from 'gatsby';
import alanaCaseyProfilePicture from '../files/images/alanna_casey_profile.jpg';
import {Helmet} from "react-helmet";

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
        }
      }
    }
  `);

  const teamDataNodes = data.allStrapiStaffProfile.nodes;
  const [filterState, setFilterState] = useState(null);

  const callback = (e) => {
    if (e.target.textContent !== 'undefined') {
      if (filterState === e.target.textContent) {
        // The button was already selected.
        setFilterState(null);
      } else {
        setFilterState(e.target.textContent);
      }
    }
  };
  let team;
  if (filterState) {
    team = teamDataNodes.filter((person) => person.Role === filterState);
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
          <FilterButtons
            parentCallback={callback}
            team={teamDataNodes}
            filterState={filterState}
          />
        </div>
      </section>

      <section className="team--staff-teasers-grid-section">
        <div class="inner">
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
  const roles = [...new Set(team.map((item) => item.Role))];
  return roles.map((role, index) => {
    const selected = role === filterState ? true : false;
    return (
      <button
        key={index}
        className={selected ? 'team-filter-btn selected' : 'team-filter-btn'}
        onClick={(e) => {
          parentCallback(e);
        }}
      >
        {role}
      </button>
    );
  });
};

export default TeamPage;
