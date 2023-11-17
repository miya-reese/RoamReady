import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TripCard from './TripCard.js';
import TripArray from '../TripArray.js';
import PastTrips from '../PastTripArray.js';
import './css/UI.css';

// the page
function MyTripsPage() 
{ 

  function mapTrips(trips, type) {
    if(trips.length > 0){
      return (
        trips.map((trip, index) => 
          <Col key={trip.name}>
            <div>
              <TripCard trip={trip} index={index} trips={trips} type={type} handleTripsMod={handleTripsMod} date={(trip.ItineraryObject.startDate.toDateString()).slice(4)+' - '+(trip.ItineraryObject.endDate.toDateString()).slice(4)} srcImg={trip.srcImg}/>
            </div>
          </Col>
        )
      );
    }
    else{
      if(type === 0){
        return(
          <h3 className="text-center">You haven't gone on any trips... yet :D </h3>
        );
      }
      else{
        return(
          <h3 className="text-center">No trips planned, get on it!!! :P</h3>
        );
      }
    }
  }

  const [pastTrips, setPastTrips] = useState(mapTrips(PastTrips, 0));
  const [upcomingTrips, setUpcomingTrips] = useState(mapTrips(TripArray, 1));

  function handleTripsMod(trips, idx, type) {
    trips.splice(idx, 1);
    console.log("deleting idx: "+idx+" from array "+type);
    if(type === 0) {
      setPastTrips(
        mapTrips(trips, type)
      )
    }
    else {
      setUpcomingTrips(
        mapTrips(trips, type)
      )
    }
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
  