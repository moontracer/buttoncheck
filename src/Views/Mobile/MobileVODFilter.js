import React from 'react';
import { ChevronUp, ChevronDown } from 'react-feather';
import TestIcon from '../../images/TestIcon.png';

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
               
            </div>
        )
    }
}

export default MobileVODFilter;