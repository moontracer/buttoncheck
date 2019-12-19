import React from 'react';
import subforumPFPTest from '../../images/subforumPFPTest.png';
import granblueBanner from '../../images/granblueBanner.png';
import { MessageCircle, Star } from 'react-feather';
import metera from '../../charImages/metera.png';
import katalina from '../../charImages/katalina.png';
import MobileVODFilter from './MobileVODFilter.js';

class MobileVODList extends React.Component {
    render(){
        return (
            <div>
                <section id="forumsectionHeader">
                <img src={granblueBanner} alt="granblueGrass" id="subforumBanner" />
                </section>
                <MobileVODFilter />
                {/* Adding Create A Topic Button */}

                {/* <div id="subforumButtons">
                <button id="subforumCreateButton">Create Topic</button>
                <select id="subforumSelect">
                    <option defaultValue="Selected">Please Select A Tag:</option>
                    <option value="Combos">Combos</option>
                    <option value="Mixups">Mixups</option>
                    <option value="Okizeme">Okizeme</option>
                </select>
                </div> */}
                {/* Section for Posts */}

                {/* <section id="subforumPostListing">
                    <div className="subforumPostWrapper">
                    <img src={subforumPFPTest} alt="Sub Post User Logo" id="subpostUserLogo" />
                    <div id="subforumPostContent">
                    <h3 id="subforumPostHead">Katalina's Okizeme Options
                    </h3>
                    <button className="subforumPostTag">Okizeme</button>
                    <p id="subpostCreator"> Moontracer &#8226; </p>
                    <MessageCircle id="commentIcon" size={20} />
                    <span> 190 </span>
                    </div>
                    </div>
                    <div className="subforumPostWrapper">
                    <img src={subforumPFPTest} alt="Sub Post User Logo" id="subpostUserLogo" />
                    <div id="subforumPostContent">
                    <h3 id="subforumPostHead">Katalina's Okizeme Options
                    </h3>
                    <button className="subforumPostTag">Okizeme</button>
                    </div>
                    </div>
                    <div className="subforumPostWrapper">
                    <img src={subforumPFPTest} alt="Sub Post User Logo" id="subpostUserLogo" />
                    <div id="subforumPostContent">
                    <h3 id="subforumPostHead">Katalina's Okizeme Options
                    </h3>
                    <button className="subforumPostTag">Okizeme</button>
                    <p id="subpostTimestamp">Last post 4h ago</p>
                    </div>
                    </div>
                    <div className="subforumPostWrapper">
                    <img src={subforumPFPTest} alt="Sub Post User Logo" id="subpostUserLogo" />
                    <div id="subforumPostContent">
                    <h3 id="subforumPostHead">Katalina's Okizeme Options
                    </h3>
                    <button className="subforumPostTag">Okizeme</button>
                    <p id="subpostTimestamp">Last post 4h ago</p>
                    </div>
                    </div>
                </section> */}

                {/* Formatting style for VODs! */}

                <section>
                    <h3 className="VODEventTitle"><a href="#" className="VODLink">Evolution 2020 Top 8 - Grand Finals</a></h3>
                    <div className="VODInfo">
                    {/* <a className="VODPlayerName">
                    Noir
                    </a>
                    <a className="fixA">
                    <div>
                    <img className="VODInfoImg" src={metera} alt="metera" />
                    </div>
                    </a>
                    <p>vs</p>
                    <a>
                    <img className="VODInfoImg" src={katalina} alt="katalina" />
                    </a>
                    <a className="VODPlayerName">
                    Moon
                    </a> */}
                    <img className="VODInfoImg" src={metera} alt="metera" />
                    <p>Moon</p>
                    </div>
                    <div className="VODInfo">
                    <img className="VODInfoImg" src={katalina} alt="katalina" />
                    <p>Noir</p>
                    </div>
                </section>
                {/* Current qualm: Zeta and Kat belong to the same class but why does this image have
                    less width than the other one?

                    Name image versus image name
                */}
            </div>
        )
    }
}

export default MobileVODList;