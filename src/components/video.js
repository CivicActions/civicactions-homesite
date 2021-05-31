import '../sass/styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Video = ({
    videolink,
    videotitle,
    videotext,
}) => {
    return (
        <section className='video'>
            <div className="inner">
                <div className="video-container">
                    <iframe title={videotitle} src={videolink} width="100%" frameBorder="0" webkitallowfullscreen
                        mozallowfullscreen allowFullScreen></iframe>
                </div>
                <div className="video--text">
                    <p className="body">{videotext}</p>

                </div>
            </div>
        </section>
    );
};

export default Video;

Video.propTypes = {
    videolink: PropTypes.string.isRequired,
    videotitle: PropTypes.string.isRequired,
    videotext: PropTypes.string,
};
