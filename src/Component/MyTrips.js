import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TripCard from './TripCard.js'
import TripArray from '../TripArray.js';

// the page
function MyTripsPage() {

  // map array into node
  let displayUpcomingTrips = <h3 class="text-center">No trips planned, get on it!!! :P</h3>;
  // displayUpcomingTrips = TripArray.map(trip => 
  //   <Col><TripCard name={trip.name} date={trip.startDate+"-"+trip.endDate} srcImg={trip.srcImg}></TripCard></Col>
  //   );
  if (TripArray.length > 0)
  {
    displayUpcomingTrips = TripArray.map(trip => 
      <Col><TripCard name={trip.name} date={trip.ItineraryObject.startDate+' - '+trip.ItineraryObject.endDate} srcImg={trip.srcImg}></TripCard></Col>
      );
  }
  
  //const pastTrips = [];

  // let displayPastTrips = <h3 class="text-center">You haven't gone on any trips... yet :D </h3>;
  // if (pastTrips.length > 0) {
  //   displayPastTrips = pastTrips.map(trip => 
  //     <Col><TripCard name={trip.name} date={trip.date} srcImg={trip.srcImg}></TripCard></Col>
  //     );
  // }
  
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
      {/* <Row>{displayPastTrips}</Row> */}
      </div>
      </div>
    </div>
  );
}
  
export default MyTripsPage;
  