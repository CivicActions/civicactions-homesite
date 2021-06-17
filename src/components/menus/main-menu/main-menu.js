import React, { useRef } from 'react'
import { Link } from 'gatsby';
import PropTypes from 'prop-types'

const MainMenu = ({ redHeader }) => {

  const headingsRef = useRef([]);
  const onCollapseClick = (index) => {
    const current = headingsRef.current[index].className;

    // Close open sub-menus.
    const keys = Object.keys(headingsRef.current);
    keys.forEach(function (value) {
      headingsRef.current[value].className = 'menu--list__item'
    })

    // Add/remove the expanded class from the currently clicked item.
    headingsRef.current[index].className = current.includes('expanded')
      ? 'menu--list__item'
      : 'menu--list__item expanded';

    if (current.includes('expanded')) {
      headingsRef.current[index].setAttribute('aria-expanded', 'false')
    } else {
      headingsRef.current[index].setAttribute('aria-expanded', 'true')
    }
  };

  return (
    <nav className='header-nav'>
      <ul className="menu--list">
        <li
          className='menu--list__item'
          ref={(e) => (headingsRef.current[0] = e)}>
          <button
            className="heading"
            onKeyDown={() => { }}
            tabIndex={0}
            onClick={() => onCollapseClick(0)}
          >
            Company
          </button>
          <ul>
            {/*<li><Link to="/">About</Link></li>*/}
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/press">Press</Link></li>
          </ul>
        </li>
        <li className='menu--list__item'><Link to='/services'>Services</Link></li>
        <li
          className='menu--list__item'
          ref={(e) => (headingsRef.current[1] = e)}>
          <button
            className="heading"
            onKeyDown={() => { }}
            tabIndex={0}
            onClick={() => onCollapseClick(1)}
          >
            Our Work
          </button>
          <ul>
            {/*<li><Link to="/">About</Link></li>*/}
            <li><Link to="/case-studies">Case Studies</Link></li>
            <li><Link to="/contracting">Contracting</Link></li>
          </ul>
        </li>
        <li className='menu--list__item'><a href='https://medium.com/civicactions'>Insights</a></li>
        <li className='menu--list__item'><Link to='/careers/'>Careers</Link></li>
        <li className='menu--list__item'>{redHeader ?
          <Link to='/contact' className='primary-button'>Contact us</Link>
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
