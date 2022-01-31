import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import Event from './event.jsx';


const Days = props => {

    
    
  return (
    <div id='day'>
      <Popup trigger={<button><Event /></button>} />
    </div>
  )

}

export default Days;