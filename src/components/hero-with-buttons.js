import '../sass/styles.scss';
import React from 'react';
import ReactMarkdown from "react-markdown";
import PropTypes from 'prop-types';
import LinkButton from "./link-button";

const Hero = ({ title, description, button }) => {
    return (
        <div className='hero-component'>
            <div className='inner'>
                <h1>{title}</h1>
                <ReactMarkdown className='body' children={description}/>
                {button.length &&
                <div>
                    <LinkButton src={button[0].button_link} text={button[0].button_text}/>
                    <LinkButton type='secondary' src={button[1].button_link} text={button[1].button_text}/>
                </div>
                }
            </div>

        </div>
    );
};

export default Hero;

Hero.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};
