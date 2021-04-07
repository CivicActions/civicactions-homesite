import "../sass/styles.scss";
import React from "react";

const CaseStudyTeaser = (props) => {
  return (
    <div className="case-study-teaser">
      <img src={props.img} alt="Client Logo"></img>
      <div className="img-overlay"> </div>
      <div className="info">
        <h6>{props.title}</h6>
        <h4>{props.description}</h4>
      </div>
    </div>
  );
};

export default CaseStudyTeaser;
