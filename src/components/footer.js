import '../sass/styles.scss';
import React from 'react';
import { Link } from 'gatsby';
import extendedLogo from '../files/icons/ca-extended-logo.svg';
import twitterIcon from '../files/icons/twitter-footer-icon.svg';
import facebookIcon from '../files/icons/facebook-footer-icon.svg';
import linkedinIcon from '../files/icons/linkedin-footer-icon.svg';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <div className='inner'>
        <div className='grid-item-1'>
          <Link to='/'>
            <img src={extendedLogo} alt='Civic Actions Logo'></img>
          </Link>

          <div className='social-icons'>
            <img src={twitterIcon} alt='Civic Actions Twitter'></img>
            <img src={facebookIcon} alt='Civic Actions Facebook'></img>
            <img src={linkedinIcon} alt='Civic Actions LinkedIn'></img>
          </div>
        </div>
        <div className='grid-item-2'>
          <div className='info'>
            <div className='body-small'>
              We're a mid-size professional services firm providing design,
              technology, consulting, and training services to government.
            </div>
            <div style={{ height: '24px' }}></div>
            <div className='body-small'>We’re always hiring!</div>
            <div style={{ height: '24px' }}></div>
            <div className='body-small'>
              Check out our open positions or <br />
              learn about contracting with us.
            </div>
            <div style={{ height: '24px' }}></div>
            <div className='body-small'>
              Our team is fully distributed, but our mailing address is:3527 Mt.
              Diablo Blvd., Unit 269Lafayette, CA 94549
            </div>
          </div>
        </div>
        <div className='grid-item-3'>
          <div className='content'>
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
            <Link to='/services'>SERVICES</Link>
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
            <Link to=''>CARREERS</Link>
            <Link to=''>CONTACT</Link>
          </div>
        </div>
        <div className='grid-item-4'>
          <div className='content'>
            <div className='body-small'>
              Get in touch via phone or email:
              <br />
              510-408-7510
              <br />
              contact@civicactions.com
            </div>
            <div className='bottom-links'>
              <div className='body-small'> © 2010 — 2021</div>
              <div className='body-small'> Accessibility</div>
              <div className='body-small'>Privacy — Terms</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
