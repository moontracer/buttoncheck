import React from 'react';
import TestIcon from '../../images/TestIcon.png';

class MobileCharForum extends React.Component {
    render(){
        return (
            <div>
                <section id="sectionHeader">
                <img src={TestIcon} alt="Subforum Char Logo" id="subforumLogo" />
                <p id="sectionSubhead">Katalina Discussion</p>
                </section>
                <select id="subforumSelect">
                    <option selected="Selected">Please Select A Tag:</option>
                    <option value="Combos">Combos</option>
                    <option value="Mixups">Mixups</option>
                    <option value="Okizeme">Okizeme</option>
                </select>
            </div>
        )
    }
}

export default MobileCharForum;