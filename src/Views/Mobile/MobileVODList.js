import React from 'react';
import subforumPFPTest from '../../images/subforumPFPTest.png';
import granblueBanner from '../../images/granblueBanner.png';
import { MessageCircle, Star } from 'react-feather';
import zeta from '../../charImages/zeta.png';
import katalina from '../../charImages/katalina.png';

class MobileVODList extends React.Component {
    render(){
        return (
            <div>
                <section id="forumsectionHeader">
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
                    <h3><a href="#" className="VODLink">Evolution 2020 Top 8 - Grand Finals</a></h3>
                    <div className="VODInfo">
                    <Star className="VODStar" color="coral" />
                    <a className="VODPlayerName">
                    <img className="VODInfoImg" src={zeta} alt="zeta" />
                    Noir
                    </a>
                    {/* <p>vs</p> */}
                    <a className="VODPlayerName">
                    <img className="VODInfoImg" src={katalina} alt="katalina" />
                    Moon
                    </a>
                    </div>
                </section>

            </div>
        )
    }
}

export default MobileVODList;