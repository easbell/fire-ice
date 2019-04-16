import React from 'react';
import './House.css';

export const House = (props) => {
  return (
    <div className='house'>
      <h3>{props.name}</h3>
      <p>{props.founded}</p>
      <p>{props.seats}</p>
      <p>{props.titles}</p>
      <p>{props.coatOfArms}</p>
      <p>{props.ancestralWeapons}</p>
      <p>{props.words}</p>
    </div>
  )
}