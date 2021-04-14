import "../sass/styles.scss";
import React from "react";

const PressReleaseTeaser = (props) => {
  return (
    <div className="press-release-teaser">
      <img src={props.img} alt=""></img>
      <h4>{props.title}</h4>
      <p className="body">{props.description}</p>
    </div>
  );
};

export default PressReleaseTeaser;
