import React from 'react';

class MobileRegistration extends React.Component {
    render(){
        return (
            <div className="infoForm">
            <h1 id="signupLabel">Create an Account</h1>
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
                <p>Please list your pronouns here! <strong>Users that register with joke pronouns will be banned.</strong></p>
                {/* Submit button needs an onchange handler*/}
                <input type="Submit" className="infoSubmit" value="Register" />
            </form>
            </div>
        )
    }
}

export default MobileRegistration;