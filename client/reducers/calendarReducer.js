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
                sync : !state.sync,
            };

        case types.ADD_EVENT:
            const daysArr = [...days];
            daysArr.push(action.payload);
            console.log('this is in the ADD_EVENT reducer: ', daysArr);
            return {
                ...state,
                days: daysArr,
            };



        default:
            return state;
    };
};

export default calendarReducer;