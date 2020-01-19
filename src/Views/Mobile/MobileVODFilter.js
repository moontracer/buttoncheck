import React from 'react';
import { ChevronUp, ChevronDown} from 'react-feather';
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
            filter2Opened: false,
            selectedCharacter1: false,
            selectedCharacter2: false
        };
        this.openFilter = this.openFilter.bind(this);
        this.showCharacters = this.showCharacters.bind(this);
        this.openFilter2 = this.openFilter2.bind(this);
        this.selectCharacter1 = this.selectCharacter1.bind(this);
        this.selectCharacter2 = this.selectCharacter2.bind(this);
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
    selectCharacter1(){
        this.showCharacters();
        this.setState({
            selectedCharacter1: true
        })
    }
    selectCharacter2(){
        this.showCharacters();
        this.setState({
            selectedCharacter2: true
        })

    }
    render(){
        // declare variables for img src here
        var character1;
        var character2;
        return (
            <div>
                <div className="filterContainer">
                    <a className="filterTest" onClick = {this.openFilter}>
                        Player 1 {this.state.filterOpened ? <ChevronUp /> : <ChevronDown />}
                    </a>
                    <a className="filterTest" onClick={this.openFilter2}>
                        Player 2 {this.state.filter2Opened ? <ChevronUp /> : <ChevronDown />}
                    </a>
                    {/* Make this a searchable dropdown!!! */}
                    <select className="filterDropdown" id="EventDropdown">
                        <option selected>Event</option>
                        <option>Michigan Masters 2020</option>
                        <option>Combo Breaker 2020</option>
                    </select>
                    <select className="filterDropdown">
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
                        Player 1 Character
                    </a>
                    <input type="text" placeholder="Player Name" className="playerName" />
                </div>
                <div className={this.state.filter2Opened ? "filterContent" : "hideFilterContent"}>
                    {/* Should I use a div instead of an <a> tag? */}
                    <a className="filterCharToggle" onClick={this.showCharacters}>
                        Player 2 Character
                    </a>
                    <input type="text" placeholder="Player Name" className="playerName" />
                </div>
                {/* Character dropdown */}
                <div className={this.state.showCharacters ? "filterCharacters" : "hideFilterCharacters"}>
                    <a className="filterCharName filterSpacing" id="filterHead" onClick={this.state.selectedCharacter1 ? this.selectCharacter1 : this.selectCharacter2}>
                        <img className="filterImg" src={charlotta} alt="charlotta" name="charlotta" />
                         Charlotta
                    </a>
                    <a className="filterCharName filterSpacing">
                        <img className="filterImg" src={ferry} alt="ferry" name="ferry" />
                        Ferry
                    </a>
                    <a className="filterCharName filterSpacing">
                        <img className="filterImg" src={gran} alt="gran" name="gran" />
                        Gran
                    </a>
                    <a className="filterCharName filterSpacing">
                        <img className="filterImg" src={katalina} alt="katalina" name="katalina" />
                        Katalina 
                    </a>
                    <a className="filterCharName filterSpacing">
                        <img className="filterImg" src={ladiva} alt="ladiva" name="ladiva" />
                        Ladiva
                    </a>
                    <a className="filterCharName filterSpacing">
                        <img className="filterImg" src={lancelot} alt="lancelot" name="lancelot" />
                        Lancelot
                    </a>
                    <a className="filterCharName filterSpacing">
                        <img className="filterImg" src={lowain} alt="lowain" name="lowain" />
                        Lowain
                    </a>
                    <a className="filterCharName filterSpacing">
                        <img className="filterImg" src={metera} alt="metera" name="metera" />
                        Metera
                    </a>
                    <a className="filterCharName filterSpacing">
                        <img className="filterImg" src={percival} alt="percival" name="percival" />
                        Percival
                    </a>
                    <a className="filterCharName filterSpacing">
                        <img className="filterImg" src={vaseraga} alt="vaseraga" name="vaseraga" />
                        Vaseraga
                    </a>
                    <a className="filterCharName filterSpacing">
                        <img className="filterImg" src={zeta} alt="zeta" name="zeta" />
                        Zeta
                    </a>
               </div>
            </div>
        )
    }
}

export default MobileVODFilter;