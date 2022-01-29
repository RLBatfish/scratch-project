import React from 'react';
import Planetary from './planetary.jsx';
import Days from '.days.jsx';

const Month = props => {

  // get state from store
  // populate array with props.days
  // create many Days components

  //component did mount
    //make a fetch call to our backend at /api
    

  return (
    <div>
      <Planetary />
      <Days />
    </div>
  )
}

export default Month;