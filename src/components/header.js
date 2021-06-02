import '../sass/styles.scss';
import React from 'react';
import { Link } from 'gatsby';
import extendedLogo from '../files/icons/ca-extended-logo.svg';
import menuIcon from '../files/icons/menu-icon.svg';
import closeIcon from '../files/icons/close-icon.svg';
import PropTypes from 'prop-types';
import MobileMenu from '../components/mobile-menu/mobile-menu';

const Header = () => {

  return (
    <header className={`header`}>
      <div className='inner'>
        <Link to='/' className='logo'>
          <img src={extendedLogo} alt='Civic Actions Logo'></img>
        </Link>
        <div className='header-nav'>
          <Link to=''>company</Link>
          <Link to='/services'>services</Link>
          <Link to='/case-studies'>our work</Link>
          <Link to=''>insights</Link>
          <Link to='/careers'>careers</Link>
          <a href={'/contact/'}><div className='primary-button'>contact us</div></a>
        </div>

        <MobileMenu
          right
          noTransition
          width={'75%'}
          customBurgerIcon={<img src={menuIcon} alt='mobile menu'/>}
          customCrossIcon={<img src={closeIcon} alt='close button'/>}
        />
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  onMenuClick: PropTypes.func,
  visibility: PropTypes.bool
};
