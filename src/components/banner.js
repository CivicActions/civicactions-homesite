import '../sass/styles.scss';
import React, { useState } from 'react';
import closeIcon from '../files/icons/close-icon.svg';
import PropTypes from 'prop-types';

const Banner = ({ boldText, regularText, link }) => {
  const [hide, setHide] = useState(false);
  let close = () => setHide(true);

  return hide ? (
    <div></div>
  ) : (
    <div role='banner' aria-label='homepage banner' className='banner body-small'>
    <a href={link}>
      <div className='inner'>
        <p className='banner-text'>
          <strong>{boldText}</strong> <span>{regularText}</span>
        </p>
        <div
          onKeyDown={() => {}}
          tabIndex={0}
          role='button'
          className='close-icon'
          onClick={close}>
          <img src={closeIcon} alt='Close'></img>
        </div>
      </div>
    </a>
    </div>
  );
};

export default Banner;

Banner.propTypes = {
  boldText: PropTypes.string,
  regularText: PropTypes.string,
  link: PropTypes.string,
};
