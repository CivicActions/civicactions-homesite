import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../components/link-button';

const PrimaryPageCTA = ({
  title,
  subtitle,
  buttons,
}) => {
  return (
    <section className='primary-page-cta'>
      <div className='inner'>
        <div className='column'>
          <h2>{title}</h2>
          <span className={'h3'}>{subtitle}</span>
        </div>
        <div className='row'>
          {buttons.length && buttons.map((btn, index) => (
                <LinkButton
                    src={btn.button_link}
                    type='secondary'
                    text={btn.button_text}
                />
            ))}

        </div>
      </div>
    </section>
  );
};

export default PrimaryPageCTA;

PrimaryPageCTA.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  buttons: PropTypes.array
};
