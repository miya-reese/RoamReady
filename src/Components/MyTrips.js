import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TripCard from './TripCard.js';
import TripArray from '../TripArray.js';
import PastTrips from '../PastTripArray.js';
import './css/UI.css'

// the page
function MyTripsPage() 
{ 
  let defaultPastTrips = PastTrips.map((trip, index) =>
    <Col key={trip.name}>
      <div>
        <TripCard {...trip} index={index} handleTripsMod={handlePastTripsMod} date={(trip.ItineraryObject.startDate.toDateString()).slice(4)+' - '+(trip.ItineraryObject.endDate.toDateString()).slice(4)} srcImg={trip.srcImg}/>
      </div>
    </Col>
  );
  let defaultUpcomingTrips = TripArray.map((trip, index) => 
    <Col key={trip.name}>
      <div>
        <TripCard {...trip} index={index} handleTripsMod={handleTripsMod} date={(trip.ItineraryObject.startDate.toDateString()).slice(4)+' - '+(trip.ItineraryObject.endDate.toDateString()).slice(4)} srcImg={trip.srcImg}/>
      </div>
    </Col>
  );

  const [pastTrips, setPastTrips] = useState(defaultPastTrips);
  const [upcomingTrips, setUpcomingTrips] = useState(defaultUpcomingTrips);

  function handlePastTripsMod(idx) {
    PastTrips.splice(idx, 1);
    setPastTrips(
      PastTrips.map(
        (trip, index) =>
        <Col key={trip.name}>
          <div>
            <TripCard {...trip} index={index} handleTripsMod={handlePastTripsMod} date={(trip.ItineraryObject.startDate.toDateString()).slice(4)+' - '+(trip.ItineraryObject.endDate.toDateString()).slice(4)} srcImg={trip.srcImg}/>
          </div>
        </Col>
      )
    );
  }
  function handleTripsMod(idx) {
    TripArray.splice(idx, 1);
    setUpcomingTrips(
      TripArray.map(
        (trip, index) =>
        <Col key={trip.name}>
          <div>
            <TripCard {...trip} index={index} handleTripsMod={handleTripsMod} date={(trip.ItineraryObject.startDate.toDateString()).slice(4)+' - '+(trip.ItineraryObject.endDate.toDateString()).slice(4)} srcImg={trip.srcImg}/>
          </div>
        </Col>
      )
    );
  }

  //map PastTrips into node
  // let displayPastTrips = <h3 className="text-center">You haven't gone on any trips... yet :D </h3>;
  // if (PastTrips.length > 0) {
  //   displayPastTrips = PastTrips.map(trip => 
  //     <Col key={trip.name}>
  //       <div>
  //         <TripCard {...trip} handleTripsMod={handleTripsMod} date={(trip.ItineraryObject.startDate.toDateString()).slice(4)+' - '+(trip.ItineraryObject.endDate.toDateString()).slice(4)} srcImg={trip.srcImg}></TripCard>
  //       </div>
  //     </Col>
  //     );
  // }
  
  // map TripArray into node
  // if (TripArray.length > 0) {
  //   displayUpcomingTrips = TripArray.map(trip => 
  //     <Col key={trip.name}>
  //       <div>
  //         <TripCard {...trip} date={(trip.ItineraryObject.startDate.toDateString()).slice(4)+' - '+(trip.ItineraryObject.endDate.toDateString()).slice(4)} srcImg={trip.srcImg}></TripCard>
  //       </div>
  //     </Col>
  //     );
  // }
  
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
          <Row>{upcomingTrips}</Row>
        </div>
        <Row>
          <div style={{ height: '2vh'}} ></div>
          <h5 className="subtitle">Past Trips</h5>
          <div style={{ height: '1vh'}} ></div>
        </Row>
        <div className="d-flex justify-content-evenly" >
          <Row>{pastTrips}</Row>
        </div>
      </div>
    </div>
  );
}
  
export default MyTripsPage;
  