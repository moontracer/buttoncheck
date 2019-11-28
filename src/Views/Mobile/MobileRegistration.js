import React from 'react';

class MobileRegistration extends React.Component {
    render(){
        // TO DO: Allow users to reveal passwords! (This can't be done on mobile though right)
        return (
            <div className="infoForm">
            <h1 id="signupLabel">Become a Skyfarer</h1>
            <form method="POST">
                {/* infoText is Not A Great Name */}
                {/* Uses html labels for Username, Email, Pass, and Pronouns. 
                Explain what each option is with a little subtext. */}
                <label htmlFor="registerName">Username</label>
                <input className="infoText" type="text" name="name" id="registerName" />
                <p>Your username may <strong>not</strong> contain spaces.</p>
                <label htmlFor="registerPass">Password</label>
                <input className="infoText" type="password" name="pass" id="registerPass" />
                <p>Use something nice and sweet that you can remember!</p>
                <label htmlFor="registerEmail">Email</label>
                <input className="infoText" type="email" name="userEmail" id="registerEmail" />
                <p>Your email address won't be given to anyone.</p>
                <label htmlFor="registerPronouns">Pronouns</label>
                <input className="infoText" type="text" name="pronouns" id="registerPronouns" /> 
                <p>Please list your pronouns here!</p>
                {/* Submit button needs an onchange handler*/}
                <input type="Submit" className="infoSubmit" value="Register" />
            </form>
            {/* Revisit this. Target blank is supported by React Router! */}
            <footer>By registering, you agree to the <a href="https://www.google.com" id="registerFooter">forum rules and policies.</a></footer>
            </div>
        )
    }
}

export default MobileRegistration;