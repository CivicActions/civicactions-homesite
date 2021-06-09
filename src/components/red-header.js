import '../sass/styles.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import extendedLogo from '../files/icons/CA-white.svg';
import menuIcon from '../files/icons/menu-icon.svg';
import closeIcon from '../files/icons/close-icon.svg';
import PropTypes from 'prop-types';
import MainMenu from '../components/main-menu/main-menu'
import MobileMenu from '../components/mobile-menu/mobile-menu';

const RedHeader = () => {


    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 450)
        })
    }, []);

    return (

        <header className={scroll ? "header red-header scrolled" : "header red-header"}>

            <div className='red-header--header'><div className='inner'>
                <Link to='/' className='logo'>
                    <img src={extendedLogo} alt='Civic Actions Logo'></img>
                </Link>
                <MainMenu redHeader={true} />
                <MobileMenu
                    right
                    noTransition
                    width={'75%'}
                    customBurgerIcon={<img src={menuIcon} />}
                    customCrossIcon={<img src={closeIcon} />}
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
