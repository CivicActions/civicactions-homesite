import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const CaseStudyTeaser = ({ img, alt, client, title, teaserLink }) => {
  console.log(teaserLink);
  return (
    <Link to={teaserLink}>
      <div className='case-study-teaser'>
        <div className={`wrapper--case-study--teaser ${!img && 'no-img'}`}>
          <img src={img} alt={alt} />
          <div className='teaser-content'>
            <div className='title-wrapper'>
              <span aria-label='client name'>{client}</span>
              <h2 className='h3'>{title}</h2>
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default CaseStudyTeaser;

CaseStudyTeaser.propTypes = {
  img: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  title: PropTypes.string,
  teaserLink: PropTypes.string,
};
