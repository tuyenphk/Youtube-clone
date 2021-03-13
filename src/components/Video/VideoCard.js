import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './Video.css'

function VideoCard({image,title,channel,views, timestamp, channelImg, link}) {
    return (
        <div className="videoCard">
            <img className="videoCard-thumbnail" src={image} alt="" />
            <div className="videoCard-info">
                <Avatar className="videoCard-avatar" alt={channel} src={channelImg} />
                <div className="videoCard-text">
                    <a href={link}><h4>{title}</h4></a>
                    <p>{channel}</p>
                    <p>{views} • {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
