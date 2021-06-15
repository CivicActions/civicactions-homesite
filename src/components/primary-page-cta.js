import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../components/link-button';

const PrimaryPageCTA = ({
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
            <LinkButton
                src={primaryButtonLink ? primaryButtonLink : '/contact'}
                type='primary'
                text={primaryButtonText ? primaryButtonText : 'Put us to work'}
            />
            <LinkButton
                src={secondaryButtonLink ? secondaryButtonLink: '/careers'}
                type='secondary'
                text={secondaryButtonText ? secondaryButtonText : 'Join our team'}
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
  primaryButtonText: PropTypes.string,
  primaryButtonLink: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  secondaryButtonLink: PropTypes.string,
};
