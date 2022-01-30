import React from 'react';
import Popup from 'reactjs-popup';

const Info = prop => {
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log('the button does work but it is not the functionality that we want')
  }

  return (
    <div>
      <p>Year Month</p>
      <button>Algo of the Day!</button>
      <Popup trigger={<button>Add New Event</button>}>
        <form>
          <fieldset id='popup'>
            <legend>NEW EVENT</legend>
            <div id='event-form'>
              <label>Name: </label>
              <input type='text' id='eventName' />

              <label>Start Date: </label>
              <input type='datetime-local' id='eventStart'/>

              <label>End Date: </label>
              <input type='datetime-local' id='eventEnd'/>

              {/* <label>Start: </label>
              <input type='time' id='startTime' />

              <label>End: </label>
              <input type='time' id='endTime' /> */}

              <label>Description: </label>
              <input type='text' id='eventDescript' />

              <label>Location: </label>
              <input type='text' id='eventLocation'/>

              <label>Participants: </label>
              <input type='text' id='eventPpl' />

              <button type='submit' id='subBut' onClick={handleClick}> Create new Event </button>
            </div>
          </fieldset>
        </form>
      </Popup>
    </div>
  )
}

export default Info;