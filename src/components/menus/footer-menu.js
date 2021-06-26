import React from 'react'
import { Link } from 'gatsby';

const FooterMenu = () => (
  <>
    <h2 className="visually-hidden">
      CivicActions footer menu</h2>
    <nav aria-labelledby="footer" className="footer__menu">
      <ul className="footer__menu--list">
        <li className="child-menu--wrapper top-link">
          <div className="parent-link">Company</div>
          <ul>

            <li><Link to='/team'>Team</Link></li>
            <li><Link to='/press'>Press</Link></li>
          </ul>
        </li>
        <li className="child-menu--wrapper top-link">
          <Link className="parent-link" to='/services'>Services</Link>
          <ul>
            <li><Link to='/services/ditap'>DITAP</Link></li>
          </ul>
        </li>
        <li className="child-menu--wrapper top-link">
          <div className="parent-link">Our work</div>
          <ul>
            <li><Link to='/case-studies'>Case Studies</Link></li>
            <li><Link to='/contracting'>Contracting</Link></li>
          </ul>
        </li>
        <li className="top-link"><a className="parent-link" href='https://medium.com/civicactions'>Insights</a></li>
        <li className="top-link"><Link className="parent-link" to='/careers'>Careers</Link></li>
        <li className="top-link"><Link className="parent-link" to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  </>
)

export default FooterMenu;

