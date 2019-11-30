import React from 'react';

function MobileNavMenu(props){
    return (
        <ul id={props.menuActivated ? "navSideMenuShow" : "navSideMenuHide"}>
            <li>Katalina</li>
            <li>Zeta</li>
            <li>Percival</li>
            <li>Metera</li>
            <li>Ferry</li>
        </ul>
    );
}

export default MobileNavMenu;