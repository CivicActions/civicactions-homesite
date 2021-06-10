import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Card = ({ icon, title, link }) => {
  return (
      <Link to={link} className='card'>
      <img src={icon} alt=''></img>
      <h3 className='h5'>{title}</h3>

    </Link>
  );
};

export default Card;

Card.propTypes = {
    icon: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
};
