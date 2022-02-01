import React from 'react';
import { render } from 'react-dom';

const Planetary = () => {
  const week = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  }
  
  const weekArr = [];

  for (const key in week) {
    weekArr.push(<label key={key} id={key}>{week[key]}</label>)
  }

  return (
    <div id='week'>
      {/* <label>SUN</label>
      <label>MON</label>
      <label>TUE</label>
      <label>WED</label>
      <label>THU</label>
      <label>FRI</label>
      <label>SAT</label> */}
      {weekArr}
    </div>
  )
}

export default Planetary;