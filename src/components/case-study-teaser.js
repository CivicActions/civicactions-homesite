import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const CaseStudyTeaser = ({ img, title, description }) => {
  return (
    <Link to='/'>
      <div className='case-study-teaser'>
        <img src={img} alt='Client Logo'></img>
        <div className='img-overlay'> </div>
        <div className='info'>
          <h3 className='header--small'>{title}</h3>
          <h4>{description}</h4>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyTeaser;

CaseStudyTeaser.propTypes = {
  img: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
