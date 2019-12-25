import React from 'react';

function MobileReportModal(props){
    return (
        <div className={props.reportOpen ? "showModal" : "hideModal"}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    )
}

export default MobileReportModal;

/*

Here's how I think this modal in and of itself will be written.

So what is the specific thing that will display this modal? Clicking the Report button, correct?

This means that the onClick button which will toggle it on in the first place can be found in MobileVODList.js

This means that MobileVODList is responsible for passing down the prop which will determine whether or not the
MobileReportModal is supposed to be displayed.

Create a state tracker called reportOpen and set its initial value to false. On click, the state is set to true.
On click of the X or anywhere outside of the div as well as after a submission, that state will be set to false.
This is a property that belongs to the parent though? How do I do the latter from the child?

Okay so the parent already has the child's prop!

okay so the child in that example has the parent's prop

parent has a state which has some text
parent renders child and passes down a function


How am I going to dim the rest of the body besides this element?

Set opacity of background elements to 0.2 - this works! but how do I make the element stick out now...
font-weight of report modal to 600

*/