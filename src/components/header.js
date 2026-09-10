import '../sass/styles.scss';
import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import extendedLogo from '../files/icons/ca-extended-logo.svg';
import menuIcon from '../files/icons/menu-icon.svg';
import closeIcon from '../files/icons/close-icon.svg';
import PropTypes from 'prop-types';
import MobileMenu from './menus/mobile-menu/mobile-menu';
import MainMenu from './menus/main-menu/main-menu';
import FocusLock from 'react-focus-lock';

const Header = (props) => {
  const headerRef = useRef(null);
  const menuBurgerButton = headerRef.current?.querySelector(
    '#react-burger-menu-btn',
  );
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMenuOpenRef = useRef(null);

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

  const handleMenuOpen = (props) => {
    isMenuOpenRef.current = props.isOpen ? true : false;

    if (isMenuOpenRef.current) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };

  const addAttributes = function () {
    // Add aria-attributes to react-burger-menu hamburger menu button
    menuBurgerButton?.setAttribute('aria-controls', 'mobile-menu-wrapper');

    if (isMenuOpenRef.current) {
      menuBurgerButton?.setAttribute('aria-expanded', 'true');
      menuBurgerButton?.setAttribute('tabindex', '-1'); // Button remains tabbable with FocusLock without this.
    } else {
      menuBurgerButton?.setAttribute('aria-expanded', 'false');
      menuBurgerButton?.tabIndex === -1
        ? menuBurgerButton.removeAttribute('tabindex')
        : null;
    }
  };

  const setFocus = function () {
    if (isMenuOpenRef.current) {
      // Set focus to close button on menu open
      const menuCloseButton = headerRef.current?.querySelector(
        '#react-burger-cross-btn',
      );
      menuCloseButton?.focus({ focusVisible: true });
    } else {
      // Set focus back on burger button when menu closes
      menuBurgerButton?.focus({ focusVisible: true });
    }
  };

  useEffect(() => {
    window.addEventListener('scrollend', handleScroll);
    handleMenuOpen(props);
    addAttributes(); // Update burger button attributes on inital render
  }, [props]);

  const handleStateChange = function (props) {
    handleMenuOpen(props);
    addAttributes(); // Update burger button attributes on change
    setFocus();
  };

  let headerClasses = ['header'];
  if (scrolled) {
    headerClasses.push('scrolled');
  }

  return (
    <header
      ref={headerRef}
      className={`${scrolled ? 'header scrolled' : 'header'} ${
        scrolledMobile ? 'scrolled-mobile' : ''
      }`}>
      <div className='inner'>
        <Link to='/' className='logo'>
          <img src={extendedLogo} alt='Civic Actions home page'></img>
        </Link>
        <MainMenu redHeader={false} />
      </div>
      <FocusLock disabled={!isMenuOpen}>
      <MobileMenu
      id={'mobile-menu-wrapper'}
              onStateChange={handleStateChange}
              disableAutoFocus // Auto focus is busted
        right
        noTransition
        width={'75%'}
        customBurgerIcon={<img alt='' src={menuIcon} />}
        customCrossIcon={<img alt='' src={closeIcon} />}
      />
      </FocusLock>
    </header>
  );
};

export default Header;

Header.propTypes = {
  onMenuClick: PropTypes.func,
  visibility: PropTypes.bool,
};
