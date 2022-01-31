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

  /*
  let year = 2022
  let month = {this.props.month} //must be a num 1-12
  let daysInMonth = new Date(year, month, 0).getDate()) //return num of days in month
  let day = 1
  const dayArr = [ [], [], [], [], [], [] ];

  while (day <= daysInMonth) {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        let dayName = (new Date(`${month} ${day} ${year}`)).getDay()
        if (dayName === j) {
          dayArr[i][j] = [day]
          day++
        }
      }
    }
  }
  */

  return (
    <div id='month'>
      {dayArr}
    </div>
  )
}

export default Month;