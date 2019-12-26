import React from 'react';
import {Link} from 'react-router-dom';

function closeNav(){
    console.log("Test");
}

function MobileNavMenu(props){
    return (
        <ul className={props.menuActivated ? "navSideMenuShow" : "navSideMenuHide"}>
            <Link to="/sign_up" className="navLink" onClick={closeNav}><li id="navSideMenuHead" className="navSideMenuItem">Register</li></Link>
            <Link to="/sign_in" className="navLink"><li className="navSideMenuItem">Sign In</li></Link>
            <Link to="/about" className="navLink"><li className="navSideMenuItem">Rules & Contact</li></Link>
        </ul>
    );
}

export default MobileNavMenu;

/*
Let's think about what exactly I'm trying to accomplish here...

what I'm trying to do is assign a click event to each of the nav items that closes the navMenu on click.

How would I go about doing that?

So I'd write a function that makes it so when the user clicks it I just update the prop

how about creating my "own" state in this component then using that stae to update the props of the parent?

revisit this later on.
*/