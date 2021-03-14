import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage-filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://i.ibb.co/378j42C/unnamed-1.jpg"
                channel="Best Ever Food Review Show"
                verified
                subs="6,59M"
                noOfVideos={409}
                description="I travel to unique parts of the world on the hunt for the best food each country has to offer and share these stories with you in my ..." />
        
            <hr />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="This video is made in VietNam"
                timestamp="10 minutes"
                channel="Best Ever Food Review Show"
                title="SASHIMI: Use the Iyakame process. Scale the fish skin. Remove the head and clean. Cut the tail and fillet the fish. Cut the fillet in "
                image="https://i.ibb.co/tp3X5Sq/10.png"
             />
        
        
        </div>
    )
}

export default SearchPage
