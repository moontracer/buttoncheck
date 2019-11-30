import React from 'react';

function MobileNavMenu(props){
    return (
        <ul id={props.menuActivated ? "navSideMenuShow" : "navSideMenuHide"}>
            <li>Gran</li>
            <li>Katalina</li>
            <li>Charlotta</li>
            <li>Lancelot</li>
            <li>Percival</li>
            <li>Ferry</li>
            <li>Lowain</li>
            <li>Ladiva</li>
            <li>Metera</li>
            <li>Zeta</li>
            <li>Vaseraga</li>
        </ul>
    );
}

export default MobileNavMenu;