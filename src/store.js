import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extention'
import reducers from '/.reducers/index';


const store = createStore(

    reducers,
    composeWithDevTools(),
);

export default store;


