import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'

import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                 <MenuIcon />
                <div className="header-logo">
                    <p style={{fontSize: '20px'}}>Yu
                    <span style={{border: '1px solid black', backgroundColor: 'red', color: 'white',
                                borderRadius: '15px', padding: '5px'}}>Tube</span>
                    </p>
                </div>
            </div>
            <div className="header-center">
                 <input type="text" />
                <SearchIcon className="header-button" />
            </div>
            <div className="header-right">
                 <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar alt="Tuyen Pham" src="https://i.ibb.co/YXd2tkH/39195239-1157498061055912-1711900911086862336-n.jpg" />
            </div>
        </div>
    )
}

export default Header
