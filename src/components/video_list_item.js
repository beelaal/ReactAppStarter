/**
 * Created by MBilal on 4/15/2018.
 */

import React from 'react';


const VideoListItem = (video) => {
    const imageUrl = video.video.snippet.thumbnails.default.url;
    return (
        <li className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <image className='media-object' src = {imageUrl} />
                </div>
                <div className='media-body'>
                    <div className='media-heading'>{video.video.snippet.title}</div>
                </div>
            </div>

        </li>
    )
}

export default VideoListItem;

