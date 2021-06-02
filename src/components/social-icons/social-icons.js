import React from 'react'
import SocialIcon from './social-icon'
import { socialMediaData } from '../../data';
import facebookIcon from '../../files/icons/facebook-footer-icon.svg';
import linkedinIcon from '../../files/icons/linkedin-footer-icon.svg';
import twitterIcon from '../../files/icons/twitter-footer-icon.svg';

const SocialIcons = () => {
  // This component contains data so that it can be used to place social media icons on any page.
  let socialIcons = socialMediaData.map((item, index) => {
    let { link, alt, icon } = item
    return <SocialIcon key={index} alt={alt} icon={icon} link={link} />
  })

  return (
    <div className='social-icon'>
      <SocialIcon
        link='https://twitter.com/civicactions?lang=en'
        icon={twitterIcon}
        alt='Follow us on twitter'
      />
        <SocialIcon
            link='https://business.facebook.com/CivicActions/'
            icon={facebookIcon}
            alt='Follow us on Facebook'
        />
        <SocialIcon
            link='https://www.linkedin.com/company/civicactions/mycompany/'
            icon={linkedinIcon}
            alt='Follow us on linkedin'
        />
    </div>
  )
}

export default SocialIcons