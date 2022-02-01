import React from 'react';
import Popup from 'reactjs-popup';

const Event = props => {
  const display = [];

  const data = props.data

  console.log(data)

  const { name, start_date, end_date, location, description, participants} = data

  return (
    <div>
      <Popup trigger={<button>Details</button>}>
        <fieldset id='eventPop'>
          <p>Event: {name}</p>
          <p>Start: {new Date(start_date).toString()}</p>
          <p>End: {new Date (end_date).toString()}</p>
          <p>Location: {location}</p>
          <p>Description: {description}</p>
          <p>Guests: {participants}</p>
        </fieldset>
      </Popup>
    </div>
  )
}

export default Event;