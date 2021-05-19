import '../sass/styles.scss';
import React from 'react';
import { Link } from 'gatsby';
import SocialIcons from './social-icons/social-icons';
import extendedLogo from '../files/icons/ca-extended-logo.svg';



const Footer = () => {
  return (
    <footer className='footer'>
      <div className='inner'>
        <div className='grid-item-1 footer__branding '>
          <Link to='/'>
            <img src={extendedLogo} alt='Civic Actions Logo'></img>
          </Link>

          <SocialIcons />

        </div>
        <div className='grid-item-2'>
          <div className='body-small'>
            We're a mid-size professional services firm providing design,
            technology, consulting, and training services to government.
          </div>
          <div className='body-small'>
            We're always hiring!
          </div>
          <div className='body-small'>
            <a href='/careers'>Check out our open positions</a> or <br />
            <a href="">learn about contracting with us.</a>
          </div>
          <div className='body-small'>
            Our team is fully distributed, but our mailing address is:<br />
            3527 Mt. Diablo Blvd., Unit 269<br />
            Lafayette, CA 94549
          </div>
        </div>
        <div className='grid-item-3'>
          <nav>
            <div className='column'>
              <Link to=''>COMPANY</Link>
              <Link className='body-small' to=''>
                About
              </Link>
              <Link className='body-small' to=''>
                Team
              </Link>
              <Link className='body-small' to=''>
                Press
              </Link>
            </div>
            <Link className='footer--services-link' to='/services'>SERVICES</Link>
            <div className='column'>
              <Link to=''>OUR WORK</Link>
              <Link className='body-small' to=''>
                Case studies
              </Link>
              <Link className='body-small' to=''>
                Approach
              </Link>
            </div>
            <Link to=''>INSIGHTS</Link>
            <Link className='footer--careers-link' to='/careers'>CAREERS</Link>
            <Link to=''>CONTACT</Link>
          </nav>
        </div>
        <div className='grid-item-4'>
          <div className='body-small'>
            Get in touch via phone or email:
            <br />
            510-408-7510
            <br />
            contact@civicactions.com
          </div>
          <div className='bottom-links'>
            <div className='body-small'>© 2010 — 2021</div>
            <div className='body-small'><a href="">Accessibility</a></div>
            <div className='body-small'>Privacy — Terms</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
