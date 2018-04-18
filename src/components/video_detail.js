/**
 * Created by MBilal on 4/15/2018.
 */
import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>;
    }
    console.log('edaaaaaaaaaaa')
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className='embed-responsive embed-responsivr 16by9'>
                <iframe className='embed-responsive-item' src={url}>**************</iframe>
            </div>
            <div className='details'>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoDetail;