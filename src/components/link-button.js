import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const LinkButton = ({ size, src, text, type }) => (
  <Link className={`button ${type == 'secondary' ? 'button__secondary' : 'button__primary'} ${size ?? ' '}`}
    to={src}>
    {text}
  </Link>
)

export default LinkButton;

LinkButton.propTypes = {
  size: PropTypes.string,  // Use this only when the button should be 'large'
  src: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
};
