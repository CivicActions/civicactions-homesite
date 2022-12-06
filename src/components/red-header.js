import '../sass/styles.scss';
import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import whiteLogo from '../files/icons/CA-white.svg';
import redLogo from '../files/icons/ca-extended-logo.svg';
import menuIcon from '../files/icons/menu-icon.svg';
import closeIcon from '../files/icons/close-icon.svg';
import PropTypes from 'prop-types';
import MainMenu from './menus/main-menu/main-menu'
import MobileMenu from './menus/mobile-menu/mobile-menu';

const RedHeader = () => {

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

        <header className={`${scrolled ? "header red-header scrolled" : "header red-header"} ${scrolledMobile ? "scrolled-mobile" : ""}`}>
            <div className='red-header--header'><div className='inner'>
                <Link to='/' className='logo'>
                    <img className='white-logo' src={whiteLogo} alt='Civic Actions home page'></img>
                    <img className='red-logo' src={redLogo} alt='Civic Actions home page'></img>
                </Link>
                <MainMenu redHeader={true} />
                <MobileMenu
                  right
                  noTransition
                  width={'75%'}
                  customBurgerIcon={<svg alt='mobile menu navigation icon' width="20" height="15" fill="%23FFF" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h20v2H0zM0 7h20v2H0zM0 13h20v2H0z" /></svg>}
                  customCrossIcon={<img alt='mobile menu close button' src={closeIcon} />}
                />
            </div></div>

        </header>
    );
};

export default RedHeader;

RedHeader.propTypes = {
    onMenuClick: PropTypes.func,
    visibility: PropTypes.bool
};
