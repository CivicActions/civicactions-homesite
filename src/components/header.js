import "../sass/styles.scss";
import React, { useState } from "react";
import extendedLogo from "../files/icons/ca-extended-logo.svg";

const Header = (props, { data }) => {
  return (
    <header className="header">
      <img src={extendedLogo} alt="Civic Actions Logo"></img>
      <div className="header-nav">
        <a href="">COMPANY</a>
        <a href="">SERVICES</a>
        <a href="">OUR WORK</a>
        <a href="">INSIGHTS</a>
        <a href="">CARREERS</a>
        <div className="primary-button">CONTACT US</div>
      </div>
    </header>
  );
};

export default Header;
