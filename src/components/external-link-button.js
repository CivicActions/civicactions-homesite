import React from 'react'
import PropTypes from 'prop-types';

const LinkButton = ({ size, src, text, type }) => (
  <a className={`button ${type === 'secondary' ? 'button__secondary' : 'button__primary'} ${size ?? ' '}`}
        href={src}>
    {text}
  </a>
)

export default LinkButton;

LinkButton.propTypes = {
  size: PropTypes.string,  // Use this only when the button should be 'large'
  src: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
};
