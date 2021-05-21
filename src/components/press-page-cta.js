import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../components/link-button';

const PressPageCTA = ({
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
          <LinkButton src='/services' type='primary' text={primaryButtonText} />
          <LinkButton
            src='/contracting'
            type='secondary'
            text={secondaryButtonText}
          />
        </div>
      </div>
    </section>
  );
};

export default PressPageCTA;

PressPageCTA.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  primaryButtonText: PropTypes.string.isRequired,
  secondaryButtonText: PropTypes.string.isRequired,
};
