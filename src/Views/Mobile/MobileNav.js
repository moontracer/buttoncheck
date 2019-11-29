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
            <nav>
                <img src={menuIcon} id={this.state.menuActivated ? "navMenuMarkerHidden" : "navMenuMarker"} alt="menuMarker" onClick={this.menuToggle} />
                <h3 id={this.state.menuActivated ? "navMenuX" : "navMenuXHidden"} onClick={this.menuToggle}>X</h3>
                <img src={gbvsLogo} id="navMainLogo" alt="siteLogo" />
                <span id="loginContainer"><a href="http://www.google.com" id="navLogin">LOGIN</a></span>
                {/* NOTES ON WORKAROUND:
                        The menu div itself and its contents will have to be in another component and have its props passed down to the element.
                */}
                {/* <ul id={this.state.menuActivated ? "navSideMenuShow" : "navSideMenuHide"}>
                    <li>Katalina</li>
                    <li>Metera</li>
                    <li>Zeta</li>
                    <li>Gran</li>
                    <li>Percival</li>
                </ul> */}
            </nav>
        )
    }
}

export default MobileNav;