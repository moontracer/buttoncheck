import React from 'react';
import subforumPFPTest from '../../images/subforumPFPTest.png';

function MobileNavMenu(props){
    return (
        <ul className={props.menuActivated ? "navSideMenuShow" : "navSideMenuHide"}>
            <li id="navSideMenuHead" className="navSideMenuItem">Register</li>
            <li className="navSideMenuItem">Sign In</li>
            <li className="navSideMenuItem">About</li>
        </ul>
    );
}

export default MobileNavMenu;