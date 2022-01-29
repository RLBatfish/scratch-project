import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '../client/components/App.jsx';
import store from './store';
import style from '../client/style/application.scss';


render(
    <Provider store={store}>
        <App />, 
    </Provider>,
    document.getElementById('root')
);
