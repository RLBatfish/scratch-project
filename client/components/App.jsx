import React, { useEffect } from 'react';
import Info from './info.jsx';
import Planetary from './planetary.jsx';
import Main from './main.jsx';
import axios from 'axios';
import 'regenerator-runtime'

import * as actions from '../actions/actions';


import { connect } from 'react-redux';

const mapStateToProps = state => ({
  month: state.calendar.month
})

const mapDispatchToProps = dispatch => ({
  // getDataTest: () => dispatch(actions.getDataTest()),
  addEvent: (...args) => dispatch(actions.addEventActionCreator(...args)),
})


   
const getData = async (url) => {
  const data = await axios.get(url)
  return data
}

const App = props => {
  
  useEffect(() => {
    console.log("testing", props.month)
    const test = getData('/api')
    .then((data) => {
      console.log('this is the .then')
      // console.log(data)
    })
  })
   

  return (
    <div>
      <Info addEvent={props.addEvent} />
      <Planetary />
      <Main />
    </div>
  )
};


export default connect(mapStateToProps, mapDispatchToProps)(App)
