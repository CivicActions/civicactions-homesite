import "../sass/styles.scss";
import React, { useState } from "react";
import GeneralLayout from "../layouts/general";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby"; // Place in TeaserGrid component.
import { GatsbyImage, getImage } from "gatsby-plugin-image"; // Same here.

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
  console.log("FilterState", filterState);

  const callback = (e) => {
    // do something with value in parent component, like save to state
    //    console.log('Callback called', e.target.textContent);
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
      <section className="team-page">
        <div class="inner">
          <FilterButtons parentCallback={callback} team={teamDataNodes} />
          <p />
          <div className="section__teaser-grid">
            <TeamTeasers team={team} />
          </div>
        </div>
      </section>
    </GeneralLayout>
  );
  // return <GeneralLayout>Foo</GeneralLayout>;
};

// <li key={index}>{person.Name} <strong> {person.Role}</strong></li>
const TeamTeasers = ({ team }) => {
  return team.map((person, index) => {
    const { Path, Name, Role, Image } = person;
    return <TeaserGrid image={Image} name={Name} link={Path} title={Role} />;
  });
};

const FilterButtons = ({ team, parentCallback }) => {
  const roles = [...new Set(team.map((item) => item.Role))];
  return roles.map((role, index) => {
    return (
      <button
        key={index}
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

const TeaserGrid = ({ image, link, name, published, title }) => {
  return (
    <div className="teaser-grid--wrapper">
      <div className="teaser-grid">
        <div className="teaser-grid__text">
          <div className="teaser-grid__name teaser__link">
            <Link to={link} title={`Link to ${name}'s profile page`}>
              {name}
              <div className="teaser-grid__image">
                <GatsbyImage image={getImage(image)} alt={name} />
              </div>
            </Link>
          </div>
          <div className="teaser-grid__title">{title}</div>
        </div>
      </div>
    </div>
  );
};
