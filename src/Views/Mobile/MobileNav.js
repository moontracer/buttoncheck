import React from 'react';
import MobileNavMenu from './MobileNavMenu.js';
import { PlusSquare, Menu, X } from 'react-feather';
import {Link} from 'react-router-dom';

class MobileNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuActivated: false
        };
        //makes the this work in the method callback
        this.menuToggle = this.menuToggle.bind(this);
    }
    menuToggle(){
        // When the user first clicks the menu icon, this changes the state of the menu
        this.setState({
            menuActivated: !this.state.menuActivated
        },
        //this callback prints the state after the state is set
        () => {
            console.log(this.state.menuActivated);
        }
        );
    }
    render(){
        return (
            <div className="skyboundHeadContainer">
            <nav>
                <Link to="/" id="skyboundHeader"><span>SKYBOUND ARTS</span></Link>
                <PlusSquare size={25} color="rgba(255, 255, 255, 1)" />
                <a href="http://forums.skyboundarts.com" id="skyboundHeader">FORUMS</a>
                <Menu size={25} color="white" id={this.state.menuActivated ? "navMenuMarkerHidden" : "navMenuMarker"} alt="menuMarker" onClick={this.menuToggle} />
                <X size={25} color="white" id={this.state.menuActivated ? "navMenuX" : "navMenuXHidden"} onClick={this.menuToggle} />
            </nav>
            <MobileNavMenu menuActivated={this.state.menuActivated} />
            <p id="matchFinderHeader">Match Finder</p>
            </div>
        )
    }
}

export default MobileNav;