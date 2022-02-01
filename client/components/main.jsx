import React from 'react';
import Month from './month.jsx';

import { connect } from 'react-redux';

import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  month: state.calendar.month,
  days: state.calendar.days
})


const Main = props => {


  //mapstatetoprops () => {
    // month = calendar.state.month
  //}

  // component did mout


  return (
    <div id='main'>
      <Month
      month={props.month}
      days={props.days}
      />
    </div>
  )
};

export default connect(mapStateToProps, null)(Main)