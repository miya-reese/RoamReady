import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TripCard from './TripCard.js';
import TripArray from '../TripArray.js';
import PastTrips from '../PastTripArray.js';
import './css/UI.css'

// the page
function MyTripsPage() 
{ 
  //map PastTrips into node
  let displayPastTrips = <h3 className="text-center">You haven't gone on any trips... yet :D </h3>;
  if (PastTrips.length > 0) {
    displayPastTrips = PastTrips.map(trip => 
      <div key={trip.name}>
        <Col><TripCard name={trip.name} date={(trip.ItineraryObject.startDate.toDateString()).slice(4)+' - '+(trip.ItineraryObject.endDate.toDateString()).slice(4)} srcImg={trip.srcImg}></TripCard></Col>
      </div>
      );
  }

  // map TripArray into node
  let displayUpcomingTrips = <h3 className="text-center">No trips planned, get on it!!! :P</h3>;
  if (TripArray.length > 0) {
    displayUpcomingTrips = TripArray.map(trip => 
      <div key={trip.name}>
        <Col><TripCard {...trip} date={(trip.ItineraryObject.startDate.toDateString()).slice(4)+' - '+(trip.ItineraryObject.endDate.toDateString()).slice(4)} srcImg={trip.srcImg}></TripCard></Col>
      </div>
      );
  }
  
  // display on page
  return (
    <div>
      <Row>
        <div style={{ height: '1vh'}} ></div>
        <h1 className="title"> My Trips </h1>
        <div style={{height: '1vh'}}></div>
      </Row>
      <div className="row no-gutters">
        <Row>
          <h5 className="subtitle">Upcoming Trips</h5>
          <div style={{ height: '2vh'}} ></div>
        </Row>
        <div className="d-flex justify-content-evenly">
          <Row>{displayUpcomingTrips}</Row>
        </div>
        <Row>
          <div style={{ height: '2vh'}} ></div>
          <h5 className="subtitle">Past Trips</h5>
          <div style={{ height: '1vh'}} ></div>
        </Row>
        <div className="d-flex justify-content-evenly" >
          <Row>{displayPastTrips}</Row>
        </div>
      </div>
    </div>
  );
}
  
export default MyTripsPage;
  