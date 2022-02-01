import * as types from '../constant/actionTypes';



const initialState = {
    month: 'January',
    days: [],
    sync: false,

};

const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.POPULATE_DAYS:

            return {
                ...state,
                days: action.payload,
                sync: true
            };
    
        
        case types.SWITCH_SYNC:
            return {
                ...state,
                sync : action.payload,
            }

        



        default:
            return state;
    };
};

export default calendarReducer;