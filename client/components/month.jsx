import React from 'react';
import Popup from 'reactjs-popup';
import Days from './days.jsx';
import Events from './event.jsx';

const Month = props => {

  // get state from store
  // populate array with props.days
  // create many Days components

  //component did mount
    //make a fetch call to our backend at /api
    
  const dayArr = [];
  for (let i = 0; i < 32; i++) {
    dayArr.push(<Days key={i} />)
  }

  return (
    <div id='month'>
      {dayArr}
    </div>
  )
}

export default Month;