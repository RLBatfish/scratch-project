import React from 'react';
import Popup from 'reactjs-popup';
import { Days, NonDays } from './days.jsx';
import Events from './event.jsx';

const Month = props => {

  // get state from store
  // populate array with props.days
  // create many Days components

  //component did mount
    //make a fetch call to our backend at /api
  
  // const dayArr = [];
  // for (let i = 0; i < 32; i++) {
  //   dayArr.push(<Days key={i} />)
  // }


let year = 2022
let month = 1
let daysInMonth = (new Date(year, month, 0)).getDate()
let day = 1
const dayArr = [ [], [], [], [], [], [] ];

/* dayArr = [
  [, , , , , , 01], --> [0][6]
  [02, 03, 04, 05, 06, 07, 08],
  [09, 10]


]
*/

while (day <= daysInMonth) {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      let date = new Date(`${month} ${day} ${year}`)
      let dayName = date.getDay()
      if (dayName === j) {
        dayArr[i][j] = <Days key={date} date = {`${year}-${month < 10 ?`0${month}` : month}-${day < 10 ? `0${day}` : day}`} day={day} month={props.month} dayState={props.days}/>
        day++
      }
      else {
        dayArr[i][j] = <NonDays key={Math.random()} />
      }
    }
  }
}



  return (
    <div id='month'>
      {dayArr[0]}
      {dayArr[1]}
      {dayArr[2]}
      {dayArr[3]}
      {dayArr[4]}
      {dayArr[5]}
    </div>
  )
}

export default Month;