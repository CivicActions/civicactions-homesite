import React from 'react'
import { Link } from 'gatsby';
import PropTypes from 'prop-types'

const MainMenu = ({ redHeader }) => (
  <div className='header-nav'>
    <Link to='/'>Company</Link>
    <Link to='/services'>Services</Link>
    <Link to='/case-studies/'>Our work</Link>
    <a href='https://medium.com/civicactions'>Insights</a>
    <Link to='/careers/'>Careers</Link>
    { redHeader ?
      <a href='/contact' className='primary-button'>Contact us</a>
      :
      <a href='/contact'><div className='primary-button'>Contact us</div></a>
    }
  </div>
)

export default MainMenu;

MainMenu.propTypes = {
  redHeader: PropTypes.bool
};
