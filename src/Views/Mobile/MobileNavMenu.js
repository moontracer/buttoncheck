import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

function MobileNavMenu(props){
    return (
        <BrowserRouter>
        <ul className={props.menuActivated ? "navSideMenuShow" : "navSideMenuHide"}>
            <li id="navSideMenuHead" className="navSideMenuItem"><Link to="/sign_up">Register</Link></li>
            <li className="navSideMenuItem"><Link to="/sign_in">Sign In</Link></li>
            <li className="navSideMenuItem"><Link to="/about">About</Link></li>
        </ul>
        </BrowserRouter>
    );
}

export default MobileNavMenu;