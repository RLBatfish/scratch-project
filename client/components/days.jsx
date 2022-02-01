import React, { useEffect }from 'react';

import Popup from 'reactjs-popup';
import Event from './event.jsx';


export const Days = props => {
  // console.log('props here?',props)
  const eventArr = [];

  const date = props.date;

  const daysArray = props.days

  let eventExists = false;

  if (Array.isArray(props.dayState)) {
    props.dayState.forEach(elem => {
      if (elem.start_date.includes(date)) {
        eventExists = true;
        eventArr.push(elem);
        console.log(eventArr)
      }
    })
  };

  return (
    <div id = {date} className='day'>
      {props.day}
      {eventExists && <Popup trigger={<button className='eventButton'>Event</button>}>
        <div>
          <fieldset>
            <legend>Event Data</legend>
            
          </fieldset>
        </div>
      </Popup>}
    </div>
  );

}

export const NonDays = () => {
  return (
    <div className='empty'>
    
    </div>
  )
}

