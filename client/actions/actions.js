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
export const addEventActionCreator = (array) => ({
    type: types.ADD_EVENT,
    payload: array[0]
});

export const populateDaysActionCreator = (array) => ({
    type: types.POPULATE_DAYS,
    payload: array
})

export const switchSyncActionCreator = () => ({
    type: types.SWITCH_SYNC,
    payload: true
})


//deleteEventActionCreator


