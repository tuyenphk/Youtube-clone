import React from 'react'
import './Video.css'
import VideoCard from './VideoCard.js'

function Video() {
    return (
        <div className="video">
            <h2>Recommended</h2>
            <div className="display">
                <VideoCard 
                    title="10 Street Foods UNDER $1 in Saigon, Vietnam!!! Street Food Dollar Menu 2!!"
                    views="2.6M Views"
                    timestamp="3 days ago"
                    channelImg="https://i.ibb.co/378j42C/unnamed-1.jpg"
                    channel="Best Ever Food Review Show"
                    image="https://i.ibb.co/k1NYbzT/2.png"
                    link="https://www.youtube.com/watch?v=c_erjcMFT1M"
                />
                <VideoCard 
                    title="Vietnam $100 Street Food Challenge!! Best Street Food in Saigon!!!"
                    views="6.5M Views"
                    timestamp="6 days ago"
                    channelImg="https://i.ibb.co/378j42C/unnamed-1.jpg"
                    channel="Best Ever Food Review Show"
                    image="https://i.ibb.co/5KY6k4d/3.png"
                />
                 <VideoCard 
                    title="$2 PHO vs $100 PHO - Northern VS Southern Pho!"
                    views="7.7M Views"
                    timestamp="15 days ago"
                    channelImg="https://i.ibb.co/378j42C/unnamed-1.jpg"
                    channel="Best Ever Food Review Show"
                    image="https://i.ibb.co/tP682DF/4.png"
                />
                 <VideoCard 
                    title="Best BREAKFAST in Saigon for CHEAP! Can you even call this breakfast??"
                    views="1.6M Views"
                    timestamp="18 days ago"
                    channelImg="https://i.ibb.co/378j42C/unnamed-1.jpg"
                    channel="Best Ever Food Review Show"
                    image="https://i.ibb.co/17Q9Pkn/5.png"
                />
                 <VideoCard 
                    title="CHEAP and TASTY STREET FOOD for under $1 | Vietnamese Street Food at Turtle Lake, Saigon"
                    views="2M Views"
                    timestamp="25 days ago"
                    channelImg="https://i.ibb.co/378j42C/unnamed-1.jpg"
                    channel="Best Ever Food Review Show"
                    image="https://i.ibb.co/D1P9V3N/6.png"
                />
                
            </div>
        </div>
    )
}

export default Video
