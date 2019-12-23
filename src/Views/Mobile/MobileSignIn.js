import React from 'react';

function MobileSignIn(){
    return (
        // see if I need to set the viewport height for this div!
        <div id="SignInContainer">
            <h1 id="SignInHeader">Sign In</h1>
            <form method="GET">
            <input className="SignInField" type="text" placeholder="Username" />
            <input className="SignInField" type="password" placeholder="Password" />
            <input id="SignInSubmit" type="Submit" value="Log In" />
            </form>
            <button id="RegisterRedirect">Register</button>
        </div>
    )
}

export default MobileSignIn;