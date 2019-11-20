import React from 'react';
import TestIcon from '../../images/TestIcon.png';
import subforumPFPTest from '../../images/subforumPFPTest.png';
import comment from '../../images/comment.png';
import granblueBanner from '../../images/granblueBanner.png';

class MobileCharForum extends React.Component {
    render(){
        return (
            <div>
                <section id="sectionHeader">
                {/* <img src={TestIcon} alt="Subforum Char Logo" id="subforumLogo" /> */}
                {/* <p id="sectionSubhead">Katalina Discussion</p> */}
                <img src={granblueBanner} alt="granblueGrass" id="subforumBanner" />
                </section>
                {/* Adding Create A Topic Button */}
                <div id="subforumButtons">
                <button id="subforumCreateButton">Create Topic</button>
                <select id="subforumSelect">
                    <option defaultValue="Selected">Please Select A Tag:</option>
                    <option value="Combos">Combos</option>
                    <option value="Mixups">Mixups</option>
                    <option value="Okizeme">Okizeme</option>
                </select>
                </div>
                {/* Section for Posts */}
                <section id="subforumPostListing">
                    <img src={subforumPFPTest} alt="Sub Post User Logo" id="subpostUserLogo" />
                    <div id="subforumPostContent">
                    <h3 id="subforumPostHead">Katalina's Okizeme Options
                    </h3>
                    <button>Okizeme</button>
                    <p id="subpostTimestamp">Last post 4h ago</p>
                    </div>
                    <img src={subforumPFPTest} alt="Sub Post User Logo" id="subpostUserLogo" />
                    <div id="subforumPostContent">
                    <h3 id="subforumPostHead">Katalina's Okizeme Options
                    </h3>
                    <button>Okizeme</button>
                    <p id="subpostTimestamp">Last post 4h ago</p>
                    </div>
                    <img src={subforumPFPTest} alt="Sub Post User Logo" id="subpostUserLogo" />
                    <div id="subforumPostContent">
                    <h3 id="subforumPostHead">Katalina's Okizeme Options
                    </h3>
                    <button>Okizeme</button>
                    <p id="subpostTimestamp">Last post 4h ago</p>
                    </div>
                    <img src={subforumPFPTest} alt="Sub Post User Logo" id="subpostUserLogo" />
                    <div id="subforumPostContent">
                    <h3 id="subforumPostHead">Katalina's Okizeme Options
                    </h3>
                    <button>Okizeme</button>
                    <p id="subpostTimestamp">Last post 4h ago</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default MobileCharForum;