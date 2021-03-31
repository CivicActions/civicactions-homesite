import "../sass/styles.scss";
import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.icon} alt="Icon"></img>
      <h5>{props.title}</h5>
    </div>
  );
};

export default Card;
