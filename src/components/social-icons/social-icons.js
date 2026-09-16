import React from 'react';
import SocialIcon from './social-icon';
import { socialMediaData } from '../../data';

const SocialIcons = () => {
  // This component contains data so that it can be used to place social media icons on any page.
  let socialIcons = socialMediaData.map((item, index) => {
    let { link, alt, icon, iconHover, platform } = item;
    return (
      <SocialIcon
        key={index}
        alt={alt}
        icon={icon}
        iconHover={iconHover}
        link={link}
        platform={platform}
      />
    );
  });
  return <ul className='social-icon'>{socialIcons}</ul>;
};

export default SocialIcons;
