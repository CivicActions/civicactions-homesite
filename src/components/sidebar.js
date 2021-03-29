import "../sass/styles.scss";
import React, { useEffect, useRef } from "react";
import closeIcon from "../files/icons/close-icon.svg";
import arrowIcon from "../files/icons/ios-arrow-icon.svg";

const Sidebar = (props, { data }) => {
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
            <div className="link" ref={(e) => (headingsRef.current[0] = e)}>
              <div className="heading" onClick={() => onCollapseClick(0)}>
                <a href="/">
                  <h2>Company</h2>
                </a>
                <img src={arrowIcon} alt=""></img>
              </div>
              <h3>About</h3>
              <h3>Team</h3>
              <h3>Press</h3>
            </div>
            <div className="divisor"></div>
            <div className="link">
              <a href="/services">
                <h2>Services</h2>
              </a>
            </div>
            <div className="divisor"></div>
            <div className="link" ref={(e) => (headingsRef.current[1] = e)}>
              <div className="heading" onClick={() => onCollapseClick(1)}>
                <a href="/">
                  <h2>Our work</h2>
                </a>
                <img src={arrowIcon} alt=""></img>
              </div>
              <h3>Case studies</h3>
              <h3>Approach</h3>
            </div>
            <div className="divisor"></div>
            <div className="link">
              <h2>Insight</h2>
            </div>
            <div className="divisor"></div>
            <div className="link">
              <h2>Careers</h2>
            </div>
            <div className="divisor"></div>
            <div className="link">
              <h2>Contact</h2>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Sidebar;
