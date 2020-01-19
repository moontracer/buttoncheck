import React from 'react';

function MobileReportModal(props){
    return (
        <div className={props.reportOpen ? "showModal" : "hideModal"}>
            <form id="reportForm">
            <h3>Please select everything that's wrong with the viedo.</h3>
            <input type="checkbox" id="hateSpeech" />
            <label for="hateSpeech">Usage of Hate Speech</label>
            <input type="checkbox" id="incorrectVideo" />
            <label for="incorrectVideo">Incorrect Video Link / Video Unavailable</label>
            <input type="checkbox" id="other" />
            <label for="other">Other (Please elaborate below)</label>
            <textarea rows="4" cols="50" placeholder="If other was selected or you'd like
            to elaborate on any of the above points, please fill this field.
            ">
            </textarea>
            <input type="submit" name="Submit Report" />
            </form>
        </div>
    )
}

export default MobileReportModal;