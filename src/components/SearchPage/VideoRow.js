import React from 'react'
import './VideoRow.css'

function VideoRow({views, subs, description, timestamp, channel, title, image}) {
    return (
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow-text">
                <h3>{title}</h3>
                <p className="videoRow-headline">
                {channel} • <span className="videoRow-subNumber">{subs}</span> Subscribers {views} views • {timestamp}</p>
                <p className="videoRow-description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
