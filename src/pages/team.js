import '../sass/styles.scss';
import React, {useState} from 'react';
import GeneralLayout from '../layouts/general';
import TeaserGrid from '../components/teaser-grid.js';
import { graphql, useStaticQuery } from 'gatsby';

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
    if (e.target.textContent !== "undefined") {
      setFilterState(e.target.textContent);
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
      <div className="team-page">
        <section className="inner">
          <div className="">
            <div>
              <h2>You've never met a team like this one</h2>
              <p className="body">Lorem ipsum</p>
            </div>
          </div>
        </section>

        <div class="inner">
          <FilterButtons parentCallback={callback} team={teamDataNodes} filterState={filterState} />
          <p />
          <div className="section__teaser-grid">
            <TeamTeasers team={team} />
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};


const TeamTeasers = ({ team }) => {
  return team.map((person, index) => {
    const { Path, Name, Role, Image } = person;
    return (<TeaserGrid image={Image} name={Name} link={Path} title={Role} />);
  });
};

const FilterButtons = ({ team, parentCallback, filterState }) => {
  const roles = [...new Set(team.map((item) => item.Role))];
  return roles.map((role, index) => {
    const selected = (role === filterState) ? true : false;
    return (
      <button
        key={index}
        className={selected ? "team-filter-btn selected" : "team-filter-btn"}
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
