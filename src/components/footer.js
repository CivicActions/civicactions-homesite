import '../sass/styles.scss';
import React from 'react';
import { Link } from 'gatsby';
import SocialIcons from './social-icons/social-icons';
import extendedLogo from '../files/icons/ca-extended-logo.svg';
import FooterMenu from './menus/footer-menu';

const Footer = () => {
  return (
    <footer id='footer' className='footer'>
      <div className='inner grid-container'>
        <div className='grid-container__item footer__branding '>
          <Link to='/'>
            <img className='footer__branding--logo' src={extendedLogo} alt='Civic Actions Logo'></img>
          </Link>
        </div>

        <div className='grid-container__item footer__about-text'>
          <div>
            <p>We're a professional services firm providing design,
              technology, consulting, and training services to government.</p>

            <Link to='/careers'>Check out our open positions</Link> or <br />
            <Link to='/contracting'>learn about contracting with us.</Link>

            <p>Our team is fully distributed, but our mailing address is:<br />
              {/* @todo pull this in from the site metaData */}
              3527 Mt. Diablo Blvd., Unit 269<br />
              Lafayette, CA 94549
            </p>
          </div>
        </div>

        <div className='grid-container__item footer__menu--wrapper'>
          <FooterMenu />
        </div>
        <div className='grid-container__item footer__contact'>
          <div className='footer__about-text'>
            Get in touch via phone or email:
            <br />
            <a href='tel:510-408-7510'>510-408-7510</a>
            <br />
            <a href='mailto:contact@civicactions.com'>contact@civicactions.com</a>
          </div>
        </div>
        <div className='grid-container__item footer__social '>
          <SocialIcons />
        </div>
        <div className='grid-container__item footer__bottom-links'>
          <p>© 2010 —- 2021</p>
          <p><Link to='/accessibility'>Accessibility</Link></p>
          <p><Link to='/privacy'>Privacy</Link></p>
          <p><Link to='/feedback'>Feedback</Link></p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
