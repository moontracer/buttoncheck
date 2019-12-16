import React from 'react';
import { ChevronUp, ChevronDown } from 'react-feather';
import charlotta from '../../charImages/charlotta.png';
import ferry from '../../charImages/ferry.png';
import gran from '../../charImages/gran.png';
import katalina from '../../charImages/katalina.png';
import ladiva from '../../charImages/ladiva.png';
import lancelot from '../../charImages/lancelot.png';
import lowain from '../../charImages/lowain.png';
import metera from '../../charImages/metera.png';
import percival from '../../charImages/percival.png';
import vaseraga from '../../charImages/vaseraga.png';
import zeta from '../../charImages/zeta.png';

class MobileVODFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterOpened: false,
            showCharacters: false,
            filter2Opened: false
        };
        this.openFilter = this.openFilter.bind(this);
        this.showCharacters = this.showCharacters.bind(this);
        this.openFilter2 = this.openFilter2.bind(this);
    }
    openFilter(){
        this.setState({filterOpened: !this.state.filterOpened},
        () => {
            console.log(this.state.filterOpened)
        }
        );
    }
    openFilter2(){
        this.setState({filter2Opened: !this.state.filter2Opened},
        () => {
            console.log(this.state.filter2Opened)
        }
        );
    }
    showCharacters(){
        this.setState({
            showCharacters: !this.state.showCharacters
        },
        () => {
            console.log(this.state.showCharacters);
        }
        )
    }
    render(){
        return (
            <div>
               {/* <div className="filterDiv" id="firstFilter">Character(s)</div>
               <div className="filterDiv">Player(s)</div>
               <div className="filterDiv">Event</div>
               <div className="filterDiv">Version</div>
               <div className="filterDiv">Winner</div> */}
               {/* Content that will be shown when each respective div is clicked */}
               {/* <div className={this.state.showCharacters ? "filterCharacters" : "hideFilterCharacters"}>
                    <a className="filterCharName">
                        <img className="filterImg" src={charlotta} alt="charlotta" />
                         Charlotta
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={ferry} alt="ferry" />
                        Ferry
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={gran} alt="gran" />
                        Gran
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={katalina} alt="katalina" />
                        Katalina 
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={ladiva} alt="ladiva" />
                        Ladiva
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={lancelot} alt="lancelot" />
                        Lancelot
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={lowain} alt="lowain" />
                        Lowain
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={metera} alt="metera" />
                        Metera
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={percival} alt="percival" />
                        Percival
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={vaseraga} alt="vaseraga" />
                        Vaseraga
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={zeta} alt="zeta" />
                        Zeta
                    </a>
               </div> */}
            {/* 
                Things to do:
                on click, change chevron down to chevron up!
                WORKS!
                Okay, now make a character tab and a name tag
            */}
                <div className="filterContainer">
                    <a className="filterTest" onClick = {this.openFilter}>
                        Player 1 {this.state.filterOpened ? <ChevronUp /> : <ChevronDown />}
                    </a>
                    <a className="filterTest" onClick={this.openFilter2}>
                        Player 2 {this.state.filter2Opened ? <ChevronUp /> : <ChevronDown />}
                    </a>
                    {/* Make this a searchable dropdown!!! */}
                    <select>
                        <option selected>Event</option>
                        <option>Michigan Masters 2020</option>
                        <option>Combo Breaker 2020</option>
                    </select>
                    <select>
                    <option selected>Winner</option>
                    <option>Player 1</option>
                    <option>Player 2</option>
                    </select>
                </div>
                {/* Any filter content is displayed here! 
                    Note: how do I prevent both filters from being opened at the same time? Figure out later.
                */}
                <div className={this.state.filterOpened ? "filterContent" : "hideFilterContent"}>
                    <a className="filterCharToggle" onClick = {this.showCharacters}>
                        Characters
                    </a>
                    <input type="text" placeholder="Player Name" className="playerName" />
                </div>
                {/* Character dropdown */}
                <div className={this.state.showCharacters ? "filterCharacters" : "hideFilterCharacters"}>
                    <a className="filterCharName">
                        <img className="filterImg" src={charlotta} alt="charlotta" />
                         Charlotta
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={ferry} alt="ferry" />
                        Ferry
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={gran} alt="gran" />
                        Gran
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={katalina} alt="katalina" />
                        Katalina 
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={ladiva} alt="ladiva" />
                        Ladiva
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={lancelot} alt="lancelot" />
                        Lancelot
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={lowain} alt="lowain" />
                        Lowain
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={metera} alt="metera" />
                        Metera
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={percival} alt="percival" />
                        Percival
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={vaseraga} alt="vaseraga" />
                        Vaseraga
                    </a>
                    <a className="filterCharName">
                        <img className="filterImg" src={zeta} alt="zeta" />
                        Zeta
                    </a>
               </div>
            </div>
        )
    }
}

export default MobileVODFilter;