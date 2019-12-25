import React from 'react';

function MobileReportModal(){
    return (
        <div>
            <p></p>
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


*/