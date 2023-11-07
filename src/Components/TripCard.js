import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/UI.css'

  function TripCard(props) {
    return (
      <div style={{width: 280, height: 365}}>
        <img src={props.srcImg} width={280} height={280} alt={props.name}/>
        <div className='card-div'>
          <h1 className='card-title'>{props.name}</h1>
          <h2 className='card-date'>{props.date}</h2>
          <Link to="/MyTrips/SingleTrip" state={{trip: props}} className='card-details'>View details</Link>
          <button onClick={() => {props.handleTripsMod(props.index)}}>delete</button>
        </div>
      </div>
    );
  };

  TripCard.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string,
    srcImg: PropTypes.string
  };


export default TripCard;