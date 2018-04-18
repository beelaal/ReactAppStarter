/**
 * Created by MBilal on 4/15/2018.
 */

import React from 'react';


const VideoListItem = (video) => {
     console.log('thhhhhhssssh', video);

    const imageUrl = video.snippet.thumbnails.default.url;
    console.log(imageUrl);
    return (
        <li className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <image className='media-object' />
                </div>
                <div className='media-body'>
                    <div className='media-heading'></div>
                </div>
            </div>

        </li>
    )
}

export default VideoListItem;

