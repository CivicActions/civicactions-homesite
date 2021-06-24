import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ title, description }) => {
    return (
        <section className='hero-component'>
            <div className='inner'>
                <h1>{title}</h1>
                <p className='body'>{description}</p>
            </div>

        </section>
    );
};

export default Hero;

Hero.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};
