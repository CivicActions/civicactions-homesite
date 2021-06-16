import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import quotePatternGraphic from '../files/images/quote-pattern-graphic.png';

const StaffQuote = ({ img, quote, name, role, classes }) => {

  return (
    <div className={`staff-quote quote ${classes}`}>
      <div className='inner'>
        <img src={img} alt='' className='picture'></img>
        <div className='quote'>
          <h4>{quote}</h4>
          <div className='body'>{name}</div>
          <div className='body'>{role}</div>
        </div>
        <img src={quotePatternGraphic} alt='' className='pattern'></img>
      </div>
    </div>
  );
};

export default StaffQuote;

StaffQuote.propTypes = {
  img: PropTypes.any,
  quote: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  classes: PropTypes.string,
};
