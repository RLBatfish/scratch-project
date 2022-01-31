import * as types from '../constant/actionTypes';
import reducers from '../reducers/index';
import axios from 'axios';

//what actions do we need here?

//populateDayActionCreator

//addEventActionCreator
/*input fields: name, #eventName
    start date #eventStart
    end date #eventEnd
    description #eventDescript
    location #eventLocation
    participants #eventPpl
    */
export const addEventActionCreator = (nameField, startField, endField, descriptionField, locationField, participantsField) => ({
    type: types.ADD_EVENT,
    payload: nameField, startField, endField, descriptionField, locationField, participantsField,
});

//deleteEventActionCreator



/*
get all data => (dspatch, getstate) => {
    axios ('/api){
        post
        headers
        body: req
 }
    .then (( async dispatch to populate state))
}


// sendPostFromInfoForm

*/

// export const getDataTest = () => (dispatch, getState) => {

// }