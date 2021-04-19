import '../sass/styles.scss';
import React, { useRef } from 'react';
import { Link } from 'gatsby';
import closeIcon from '../files/icons/close-icon.svg';

const Sidebar = (props) => {
  const headingsRef = useRef([]);
  const onCollapseClick = (index) => {
    const current = headingsRef.current[index].className;
    headingsRef.current[index].className = current.includes('collapsed')
      ? 'page-bundle'
      : 'page-bundle collapsed';
  };
  return (
    <div>
      {props.hidden === false ? (
        <div className='background'>
          <div className='sidebar'>
            <div
              className='close'
              aria-label='Close Sidebar'
              role='button'
              onKeyDown={() => {}}
              tabIndex={0}
              onClick={props.close}>
              <img src={closeIcon} alt='Close Icon'></img>
            </div>
            <ul className='pages'>
              <li
                className='page-bundle'
                ref={(e) => (headingsRef.current[0] = e)}>
                <span
                  role='button'
                  onKeyDown={() => {}}
                  tabIndex={0}
                  onClick={() => onCollapseClick(0)}
                  className='heading'>
                  Company
                </span>
                <ul>
                  <li>About</li>
                  <li>Team</li>
                  <li>Press</li>
                </ul>
              </li>
              <li className='page-bundle'>
                <Link to='/services'>
                  <span>Services</span>
                </Link>
              </li>
              <li
                className='page-bundle'
                ref={(e) => (headingsRef.current[1] = e)}>
                <span
                  role='button'
                  onKeyDown={() => {}}
                  tabIndex={0}
                  onClick={() => onCollapseClick(1)}
                  className='heading'>
                  Our work
                </span>
                <ul>
                  <li>Case studies</li>
                  <li>Approach</li>
                </ul>
              </li>
              <li className='page-bundle'>
                <span>Insight</span>
              </li>
              <li className='page-bundle'>
                <span>Careers</span>
              </li>
              <li className='page-bundle'>
                <span>Contact</span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Sidebar;
