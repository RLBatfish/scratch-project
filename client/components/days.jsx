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
        eventArr.push(<Event data={elem}/>);
      }
    })
  };

  return (
    <div id = {date} className='day'>

      <div id='date-number'>{props.day}</div>

      <div id='eventButton'>
        {eventExists && <Popup trigger={<button className='eventButton'>Events</button>}>
        <div>
          <fieldset id='detailPop'>
            {eventArr}
          </fieldset>
        </div>
        </Popup>}
      </div>
      
    </div>
  );

}

export const NonDays = () => {
  return (
    <div className='empty'>
    </div>
  )
};
