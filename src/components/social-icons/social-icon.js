import React from 'react';

const SocialIcon = ({ link, icon, alt }) => (
  <a href={link} rel="nofollow" className="social-icon__item">
    <img src={icon} alt={alt}></img>
  </a>
)

export default SocialIcon;