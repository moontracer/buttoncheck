import React from 'react';
import { ChevronUp, ChevronDown } from 'react-feather';
import TestIcon from '../../images/TestIcon.png';

class MobileVODFilter extends React.Component {
    render(){
        return (
            // Should this use a form tag instead of a div tag? Hmm...
            <div>
                {/* 
                    To-Do List:
                    Two Icons, an open and a close one.
                */}
                <ChevronUp />
                <ChevronDown />
                {/* Dropdowns */}
                <select>
                    {/* Player 1 Dropdown */}
                    <option default>All Characters</option>
                    <option>Gran</option>
                    <option><img src={TestIcon} />Katalina</option>
                    <option>Charlotta</option>
                    <option>Lancelot</option>
                    <option>Percival</option>
                    <option>Ferry</option>
                    <option>Lowain</option>
                    <option>Ladiva</option>
                    <option>Metera</option>
                    <option>Zeta</option>
                    <option>Vaseraga</option>
                </select>
                <div className="characterContainer">
                    <ul>
                        <li><img className="dropdownImg" src={TestIcon} />Katalina</li>
                        <li><img className="dropdownImg" src={TestIcon} />Katalina</li>
                        <li><img className="dropdownImg" src={TestIcon} />Katalina</li>
                        <li><img className="dropdownImg" src={TestIcon} />Katalina</li>
                        <li><img className="dropdownImg" src={TestIcon} />Katalina</li>
                        <li><img className="dropdownImg" src={TestIcon} />Katalina</li>
                        <li><img className="dropdownImg" src={TestIcon} />Katalina</li>
                        <li><img className="dropdownImg" src={TestIcon} />Katalina</li>
                        <li><img className="dropdownImg" src={TestIcon} />Katalina</li>
                        <li><img className="dropdownImg" src={TestIcon} />Katalina</li>
                        <li><img className="dropdownImg" src={TestIcon} />Katalina</li>
                    </ul>
                </div>
                {/* Player 1 Name Search */}
                <input type="text" placeholder="Player 1's Name" />
                {/* Considering aligning the vs, messing with this idea rn */}
                <p id="filterVS">vs</p>
                <select>
                    {/* Player 2 Dropdown */}
                    <option default>All Characters</option>
                    <option>Gran</option>
                    <option>Katalina</option>
                    <option>Charlotta</option>
                    <option>Lancelot</option>
                    <option>Percival</option>
                    <option>Ferry</option>
                    <option>Lowain</option>
                    <option>Ladiva</option>
                    <option>Metera</option>
                    <option>Zeta</option>
                    <option>Vaseraga</option>
                </select>
                {/* Player 2 Name Search */}
                <input type="text" placeholder="Player 2's Name" />
                <div>
                <button>Search</button>
                <button>Reset</button>
                </div>
            </div>
        )
    }
}

export default MobileVODFilter;