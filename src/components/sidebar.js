import "../sass/styles.scss";
import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import closeIcon from "../files/icons/close-icon.svg";
import arrowIcon from "../files/icons/ios-arrow-icon.svg";

const Sidebar = (props) => {
  const headingsRef = useRef([]);
  const onCollapseClick = (index) => {
    const current = headingsRef.current[index].className;
    headingsRef.current[index].className = current.includes("collapsed")
      ? "link"
      : "link collapsed";
  };
  return (
    <div>
      {props.hidden == false ? (
        <div className="background">
          <div className="sidebar">
            <div className="close">
              <img src={closeIcon} alt="" onClick={props.close}></img>
            </div>
            <ul className="link" ref={(e) => (headingsRef.current[0] = e)}>
              <li className="heading" onClick={() => onCollapseClick(0)}>
                <Link to="/">
                  <h2>Company</h2>
                </Link>
                <img src={arrowIcon} alt=""></img>
              </li>
              <li>About</li>
              <li>Team</li>
              <li>Press</li>
            </ul>
            <ul className="link">
              <li className="heading">
                <a href="/services">
                  <h2>Services</h2>
                </a>
              </li>
            </ul>
            <ul className="link" ref={(e) => (headingsRef.current[1] = e)}>
              <li className="heading" onClick={() => onCollapseClick(1)}>
                <Link to="/">
                  <h2>Our work</h2>
                </Link>
                <img src={arrowIcon} alt=""></img>
              </li>
              <li>Case studies</li>
              <li>Approach</li>
            </ul>
            <ul className="link">
              <h2>Insight</h2>
            </ul>
            <ul className="link">
              <h2>Careers</h2>
            </ul>
            <ul className="link">
              <h2>Contact</h2>
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
