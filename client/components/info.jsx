import React from 'react';
import Popup from 'reactjs-popup';

const Info = prop => {
  handleClick

  return (
    <div>
      <p>Year Month</p>
      <button>Algo of the Day!</button>
      <Popup trigger={<button>Add New Event</button>}>
        <form>
          <input>Name</input>
          <input type='date' id='eventDate'>Date</input>
          <input>Start</input>
          <input>End</input>
          <input>Description</input>
          <input>Location</input>
          <input>Participants</input>
          <button type='submit' id='subBut'>Create new Event</button>
        </form>
      </Popup>
    </div>
  )
}

export default Info;