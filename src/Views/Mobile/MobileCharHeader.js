import React from 'react';

/*
The purpose of this class is to define the character name that's going to be displayed here, as well as the styling of the banner. 
The respective character name will be passed in via props.
*/
class MobileCharHeader extends React.Component {
    render(){
    return (
        <div id="mobileHeader">
            {/* Character Name Defined here */}
            <p>Katalina</p>
        </div>
    )
    }
}

export default MobileCharHeader;