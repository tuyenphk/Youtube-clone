import React from 'react'
import './Video.css'
import VideoCard from './VideoCard.js'

function Video() {
    return (
        <div className="video">
            <h2>Recommended</h2>
            <div className="display">
                <VideoCard 
                    title="5 Uses for Cloud functions"
                    views="850K Views"
                    timestamp="1 day ago"
                    channelImg="https://i.ibb.co/DwfKRzx/touchicon-180.png"
                    channel="Firebase"
                    image="https://i.ibb.co/VgKYK69/Capture.png"
                />
                <VideoCard 
                    title="The Truth about OnePlus Nord!"
                    views="5M Views"
                    timestamp="58 minutues ago"
                    channelImg="https://i.ibb.co/rHM93DZ/unnamed.jpg"
                    channel="Marques Brownlee"
                    image="https://i.ibb.co/9NQvj68/1.png"
                />
                <VideoCard 
                    title="10 Street Foods UNDER $1 in Saigon, Vietnam!!! Street Food Dollar Menu 2!!"
                    views="2.6M Views"
                    timestamp="3 days ago"
                    channelImg="https://i.ibb.co/378j42C/unnamed-1.jpg"
                    channel="Best Ever Food Review Show"
                    image="https://i.ibb.co/k1NYbzT/2.png"
                />
                <VideoCard 
                    title="Vietnam $100 Street Food Challenge!! Best Street Food in Saigon!!!"
                    views="6.5M Views"
                    timestamp="6 days ago"
                    channelImg="https://i.ibb.co/378j42C/unnamed-1.jpg"
                    channel="Best Ever Food Review Show"
                    image="https://i.ibb.co/5KY6k4d/3.png"
                />
            </div>
        </div>
    )
}

export default Video
