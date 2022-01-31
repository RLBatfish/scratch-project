import * as types from '../constant/actionTypes.js';



const initialState = {
    month: 'January',
    days: [],
};

const calendarReducer = (state = initialState, action) => {

    switch (action.types) {

        case types.ADD_EVENT:
     



        default:
            return state;
    };
};

export default calendarReducer;