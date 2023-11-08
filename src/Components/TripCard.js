import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/UI.css';

  function TripCard(props) {
    return (
      <div>
        <img className='card-image' src={props.srcImg} width={280} height={280} alt={props.name}></img>
        <div className='card-div'>
          <h1 className='card-title'>{props.trip.name}</h1>
          <h2 className='card-date'>{props.date}</h2>
          <Link to="/MyTrips/SingleTrip" className='card-details' state={{trip: props.trip, index: props.index, handleItemDelete: props.handleItemDelete}}>View details</Link>
          <button className="delete-button" style={{float: "right"}} onClick={() => {props.handleTripsMod(props.index)}}>Delete</button>
        </div>
      </div>
    );
  };

  TripCard.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string,
    srcImg: PropTypes.string,
    trip: PropTypes.object,
    index: PropTypes.number,
    handleItemDelete: PropTypes.func,
    handleTripsMod: PropTypes.func
  };


export default TripCard;
