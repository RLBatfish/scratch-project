import { combineReducers } from 'redux';
import calendarReducer from './calendarReducer'

const reducers = combineReducers({

    calendar: calendarReducer,

});

export default reducers;