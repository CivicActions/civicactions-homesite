import '../sass/styles.scss';
import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from 'gatsby';
import whiteLogo from '../files/icons/CA-white.svg';
import redLogo from '../files/icons/ca-extended-logo.svg';
import menuIcon from '../files/icons/menu-icon.svg';
import closeIcon from '../files/icons/close-icon.svg';
import PropTypes from 'prop-types';
import MainMenu from './menus/main-menu/main-menu';
import MobileMenu from './menus/mobile-menu/mobile-menu';

const RedHeader = (state) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [scrolledMobile, setScrolledMobile] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 500) {
      setScrolled(true);
    } else if (offset > 300) {
      setScrolledMobile(true);
    } else {
      setScrolled(false);
      setScrolledMobile(false);
    }
  };

  const headerRef = useRef(null);

  const addAttributes = function (state) {
    // Add aria-attributes to react-burger-menu hamburger menu button
    const burgerButton = headerRef.current?.querySelector(
      '#react-burger-menu-btn',
    );

    burgerButton?.setAttribute('aria-controls', 'mobile-menu-wrapper');

    if (state.isOpen) {
      burgerButton?.setAttribute('aria-expanded', 'true');
    } else {
      burgerButton?.setAttribute('aria-expanded', 'false');
    }
  };

  useLayoutEffect(() => {
    addAttributes(state); // Update burger button attributes on inital render
  }, [state]);

  useEffect(() => {
    window.addEventListener('scrollend', handleScroll);
  });

  let headerClasses = ['header'];
  if (scrolled) {
    headerClasses.push('scrolled');
  }

  return (
    <header
      ref={headerRef}
      className={`${
        scrolled ? 'header red-header scrolled' : 'header red-header'
      } ${scrolledMobile ? 'scrolled-mobile' : ''}`}>
      <div className='red-header--header'>
        <div className='inner'>
          <Link to='/' className='logo'>
            <img
              className='white-logo'
              src={whiteLogo}
              alt='Civic Actions home page'></img>
            <img
              className='red-logo'
              src={redLogo}
              alt='Civic Actions home page'></img>
          </Link>
          <MainMenu redHeader={true} />
          <MobileMenu
            id={'mobile-menu-wrapper'}
            onStateChange={addAttributes} 
            right
            noTransition
            width={'75%'}
            customBurgerIcon={
              <svg
                alt=''
                width='20'
                height='15'
                fill='%23FFF'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M0 0h20v2H0zM0 7h20v2H0zM0 13h20v2H0z' />
              </svg>
            }
            customCrossIcon={<img alt='' src={closeIcon} />}
          />
        </div>
      </div>
    </header>
  );
};

export default RedHeader;

RedHeader.propTypes = {
  onMenuClick: PropTypes.func,
  visibility: PropTypes.bool,
};
