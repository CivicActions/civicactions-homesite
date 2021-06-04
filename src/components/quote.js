import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import quotePatternGraphic from '../files/images/quote-pattern-graphic.png';

const Quote = ({ classes, quote, source }) => {
  return (
    <div className={`staff-quote quote ${classes}`}>
      <div className='inner'>
        <div className='quote'>
          <p className='h3'>{quote}</p>
          <p className='body source'>{source}</p>
        </div>
        <img src={quotePatternGraphic} alt='' className='pattern'></img>
      </div>
    </div>
  );
};

export default Quote;

Quote.propTypes = {
  quote: PropTypes.string,
  source: PropTypes.string,
  classes: PropTypes.string,
};
