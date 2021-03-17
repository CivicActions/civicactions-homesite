import "../sass/styles.scss";
import React, { useState } from "react";
import arrowIcon from "../files/icons/arrow-icon.svg";
const CaseStudyTeaser = (props, { data }) => {
  return (
    <div className="case-study-teaser">
      <img src={props.image} alt="Client Logo"></img>
      <div className="case-study-teaser__info">
        <h6>{props.title}</h6>
        <h4>{props.description}</h4>
        <div className="read-cta">
          <h6>READ CASE STUDY</h6>
          <img width="32px" src={arrowIcon} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyTeaser;
