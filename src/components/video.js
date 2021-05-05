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
            <div class="inner">
                <div class="video-container">
                    <iframe title={videotitle} src={videolink} width="100%" frameBorder="0" webkitallowfullscreen
                        mozallowfullscreen allowFullScreen></iframe>
                </div>
                <div class="video--text">
                    {videotext}
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
