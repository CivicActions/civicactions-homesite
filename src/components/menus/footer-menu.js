import React from 'react'
import { Link } from 'gatsby';

const FooterMenu = () => (
  <>
    <h2 className="visually-hidden" id="footer--menu">
      CivicActions footer menu</h2>
    <nav aria-labelledby="footer--menu" className="footer__menu">
      <ul className="footer__menu--list">
        {/*<li><Link to='/about'>About</Link></li>*/}
        <li><Link to='/team'>Team</Link></li>
        <li><Link to='/press'>Press</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/case-studies'>Case Studies</Link></li>
        <li><Link to='/contracting'>Contracting</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><a href='https://medium.com/civicactions'>Insights</a></li>
        <li><Link to='/careers'>Careers</Link></li>
      </ul>
    </nav>
  </>
)

export default FooterMenu;

