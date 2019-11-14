import React from 'react';
import gbvsKat from '../../images/gbvsKat.png';

class MobileCharInfo extends React.Component {
    render(){
        return (
            <div>
                <img id="charImage" src={gbvsKat} alt="characterImage" />
                {/* Character Information */}
                <div>
                    <p>PLAYSTYLE: </p>
                    <p>STRENGTHS: </p>
                    <p>WEAKNESSES: </p>
                </div>
            </div>
        )
    }
}

export default MobileCharInfo;