import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const CaseStudyHero = ({ client, title, description }) => {
    return (
        <div className='hero-component'>
            <div className='inner'>
                <h1>{title}</h1>
                <span className='client-name'>{client}</span>
                <p className='body'>{description}</p>
            </div>

        </div>
    );
};

export default CaseStudyHero;

CaseStudyHero.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    client: PropTypes.string,
};
