import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TripCard from './TripCard.js';
import TripArray from '../TripArray.js';
import PastTrips from '../PastTripArray.js';

// the page
function MyTripsPage() 
{ 
  const today = new Date();
  for(let i = 0; i<TripArray.length; i++)
  {
    if((today-(TripArray[i].ItineraryObject.startDate))>0) //if trip is in the past (according to today's date)
    {
      let temp = TripArray[i];
      TripArray.splice(i, 1);
      PastTrips.push(temp, 1);
      i--;
    }
  }

  let displayPastTrips = <h3 class="text-center">You haven't gone on any trips... yet :D </h3>;
  if (PastTrips.length > 0) {
    displayPastTrips = PastTrips.map(trip => 
      <Col><TripCard name={trip.name} date={(trip.ItineraryObject.startDate.toDateString()).slice(4)+' - '+(trip.ItineraryObject.endDate.toDateString()).slice(4)} srcImg={trip.srcImg}></TripCard></Col>
      );
  }

  // map array into node
  let displayUpcomingTrips = <h3 class="text-center">No trips planned, get on it!!! :P</h3>;
  if (TripArray.length > 0)
  {
    displayUpcomingTrips = TripArray.map(trip => 
      <Col><TripCard name={trip.name} date={(trip.ItineraryObject.startDate.toDateString()).slice(4)+' - '+(trip.ItineraryObject.endDate.toDateString()).slice(4)} srcImg={trip.srcImg}></TripCard></Col>
      );
  }
  
  // display on page
  return (
    <div>
      <Row>
      <div style={{ height: '1vh'}} ></div>
        <h1 class="text-center"> My Trips </h1>
        <div style={{height: '1vh'}}></div>
      </Row>
      <div class="row no-gutters">
      <Row>
      <h5 class="text-center">Planned Trips</h5>
      <div style={{ height: '2vh'}} ></div>
      </Row>
      <div className="d-flex justify-content-evenly" >
      <Row>{displayUpcomingTrips}</Row>
      </div>
      <Row>
      <div style={{ height: '2vh'}} ></div>
      <h5 class="text-center">Past Trips</h5>
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
  