import React from 'react'
import SocialIcon from './social-icon'
import { socialMediaData } from '../../data';

const SocialIcons = () => {
  // This component contains data so that it can be used to place social media icons on any page.
  let socialIcons = socialMediaData.map((item, index) => {
    let { link, alt, icon } = item
    return <SocialIcon key={index} alt={alt} icon={icon} link={link} />
  })

  return (
    <div className='social-icon'>
      {socialIcons}
    </div>
  )
}

export default SocialIcons