import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby-link';
import PropTypes from 'prop-types';

const TeaserGrid = ({ image, link, name, title }) => {
  return (
    <div className="teaser-grid--wrapper">
      <div className="teaser-grid">
        <div className="teaser-grid__name teaser__link">
          {/*// Unlinked for MVP soft launch*/}
          {/*<Link to={link} title={`Link to ${name}'s profile page`}>*/}
            <div className="teaser-grid__image">
              <GatsbyImage image={getImage(image)} aria-label={name} alt={''} />
            </div>
          {/*</Link>*/}
          <div className="teaser-grid__text">
            {/*// Unlinked for MVP soft launch*/}
            {/*<Link to={link} title={`Link to ${name}'s profile page`}>*/}
              <div className="teaser-grid__title">{name}</div>
            {/*</Link>*/}
            <div className="teaser-grid__role">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeaserGrid;

TeaserGrid.propTypes = {
  image: PropTypes.object,
  link: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};
