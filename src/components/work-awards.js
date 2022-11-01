import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const WorkAwards = ({ client, link, title, classname }) => {
    return (
        <div className='work-awards--component'>
            <div className='inner'>
                <a href={link} className={classname}>{title}</a>
                <p className='body'>{client}</p>

            </div>

        </div>
    );
};

export default WorkAwards;

WorkAwards.propTypes = {
    client: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
};
