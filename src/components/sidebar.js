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
      ? "page-bundle"
      : "page-bundle collapsed";
  };
  return (
    <div>
      {props.hidden == false ? (
        <div className="background">
          <div className="sidebar">
            <div className="close">
              <img src={closeIcon} alt="" onClick={props.close}></img>
            </div>
            <ul className="pages">
              <li
                className="page-bundle"
                ref={(e) => (headingsRef.current[0] = e)}>
                <h2 onClick={() => onCollapseClick(0)} className="heading">
                  Company
                </h2>
                <ul>
                  <li>About</li>
                  <li>Team</li>
                  <li>Press</li>
                </ul>
              </li>
              <li className="page-bundle">
                <Link to="/services">
                  <h2>Services</h2>
                </Link>
              </li>
              <li
                className="page-bundle"
                ref={(e) => (headingsRef.current[1] = e)}>
                <h2 onClick={() => onCollapseClick(1)} className="heading">
                  Our work
                </h2>
                <ul>
                  <li>Case studies</li>
                  <li>Approach</li>
                </ul>
              </li>
              <li className="page-bundle">
                <h2>Insight</h2>
              </li>
              <li className="page-bundle">
                <h2>Careers</h2>
              </li>
              <li className="page-bundle">
                <h2>Contact</h2>
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
