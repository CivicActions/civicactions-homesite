import '../sass/styles.scss';
import React from 'react';
import { Link } from 'gatsby';
import SocialIcons from './social-icons/social-icons';
import extendedLogo from '../files/icons/ca-extended-logo.svg';

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
          <h2 className="visually-hidden" id="footer">
            CivicActions footer menu</h2>
          <nav aria-labelledby="footer" className="footer__menu">
            <ul className="footer__menu--list">
              <li className="child-menu--wrapper top-link">
                <div className="parent-link">Company</div>
                <ul>

                  <li><Link to='/team'>Team</Link></li>
                  <li><Link to='/press'>Press</Link></li>
                  <li><Link to='/contracting'>Contracting</Link></li>
                </ul>
              </li>
              <li className="child-menu--wrapper top-link">
                <Link className="parent-link" to='/services'>Services</Link>
                <ul>
                  <li><Link to='/services/ditap'>DITAP</Link></li>
                </ul>
              </li>
              <li className="child-menu--wrapper top-link">
                <div className="parent-link">Our work</div>
                <ul>
                  <li><Link to='/case-studies'>Case Studies</Link></li>
                </ul>
              </li>
              <li className="top-link"><a className="parent-link" href='https://medium.com/civicactions'>Insights</a></li>
              <li className="top-link"><Link className="parent-link" to='/careers'>Careers</Link></li>
              <li className="top-link"><Link className="parent-link" to='/contact'>Contact</Link></li>
            </ul>
          </nav>
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
