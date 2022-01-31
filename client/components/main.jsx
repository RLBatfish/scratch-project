import React from 'react';
import Month from './month.jsx';

import { connect } from 'react-redux';

import * as actions from '../actions/actions';

const mapstatetoprops = state => ({
  month: state.calendar.month
})

const Main = props => {


  //mapstatetoprops () => {
    // month = calendar.state.month
  //}

  // component did mout 


  return (
    <div id='main'>
      <Month/>
    </div>
  )
};

export default Main;