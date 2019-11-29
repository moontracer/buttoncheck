import React from 'react';

function MobileNavMenu(props){
    return (
        <div className="navSideMenu">
        <ul id={props.menuActivated ? "navSideMenuShow" : "navSideMenuHide"}>
            <li>Katalina</li>
            <li>Zeta</li>
            <li>Percival</li>
            <li>Metera</li>
            <li>Ferry</li>
        </ul>
        </div>
    );
}

export default MobileNavMenu;