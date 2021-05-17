import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const PressReleaseTeaser = ({ teaserlink, img, title, description }) => {
  return (
    <div className='press-release-teaser'>
        <a href={teaserlink}>
            <img src={img} alt=''></img>
            <h4>{title}</h4>
            <p className='body'>{description}</p>
        </a>

    </div>
  );
};

export default PressReleaseTeaser;

PressReleaseTeaser.propTypes = {
    teaserlink: PropTypes.string,
    img: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};
