import "../sass/styles.scss";
import React, { useState } from "react";
import { Link } from "gatsby";
import extendedLogo from "../files/icons/ca-extended-logo.svg";
import menuIcon from "../files/icons/menu-icon.svg";
const Header = (props) => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={extendedLogo} alt="Civic Actions Logo"></img>
      </Link>
      <div className="header-nav">
        <Link to="">company</Link>
        <Link to="/services">services</Link>
        <Link to="">our work</Link>
        <Link to="">insights</Link>
        <Link to="">careers</Link>
        <div className="primary-button">contact us</div>
      </div>
      <div className="header-nav-mobile" onClick={props.onMenuClick}>
        <img src={menuIcon} alt="" onClick={props.onMenuClick}></img>
      </div>
    </header>
  );
};

export default Header;
