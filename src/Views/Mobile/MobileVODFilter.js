import React from 'react';
import { ChevronUp, ChevronDown } from 'react-feather';

class MobileVODFilter extends React.Component {
    render(){
        return (
            <div>
                {/* 
                    To-Do List:
                    Two Icons, an open and a close one.
                */}
                <ChevronUp />
                <ChevronDown />
            </div>
        )
    }
}

export default MobileVODFilter;