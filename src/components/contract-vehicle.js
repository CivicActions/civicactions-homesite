import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const ContactVehicle = ({ icon, alt, name, info, contract, link }) => {
    return (
        <div className='contact-vehicle--component'>

                <img src={icon} alt={alt}/>
                <h3>{name}</h3>
                <p className='body'>{info}</p>
                {contract && <p className='body'>{contract}</p>}
                {link && <a href={link}>View details</a>}



        </div>
    );
};

export default ContactVehicle;

ContactVehicle.propTypes = {
    icon: PropTypes.any,
    alt: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string,
    contract: PropTypes.string,
    link: PropTypes.string,
};
