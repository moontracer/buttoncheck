import React from 'react';
import gbvsKat from '../../images/gbvsKat.png';

class MobileCharInfo extends React.Component {
    render(){
        return (
            <div>
                <img id="charImage" src={gbvsKat} alt="characterImage" />
                {/* Character Information */}
                <div>
                    {/* <p>PLAYSTYLE: </p>
                    <p>STRENGTHS: </p>
                    <p>WEAKNESSES: </p> */}
                    <p id="overviewDescription">Katalina is a character that takes advantage of her superior range and damage. 
                        Most of her normals control space very well and lead into high damage in many situations. 
                        Although she lacks good traditional mixup, she is heavily rewarded for being as safe as possible and punishing her 
                        opponents' mistakes. Even though her normals have excellent range, they are relatively slow, which can cause her 
                        trouble on defense.</p>
                </div>
            </div>
        )
    }
}

export default MobileCharInfo;