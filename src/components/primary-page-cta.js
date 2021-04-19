import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const PrimaryPageCTA = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
}) => {
  return (
    <section className='primary-page-cta'>
      <div className='inner'>
        <div className='column'>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </div>
        <div className='row'>
          <div className='primary-button'>{primaryButtonText}</div>
          <div className='secondary-button'>{secondaryButtonText}</div>
        </div>
      </div>
    </section>
  );
};

export default PrimaryPageCTA;

PrimaryPageCTA.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  primaryButtonText: PropTypes.string.isRequired,
  secondaryButtonText: PropTypes.string.isRequired,
};
