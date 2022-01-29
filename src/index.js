import React from 'react';
import { render } from 'react-dom';
import App from '../client/App.jsx';
import store from './store';
import style from '../client/style/application.scss';


render(<App />, document.getElementById('root'));
