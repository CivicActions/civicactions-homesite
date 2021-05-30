import React, { useRef } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'gatsby';

const MobileMenu = (props) => {
  // // @todo there has to be a better way to show child menu items without setting state for each one.
  // const [showServicesChild, setShowServicesChild] = useState(false);
  // const [showWorkChild, setShowWorkChild] = useState(false);

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
            <li><Link to="/">About</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/press">Press</Link></li>
          </ul>
        </li>

        <li className='mmenu--list__item'>
          <Link className="menu-item" to="/services">
            Services
          </Link>
        </li>

        <li className='mmenu--list__item'
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
            <li><Link to="/case-studies">Case Studies</Link></li>
            <li><Link to="/">Approach</Link></li>
          </ul>
        </li>

        <li className='mmenu--list__item'>
          <Link to="/">Insight</Link>
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