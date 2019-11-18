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
                {/* Adding Create A Topic Button */}
                <div id="subforumButtons">
                <button id="subforumCreateButton">Create Topic</button>
                <select id="subforumSelect">
                    <option selected="Selected">Please Select A Tag:</option>
                    <option value="Combos">Combos</option>
                    <option value="Mixups">Mixups</option>
                    <option value="Okizeme">Okizeme</option>
                </select>
                </div>
                {/* Section for Posts */}
                <section id="subforumPostListing">
                    <img src={TestIcon} alt="Sub Post User Logo" id="subpostUserLogo" />
                    <div id="alignPostListing">
                    <h3 id="subforumPostHead">Katalina's Okizeme Options</h3>
                    <button>Okizeme</button>
                    </div>
                </section>
            </div>
        )
    }
}

export default MobileCharForum;