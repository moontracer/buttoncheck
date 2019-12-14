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
    render(){
        return (
            <div>
               <div className="filterDiv" id="firstFilter">Character(s)</div>
               <div className="filterDiv">Player(s)</div>
               <div className="filterDiv">Event</div>
               <div className="filterDiv">Version</div>
               <div className="filterDiv">Winner</div>
               {/* Content that will be shown when each respective div is clicked */}
               <div className="filterCharacters">
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
            {/* 
                To-do:
                Add an Any Character Option
                Input options for player 1 and player 2
                Event dropdown
            */}
                <input type="text" placeholder="Player 1" />
                <input type="text" placeholder="Player 2" />
            </div>
        )
    }
}

export default MobileVODFilter;