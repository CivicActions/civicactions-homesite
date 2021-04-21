import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const PressReleaseTeaser = ({ img, title, description }) => {
  return (
    <div className='press-release-teaser'>
      <img src={img} alt=''></img>
      <h4>{title}</h4>
      <p className='body'>{description}</p>
    </div>
  );
};

export default PressReleaseTeaser;

PressReleaseTeaser.propTypes = {
  img: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
