import '../sass/styles.scss';
import React, { useState } from 'react';
import GeneralLayout from '../layouts/general';
import TeaserGrid from '../components/teaser-grid.js';
import StaffQuote from '../components/staff-quote.js';
import { graphql, useStaticQuery } from 'gatsby';
import alanaCaseyProfilePicture from '../files/images/alanna_casey_profile.jpg';

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
    <GeneralLayout>
      <section className="team--content-section">
        <div className="inner">
          <div className="layout-div">
            <div className="content">
              <h2>You've never met a team like this one</h2>
              <p className="body">
                We are leaders in technology, design, and strategy for
                government digital services. We combine our diverse expertise
                and backgrounds to bring value to our customers and each other.
              </p>
            </div>
            <div className="content">
              <h3>Purpose driven. Uniquely talented. Remarkably human.</h3>
              <p className="body">
                People who work with us say there’s “something magical” about
                our team. We are good listeners, strategic thinkers, honest
                communicators, and problem solvers. (We’re also cheerful and
                kind, which is a nice bonus.) We each care deeply about the
                impact we have on those around us.{' '}
              </p>
              <p className="body">
                We are the humans of CivicActions. It’s nice to meet you!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="team-page">
        <div class="inner">
          <FilterButtons
            parentCallback={callback}
            team={teamDataNodes}
            filterState={filterState}
          />
          <p />
          <div className="section__teaser-grid">
            <TeamTeasers team={team} />
          </div>
        </div>
      </div>
      <StaffQuote
        quote="My teammates are brilliant innovators, high performers, and conscientious human beings. Together we’re working to improve lives."
        name="Alanna Casey"
        role="Technical Writer"
        img={alanaCaseyProfilePicture}
      />
    </GeneralLayout>
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
