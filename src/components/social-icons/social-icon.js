import React from 'react';

const SocialIcon = ({ link, icon, iconHover, alt, platform }) => (
  <a href={link} rel="nofollow" className={`social-icon__item ${platform}`}>
    <img className='black-icon' src={icon} alt={alt}></img>
      <img className='blue-icon' src={iconHover} alt={alt}></img>
  </a>
)

export default SocialIcon;