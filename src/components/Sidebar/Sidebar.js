import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'

import './Sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
        </div>
    )
}

export default Sidebar

