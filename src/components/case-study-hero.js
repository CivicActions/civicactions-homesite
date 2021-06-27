import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const CaseStudyHero = ({ client, title, description }) => {
    return (
        <section className='hero-component'>
            <div className='inner'>
                <h1>{title}</h1>
                <span className='client-name'>{client}</span>
                <p className='body'>{description}</p>
            </div>

        </section>
    );
};

export default CaseStudyHero;

CaseStudyHero.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    client: PropTypes.string,
};
