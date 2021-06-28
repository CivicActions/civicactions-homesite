import '../sass/styles.scss';
import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import extendedLogo from '../files/icons/ca-extended-logo.svg';
import menuIcon from '../files/icons/menu-icon.svg';
import closeIcon from '../files/icons/close-icon.svg';
import PropTypes from 'prop-types';
import MobileMenu from './menus/mobile-menu/mobile-menu';
import MainMenu from './menus/main-menu/main-menu'

const Header = () => {

  const [scrolled, setScrolled] = React.useState(false);
  const [scrolledMobile, setScrolledMobile] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 500) {
      setScrolled(true);
    }
    else if (offset > 300) {
      setScrolledMobile(true);
    }
    else {
      setScrolled(false);
      setScrolledMobile(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let headerClasses = ['header'];
  if (scrolled) {
    headerClasses.push('scrolled');
  }


  return (
    <header className={`${scrolled ? "header scrolled" : "header"} ${scrolledMobile ? "scrolled-mobile" : ""}`}>
      <div className='inner'>
        <Link to='/' className='logo'>
          <img src={extendedLogo} alt='Civic Actions Logo'></img>
        </Link>
        <MainMenu redHeader={false} />

      </div>
      <MobileMenu
        right
        noTransition
        width={'75%'}
        customBurgerIcon={<img alt='mobile menu navigation icon' src={menuIcon} />}
        customCrossIcon={<img alt='mobile menu close button' src={closeIcon} />}
      />
    </header>

  );
};

export default Header;

Header.propTypes = {
  onMenuClick: PropTypes.func,
  visibility: PropTypes.bool
};
