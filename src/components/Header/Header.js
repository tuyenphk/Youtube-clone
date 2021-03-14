import React, {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    const [inputSearch, setInputSearch] = useState("")
    return (
        <div className="header">
            <div className="header-left">
                 <MenuIcon />
                 <Link to="/">
                    <div className="header-logo">
                    <p style={{fontSize: '20px'}}>Yu
                    <span style={{border: '1px solid black', backgroundColor: 'red', color: 'white',
                                borderRadius: '15px', padding: '5px'}}>Tube</span>
                    </p>
                </div>
                 </Link>
            </div>
            <div className="header-center">
                 <input value={inputSearch} 
                        onChange={e => setInputSearch(e.target.value)} 
                        placeholder="Search" type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header-button" />
                </Link>
                
            </div>
            <div className="header-right">
                <VideoCallIcon className="header-icon" />
                <AppsIcon className="header-icon" />
                <NotificationsIcon className="header-icon" />
                <Avatar alt="Tuyen Pham" src="https://i.ibb.co/YXd2tkH/39195239-1157498061055912-1711900911086862336-n.jpg" />
            </div>
        </div>
    )
}

export default Header
