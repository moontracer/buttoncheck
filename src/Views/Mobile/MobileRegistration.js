import React from 'react';
import MobileRulesModal from './MobileRulesModal';

class MobileRegistration extends React.Component {
    render(){
        return (
            <div className="infoForm">
            <h1 id="signupLabel">Become a Skyfarer</h1>
            <form method="POST">
                <label className="registrationLabel" htmlFor="registerName">Username</label>
                <input className="infoText" type="text" name="name" id="registerName" />
                <p className="registerInfo">Your username may <strong>not</strong> contain spaces.</p>
                <label className="registrationLabel" htmlFor="registerPass">Password</label>
                <input className="infoText" type="password" name="pass" id="registerPass" />
                <p className="registerInfo">Use something that you can remember!</p>
                <label className="registrationLabel" htmlFor="registerEmail">Email</label>
                <input className="infoText" type="email" name="userEmail" id="registerEmail" />
                <p className="registerInfo">Your email address won't be given to anyone.</p>
                {/* Submit button needs an onchange handler*/}
                <input type="Submit" className="infoSubmit" value="Register" />
            </form>
            {/* REACT ROUTER ATTACH MODAL */}
            <footer>By registering, you agree to the  <a className="test" id="registerFooter">rules and policies of Skybound Arts.</a></footer>
            <MobileRulesModal />
            </div>
        )
    }
}

export default MobileRegistration;