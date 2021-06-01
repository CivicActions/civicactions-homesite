import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../components/link-button';

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

          <h2>{title}</h2>
          <span className={'h3'}>{subtitle}</span>

        </div>
        <div className='row'>
          <LinkButton src='/contact' type='primary' text={primaryButtonText} />
          <LinkButton
            src='/careers'
            type='secondary'
            text={secondaryButtonText}
          />
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
