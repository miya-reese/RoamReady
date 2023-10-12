import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TripCard from './TripCard.js'

// class to hold the trip card info
class TripCardInfo {
  constructor(name, date, srcImg) {
    this.name = name;
    this.date = date;
    this.srcImg = srcImg;
  }
}

// trip arrays
const upcomingTrips = [];
const pastTrips = [];

// add trip to arrays
let romeTrip = new TripCardInfo('Clubbing in Roma', '10/13/2023 - 10/14/2023', 'https://www.wantedinrome.com/i/preview/storage/uploads/2019/03/Clubs_in_Rome.jpg');
upcomingTrips.push(romeTrip);
upcomingTrips.push(new TripCardInfo("A weekend in Florence", "10/20/2023 - 10/22/2023", "https://media.timeout.com/images/105879414/750/422/image.jpg"));

pastTrips.push(new TripCardInfo('Amalfi Coast', '10/06/2023 - 10/08/2023', "https://www.tourissimo.travel/hubfs/Blog_pictures/The%20Path%20of%20Gods/Path%20of%20the%20Gods%20Blog%20Banner.jpg"),
new TripCardInfo("Cinque Terre", '09/29/2023 - 10/01/2023', "https://lp-cms-production.imgix.net/2021-08/GettyRF_595500583.jpg?auto=format&q=75&w=1920"),
new TripCardInfo('Oktoberfest!', '09/22/2023 - 09/25/2023', 'https://static2-viaggi.corriereobjects.it/wp-content/uploads/2023/09/schuetzen_festzelt_architektur_sebastian_lehner-9665.jpg?v=1694707947'));

// the page
function MyTripsPage() {

  // map array into node
  let displayUpcomingTrips = <h3 class="text-center">No trips planned, get on it!!! :P</h3>;
  displayUpcomingTrips = upcomingTrips.map(trip => 
    <Col><TripCard name={trip.name} date={trip.date} srcImg={trip.srcImg}></TripCard></Col>
    );
  if (upcomingTrips.length > 0)
  {
    displayUpcomingTrips = upcomingTrips.map(trip => 
      <Col><TripCard name={trip.name} date={trip.date} srcImg={trip.srcImg}></TripCard></Col>
      );
  }
  
  let displayPastTrips = <h3 class="text-center">You haven't gone on any trips... yet :D </h3>;
  if (pastTrips.length > 0) {
    displayPastTrips = pastTrips.map(trip => 
      <Col><TripCard name={trip.name} date={trip.date} srcImg={trip.srcImg}></TripCard></Col>
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
  
