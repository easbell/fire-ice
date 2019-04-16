import React from 'react';
import './House.css';

export const House = (props) => {
  return (
    <div className='house'>
      <h3>{props.name}</h3>
      <p>Founded: {props.founded || 'N/A'}</p>
      <p>Seats: {props.seats}</p>
      <p>Titles: {props.titles}</p>
      <p>Coat Of Arms: {props.coatOfArms}</p>
      <p>Ancestral Weapons: {props.ancestralWeapons}</p>
      <p>Words: {props.words || 'N/A'}</p>
    </div>
  )
}