import React, { useRef } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'gatsby';

const MobileMenu = (props) => {

  const headingsRef = useRef([]);
  const onCollapseClick = (index) => {
    const current = headingsRef.current[index].className;
    headingsRef.current[index].className = current.includes('expanded')
      ? 'mmenu--list__item'
      : 'mmenu--list__item expanded';

    if (current.includes('expanded')) {
      headingsRef.current[index].setAttribute('aria-expanded', 'false')
    } else {
      headingsRef.current[index].setAttribute('aria-expanded', 'true')
    }
  };

  return (
    <Menu {...props}>
      <ul className="mmenu--list">
        <li className='mmenu--list__item'
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
            <li><a href='https://reports.civicactions.com/impact' className='external-link'>Impact</a></li>
          </ul>
        </li>

        <li className='mmenu--list__item'
            ref={(e) => (headingsRef.current[1] = e)}>
          <button
            className="heading"
            onKeyDown={() => { }}
            tabIndex={0}
            onClick={() => onCollapseClick(1)}
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

        <li className='mmenu--list__item'
          ref={(e) => (headingsRef.current[2] = e)}>
          <button
            className="heading"
            onKeyDown={() => { }}
            tabIndex={0}
            onClick={() => onCollapseClick(2)}
          >
            Our Work
          </button>
          <ul>
            <li><Link to="/case-studies">Case Studies</Link></li>
            <li><Link to="/contracting">Contracting</Link></li>
          </ul>
        </li>

        <li className='mmenu--list__item'>
          <a href='https://medium.com/civicactions'>Insights</a>
        </li>

        <li className='mmenu--list__item'>
          <Link to="/careers">Careers</Link>
        </li>

        <li className='mmenu--list__item'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Menu>
  );
};

export default MobileMenu;