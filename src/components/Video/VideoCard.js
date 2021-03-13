import React from 'react'
import Avatar from '@material-ui/core/Avatar'

function VideoCard({image,title,channel,views, timestamp, channelImg}) {
    return (
        <div className="videoCard">
            <img src={image} alt="" />
            <div className="videoCard-info">
                <Avatar className="videoCard-avatar" alt={channel} src={channelImg} />
                <div className="videoCard-text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views}.{timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
