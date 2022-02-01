import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Info from './info.jsx';
import Planetary from './planetary.jsx';
import Main from './main.jsx';
import axios from 'axios';
import 'regenerator-runtime'

import * as actions from '../actions/actions';


const mapStateToProps = state => ({
  month: state.calendar.month,
  inputValue: state.calendar.inputValue,
  days: state.calendar.days,
  sync: state.calendar.sync
  
})

const mapDispatchToProps = dispatch => ({
  // getDataTest: () => dispatch(actions.getDataTest()),
  populateDays: (array) => dispatch(actions.populateDaysActionCreator(array)),
  addEvent: (...args) => dispatch(actions.addEventActionCreator(...args)),
  switchSync: () => dispatch(actions.switchSyncActionCreator()),
})


   
const getData = async (url) => {
  const data = await axios.get(url)
  return data
}



const App = props => {
  
  const populate = (data) => {
    props.populateDays(data)
  }
  
  useEffect(() => {
    (async () => {
    const test = getData('/api')
    .then((data) => {
      // console.log('this is inside useEffect: ',data)
       populate(data.data)
    })
    .then(()=> {
      props.switchSync()
    })
    })()
  }, [])
   

  return (
    <div>
      <Info 
      addEvent={props.addEvent}
      value={props.value}
      days={props.days}
      
      />
      <Planetary />
      {props.days && <Main /> }

    </div>
  )
};


export default connect(mapStateToProps, mapDispatchToProps)(App)
