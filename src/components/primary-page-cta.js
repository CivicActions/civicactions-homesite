import "../sass/styles.scss";
import React from "react";

const PrimaryPageCTA = (props, { data }) => {
  return (
    <section className="primary-page-cta">
      <div className="inner">
        <div className="column">
          <h3>{props.title}</h3>
          <h5>{props.subtitle}</h5>
        </div>
        <div className="row">
          <div className="primary-button">{props.primaryButtonText}</div>
          <div className="secondary-button">{props.secondaryButtonText}</div>
        </div>
      </div>
    </section>
  );
};

export default PrimaryPageCTA;
