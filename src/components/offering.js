import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Offering = ({ icon, title, description }) => {
  return (
    <div className='offering'>
      <img
        src={icon}
        alt='Icon'
        style={{ marginBottom: 40 }}></img>
      <h3>{title}</h3>
      <p className='body'>{description}</p>
    </div>
  );
};

export default Offering;

Offering.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
};
