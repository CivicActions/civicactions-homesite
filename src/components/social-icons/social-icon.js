import React from 'react';

const SocialIcon = ({ index, link, icon, iconHover, alt }) => (
  <a className={index} href={link} rel="nofollow" className="social-icon__item">
    <img className='black-icon' src={icon} alt={alt}></img>
      <img className='blue-icon' src={iconHover} alt={alt}></img>
  </a>
)

export default SocialIcon;