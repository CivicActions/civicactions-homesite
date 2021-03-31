import "../sass/styles.scss";
import React, { useState } from "react";
import closeIcon from "../files/icons/close-icon.svg";

const Banner = (props) => {
  const [hide, setHide] = useState(false);
  let close = () => setHide(true);

  return hide ? (
    <div></div>
  ) : (
    <div className="banner body-small">
      <div className="inner">
        <p className="banner-text">
          <strong>{props.boldText}</strong> <span>{props.regularText}</span>
        </p>
        <img
          src={closeIcon}
          alt="Close"
          className="close-icon"
          onClick={close}></img>
      </div>
    </div>
  );
};

export default Banner;
