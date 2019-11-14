import React from 'react';
import gbvsLogo from '../../images/gbvsLogo.png';
import menuIcon from '../../images/menuIcon.png';

function MobileNav(){
    return (
        <nav>
            <img src={menuIcon} id="navMenuMarker" alt="menuMarker" />
            <img src={gbvsLogo} id="navMainLogo" alt="siteLogo" />
            <span id="loginContainer"><a href="#" id="navLogin">LOGIN</a></span>
        </nav>
    )
}

export default MobileNav;