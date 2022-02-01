import React from 'react';
import Popup from 'reactjs-popup';
import fetch from 'node-fetch'

const Info = props => {
  
  const handleClick = (e) => {
    e.preventDefault();
    const urlWill = 'https://media-exp1.licdn.com/dms/image/C4E03AQHWkrH8zH7aUg/profile-displayphoto-shrink_800_800/0/1619436356473?e=1649289600&v=beta&t=IwPF93lPqURLxngFGIGJ0zExMPUVbaDPX_BLYo7DaZM'
    fetch(urlWill, {
      
    })
  }


  const setEventInfo = (e) => {

    const nameField = document.querySelector('#eventName');
    const startField = document.querySelector('#eventStart');
    const endField = document.querySelector('#eventEnd');
    const descriptionField = document.querySelector('#eventDescript');
    const locationField = document.querySelector('#eventLocation');
    const participantsField = document.querySelector('#eventPpl');
    //get current field values & pass into addEvent
    //props.addEvent(nameField.value, startField.value, endField.value, descriptionField.value, locationField.value, participantsField.value);
    e.preventDefault();
    console.log('add event button was clicked');
    console.log('this is the synthetic event', e);
    console.log('this is the nameField: ',nameField);


    //testing the backend
    function addTestEvent(nameF, startF, endF, descriptionF, locationF, participantsF) {
      const body = {
        nameF,
        startF,
        endF,
        descriptionF,
        locationF,
        participantsF,
      };
      console.log(body);

      
      fetch('/api/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify(body),
      })
      .then( (response) => response.json())
      .then( (data) => {
        console.log('Success!', data);
        //once response is back, trigger dispatch and add to days array
        props.addEvent(data);


      })
      .then(()=> {
        props.switchSync();
        console.log(props);
      })
      .catch( (error) => {
        console.error('Error:', error);
      });
    };

    addTestEvent(nameField.value, startField.value, endField.value, descriptionField.value, locationField.value, participantsField.value)

  };



  return (
    <div id='info'>
      <p id='yrmo'>January 2022</p>
      
      <Popup trigger={<button>Add New Event</button>}>
        <form>
          <fieldset id='popup'>
            <legend>NEW EVENT</legend>
            <div id='event-form'>
              <label>Name: </label>
              <input type='text' id='eventName'/>
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

              <button type='submit' id='subBut' onClick={setEventInfo}> Create new Event </button>
            </div>
          </fieldset>
        </form>
      </Popup>
      <button onClick={handleClick}>Algo of the Day!</button>
    </div>
  )
}

export default Info;