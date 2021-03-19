import "../sass/styles.scss";
import React, { useState } from "react";
import arrowIcon from "../files/icons/arrow-icon.svg";
const CaseStudyTeaser = (props, { data }) => {
  return (
    <div className="case-study-teaser">
      <img src={props.image} alt="Client Logo"></img>
      <div className="img-overlay"> </div>
      <div className="case-study-teaser__info">
        <h6>{props.title}</h6>
        <h4>{props.description}</h4>
      </div>
    </div>
  );
};

export default CaseStudyTeaser;
