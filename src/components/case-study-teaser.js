import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const CaseStudyTeaser = ({ img, title, description }) => {
  return (
    <div className='case-study-teaser'>
      <img src={img} alt='Client Logo'></img>
      <div className='img-overlay'> </div>
      <div className='info'>
        <h6>{title}</h6>
        <h4>{description}</h4>
      </div>
    </div>
  );
};

export default CaseStudyTeaser;

CaseStudyTeaser.propTypes = {
  img: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
