import React from 'react';

class MobileRulesModal extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>Skybound Arts Rules</h1>
                <ol>
                    <li>Any content uploaded that contains discrimination or intolerance of any form (homophobia, transphobia, racism, abelism, fatphobia, etc.) will NOT be tolerated. Content that contains such nature will be removed from this website and the uploader's account will be banned.
                    </li>
                </ol>
                <p>That's currently the only rule. As this site expands, more rules will be added but the main line I want to set with these rules 
                    is for people to just BE RESPECTFUL, please.
                </p>
            </div>
        )
    }
}

export default MobileRulesModal;