import React from 'react';
import PropTypes from 'prop-types';
import arrowIcon from "../files/icons/arrow-icon.svg";

const JobGrid = ({ title }) => {
    return (
        <div className="job-grid--wrapper">
            <div className="job-grid">
                <div className='body job'>
                    <p>{title}</p>
                    <img width='32px' src={arrowIcon} alt=''></img></div>
            </div>
        </div>
    );
};

export default JobGrid;

JobGrid.propTypes = {
    title: PropTypes.string,
};