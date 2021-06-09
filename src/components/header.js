import '../sass/styles.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import extendedLogo from '../files/icons/ca-extended-logo.svg';
import menuIcon from '../files/icons/menu-icon.svg';
import closeIcon from '../files/icons/close-icon.svg';
import PropTypes from 'prop-types';
import MobileMenu from '../components/mobile-menu/mobile-menu';
import MainMenu from '../components/main-menu/main-menu'

const Header = () => {


  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 500)
    })

  }, []);
  const [scrollMobile, setScrollMobile] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollMobile(window.scrollY > 320)
    })

  }, []);
  return (
    <header className={`${scroll ? "header scrolled" : "header"} ${scrollMobile ? "scrolled-mobile" : ''}`}>
      <div className='inner'>
        <Link to='/' className='logo'>
          <img src={extendedLogo} alt='Civic Actions Logo'></img>
        </Link>
        <MainMenu redHeader={false} />
        <MobileMenu
          right
          noTransition
          width={'75%'}
          customBurgerIcon={<img alt='mobile menu navigation icon' src={menuIcon} />}
          customCrossIcon={<img alt='mobile menu close button' src={closeIcon} />}
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
