import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ icon, title }) => {
  return (
    <div className='card'>
      <img src={icon} alt=''></img>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;

Card.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};
