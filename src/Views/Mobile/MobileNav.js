import React from 'react';
import gbvsLogo from '../../images/gbvsLogo.png';
import menuIcon from '../../images/menuIcon.png';
import MobileNavMenu from './MobileNavMenu.js';
import { PlusSquare, Menu, X } from 'react-feather';

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
            <div id="quickcssTest">
            {/* <nav>
                <img src={menuIcon} id={this.state.menuActivated ? "navMenuMarkerHidden" : "navMenuMarker"} alt="menuMarker" onClick={this.menuToggle} />
                <h3 id={this.state.menuActivated ? "navMenuX" : "navMenuXHidden"} onClick={this.menuToggle}>X</h3>
                <img src={gbvsLogo} id="navMainLogo" alt="siteLogo" />
                <span id="loginContainer"><a href="http://www.google.com" id="navLogin">LOGIN</a></span>
            </nav> */}
            <nav>
                <span><a href="#" id="skyboundHeader">SKYBOUND ARTS</a></span>
                <PlusSquare color="rgba(255, 255, 255, 1)" />
                {/* <img src={menuIcon} id={this.state.menuActivated ? "navMenuMarkerHidden" : "navMenuMarker"} alt="menuMarker" onClick={this.menuToggle} /> */}
                <Menu color="white" id={this.state.menuActivated ? "navMenuMarkerHidden" : "navMenuMarker"} alt="menuMarker" onClick={this.menuToggle} />
                {/* <h3 id={this.state.menuActivated ? "navMenuX" : "navMenuXHidden"} onClick={this.menuToggle}>X</h3> */}
                <X color="white" id={this.state.menuActivated ? "navMenuX" : "navMenuXHidden"} onClick={this.menuToggle} />
            </nav>
            <MobileNavMenu menuActivated={this.state.menuActivated} />
            </div>
        )
    }
}

export default MobileNav;