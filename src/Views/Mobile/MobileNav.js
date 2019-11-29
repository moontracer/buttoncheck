import React from 'react';
import gbvsLogo from '../../images/gbvsLogo.png';
import menuIcon from '../../images/menuIcon.png';

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
        // When the user first clicks the menu icon
        //Setting state of menu from false to true
        this.setState({
            menuActivated: !this.state.menuActivated
        });
        console.log(this.state.menuActivated);
    }
    render(){
        return (
            <nav>
                <img src={menuIcon} id="navMenuMarker" alt="menuMarker" onClick={this.menuToggle} />
                <h3 id="navMenuX">X</h3>
                <img src={gbvsLogo} id="navMainLogo" alt="siteLogo" />
                <span id="loginContainer"><a href="http://www.google.com" id="navLogin">LOGIN</a></span>
                <ul id="navSideMenu">
                    <li>Katalina</li>
                    <li>Metera</li>
                    <li>Zeta</li>
                    <li>Gran</li>
                    <li>Percival</li>
                </ul>
            </nav>
        )
    }
}

export default MobileNav;