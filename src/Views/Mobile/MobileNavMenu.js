import React from 'react';

class MobileNavMenu extends React.Component {
    render(){
        return (
            <ul id={this.props.menuActivated ? "navSideMenuShow" : "navSideMenuHide"}>
                <li>Katalina</li>
                <li>Metera</li>
                <li>Zeta</li>
                <li>Gran</li>
                <li>Percival</li>
            </ul>
        )
    }
}

export default MobileNavMenu;