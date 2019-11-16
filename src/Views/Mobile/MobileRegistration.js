import React from 'react';

class MobileRegistration extends React.Component {
    render(){
        return (
            <form method="POST">
                <input type="text" placeholder="Username" name="name" />
                <input type="password" placeholder="Password" name="pass" />
                <input type="Submit" value="Submit" />
            </form>
        )
    }
}

export default MobileRegistration;