import '../sass/styles.scss';
import React from 'react';
import { Link } from 'gatsby';
import extendedLogo from '../files/icons/ca-extended-logo.svg';
import menuIcon from '../files/icons/menu-icon.svg';
import PropTypes from 'prop-types';

const Header = ({ onMenuClick }) => {
  return (
    <header className='header'>
      <Link to='/' className='logo'>
        <img src={extendedLogo} alt='Civic Actions Logo'></img>
      </Link>
      <div className='header-nav'>
        <Link to=''>Company</Link>
        <Link to='/services'>Services</Link>
        <Link to=''>Our work</Link>
        <Link to=''>Insights</Link>
        <Link to='/careers'>Careers</Link>
        <div className='primary-button'>Contact us</div>
      </div>
      <div
        className='header-nav-mobile'
        onClick={onMenuClick}
        role='button'
        tabIndex={0}
        onKeyDown={() => { }}>
        <img src={menuIcon} alt=''></img>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  onMenuClick: PropTypes.func,
};
