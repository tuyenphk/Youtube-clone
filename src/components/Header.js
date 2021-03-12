import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <MenuIcon />
            <div className="header_logo">
                <p>Yu<span>Tube</span></p>

            </div>
            <input type="text" />
            <SearchIcon />
        </div>
    )
}

export default Header
