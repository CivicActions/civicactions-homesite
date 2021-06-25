import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const DitapPageCTA = ({
  title,
  subtitle,
  primaryButtonText, primaryButtonLink,
  secondaryButtonText, secondaryButtonLink,
}) => {

  return (
      <section className='primary-page-cta'>
        <div className='inner'>
          <div className='cta-column primary-page-cta__text'>

            <h2>{title}</h2>
            <span className={'h3'}>{subtitle}</span>

          </div>
          <div className='cta-column primary-page-cta__buttons'>
            <a
                href={primaryButtonLink ? primaryButtonLink : '/contact'}
                className='button button__primary'
            >{primaryButtonText ? primaryButtonText : 'Put us to work'}</a>
            <a
                href={secondaryButtonLink ? secondaryButtonLink: '/careers'}
                className='button button__secondary'
            >{secondaryButtonText ? secondaryButtonText : 'Join our team'}</a>
          </div>
        </div>
      </section>
  );
};

export default DitapPageCTA;

DitapPageCTA.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  primaryButtonText: PropTypes.string,
  primaryButtonLink: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  secondaryButtonLink: PropTypes.string,
};
