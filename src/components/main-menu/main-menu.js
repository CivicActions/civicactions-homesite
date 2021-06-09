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
      <Link to='/contact' className='primary-button'>Contact us</Link>
      :
      <Link to='/contact'><div className='primary-button'>Contact us</div></Link>
    }
  </div>
)

export default MainMenu;

MainMenu.propTypes = {
  redHeader: PropTypes.bool
};
