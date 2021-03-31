import "../sass/styles.scss";
import React, { useState } from "react";
import extendedLogo from "../files/icons/ca-extended-logo.svg";
import menuIcon from "../files/icons/menu-icon.svg";
const Header = (props) => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={extendedLogo} alt="Civic Actions Logo"></img>
      </a>
      <div className="header-nav">
        <a href="">company</a>
        <a href="/services">services</a>
        <a href="">our work</a>
        <a href="">insights</a>
        <a href="">careers</a>
        <div className="primary-button">contact us</div>
      </div>
      <div className="header-nav-mobile" onClick={props.onMenuClick}>
        <img src={menuIcon} alt="" onClick={props.onMenuClick}></img>
      </div>
    </header>
  );
};

export default Header;
