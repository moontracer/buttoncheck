import React from 'react';

function MobileNavMenu(props){
    return (
        <ul className={props.menuActivated ? "navSideMenuShow" : "navSideMenuHide"}>
            <li id="navSideMenuHead" className="navSideMenuItem">Gran</li>
            <li className="navSideMenuItem">Katalina</li>
            <li className="navSideMenuItem">Charlotta</li>
            <li className="navSideMenuItem">Lancelot</li>
            <li className="navSideMenuItem">Percival</li>
            <li className="navSideMenuItem">Ferry</li>
            <li className="navSideMenuItem">Lowain</li>
            <li className="navSideMenuItem">Ladiva</li>
            <li className="navSideMenuItem">Metera</li>
            <li className="navSideMenuItem">Zeta</li>
            <li className="navSideMenuItem">Vaseraga</li>
        </ul>
    );
}

export default MobileNavMenu;