import "../sass/styles.scss";
import React, { useState } from "react";
import extendedLogo from "../files/icons/ca-extended-logo.svg";
import menuIcon from "../files/icons/menu-icon.svg";
const Header = (props, { data }) => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={extendedLogo} alt="Civic Actions Logo"></img>
      </a>
      <div className="header-nav">
        <a href="">COMPANY</a>
        <a href="/services">SERVICES</a>
        <a href="">OUR WORK</a>
        <a href="">INSIGHTS</a>
        <a href="">CARREERS</a>
        <div className="primary-button">CONTACT US</div>
      </div>
      <div className="header-nav-mobile" onClick={props.onMenuClick}>
        <img src={menuIcon} alt="" onClick={props.onMenuClick}></img>
      </div>
    </header>
  );
};

export default Header;
