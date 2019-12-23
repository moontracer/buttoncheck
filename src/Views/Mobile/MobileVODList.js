import React from 'react';
import granblueBanner from '../../images/granblueBanner.png';
import { PlayCircle, AlertCircle } from 'react-feather';
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
                <section>
                    <h3 className="VODEventTitle"><a href="#" className="VODLink">Evolution 2020 Top 8 - Grand Finals</a></h3>
                    {/* VOD Container */}
                    <div className="VODContainer">
                    <div className="VODInfo">
                    <img className="VODInfoImg" src={metera} alt="metera" />
                    <p className="VODPlayer">Moon</p>
                    <PlayCircle className="VODIcon VODPlayButton" size={32} />
                    </div>
                    <div className="VODInfo">
                    <img className="VODInfoImg" src={katalina} alt="katalina" />
                    <p className="VODPlayer">Noir</p>
                    <AlertCircle className="VODIcon VODReportButton" size={32} />
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default MobileVODList;