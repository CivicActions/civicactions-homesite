import '../sass/styles.scss';
import React from 'react';
import { Link } from 'gatsby';
import extendedLogo from '../files/icons/CA-white.svg';
import menuIcon from '../files/icons/menu-icon.svg';
import PropTypes from 'prop-types';

const RedHeader = ({ onMenuClick, mobileMenuHiddenBool }) => {

    const menuVisibility = mobileMenuHiddenBool ? 'mobile-menu-closed' : 'mobile-menu-open';
    return (

        <header className={`header red-header ${menuVisibility}`}>

            <div className='red-header--header'><div className='inner'>
                <Link to='/' className='logo'>
                    <img src={extendedLogo} alt='Civic Actions Logo'></img>
                </Link>
                <div className='header-nav'>
                    <Link to=''>company</Link>
                    <Link to='/services'>services</Link>
                    <Link to=''>our work</Link>
                    <Link to=''>insights</Link>
                    <Link to=''>careers</Link>
                    <div className='primary-button'>contact us</div>
                </div>
                <div
                    className='header-nav-mobile'
                    onClick={onMenuClick}
                    role='button'
                    tabIndex={0}
                    onKeyDown={() => {}}>
                    <img src={menuIcon} alt=''></img>
                </div>
            </div></div>

        </header>
    );
};

export default RedHeader;

RedHeader.propTypes = {
    onMenuClick: PropTypes.func,
    visibility: PropTypes.bool
};