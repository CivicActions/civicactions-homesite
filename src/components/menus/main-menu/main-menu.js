import React, { useRef } from 'react'
import { Link } from 'gatsby';
import PropTypes from 'prop-types'

const MainMenu = ({ redHeader }) => {

  return (
    <nav className='header-nav'>
      <ul className="menu--list">
        <li
          className='menu--list__item'>
          <button
            className="heading"
            tabIndex={0}
          >
            Company
          </button>
          <ul>
            {/*<li><Link to="/">About</Link></li>*/}
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/press">Press</Link></li>
          </ul>
        </li>
        <li
          className='menu--list__item'>
          <button
            className="heading"
            tabIndex={0}
          >
            Services
          </button>
          <ul>
            <li><Link to="/services#web-cms">Web & CMS</Link></li>
            <li><Link to="/services#service-modernization">IT Modernization</Link></li>
            <li><Link to="/services#product-design">Product & Design</Link></li>
            <li><Link to="/services#security-compliance">Security & Compliance</Link></li>
            <li><Link to="/services#data-services">Data Services</Link></li>
            <li><Link to="/services#workforce-development">Workforce Development</Link></li>
            <li><Link to="/services/ditap">DITAP</Link></li>
          </ul>
        </li>
        <li
          className='menu--list__item'>
          <button
            className="heading"
            tabIndex={0}
          >
            Our Work
          </button>
          <ul>
            <li><Link to="/case-studies">Case Studies</Link></li>
            <li><Link to="/contracting">Contracting</Link></li>
          </ul>
        </li>
        <li className='menu--list__item'><a href='https://medium.com/civicactions'>Insights</a></li>
        <li className='menu--list__item'><Link to='/careers/'>Careers</Link></li>
        <li className='menu--list__item'>{redHeader ?
          <Link to='/contact'><div className='primary-button'>Contact us</div></Link>
          :
          <Link to='/contact'><div className='primary-button'>Contact us</div></Link>
        }</li>
      </ul>
    </nav>
  )
}

export default MainMenu;

MainMenu.propTypes = {
  redHeader: PropTypes.bool
};
