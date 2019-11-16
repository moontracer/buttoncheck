import React from 'react';
import TestIcon from '../../images/TestIcon.png';

/*
The purpose of this class is to define the character name that's going to be displayed here, as well as the styling of the banner. 
The respective character name will be passed in via props.
*/
class MobileCharHeader extends React.Component {
    render(){
    return (
        <div id="mobileHeader">
            {/* Character Name Defined here */}
            <img src={TestIcon} alt="KatPortrait"  id="alterImage" />
            <p>Katalina</p>
            <p id="newDesc"><em>Katalina</em> is a character that takes advantage of her superior range and damage. 
                        Most of her normals control space very well and lead into high damage in many situations. 
                        Although she lacks good traditional mixup, she is heavily rewarded for being as safe as possible and punishing her 
                        opponents' mistakes. Even though her normals have excellent range, they are relatively slow, which can cause her 
                        trouble on defense.</p>
            <button>Learning Katalina</button>
            <button>Discussion Boards</button>
        </div>
    )
    }
}

export default MobileCharHeader;