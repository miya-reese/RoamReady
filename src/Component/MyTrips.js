import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TripCard from './TripCard.js'

function MyTripsPage() {
  return (
    <div>
      <Row>
      <div style={{ height: '1vh'}} ></div>
        <h1 class="text-center">My Trips</h1>
        <div style={{height: '1vh'}}></div>
      </Row>
      <div class="row no-gutters">
      <Row>
      <h5 class="text-center">Planned Trips</h5>
      <div style={{ height: '2vh'}} ></div>
      </Row>
      <div className="d-flex justify-content-evenly" >
      <Row>
        <Col><TripCard name="Florence" date="10/20/2023 - 10/22/2023" srcImg="https://media.timeout.com/images/105879414/750/422/image.jpg"></TripCard></Col>
        <Col><TripCard></TripCard></Col>
        <Col><TripCard></TripCard></Col>
      </Row>
      </div>
      <Row>
      <div style={{ height: '2vh'}} ></div>
      <h5 class="text-center">Past Trips</h5>
      <div style={{ height: '1vh'}} ></div>
      </Row>
      <div className="d-flex justify-content-evenly" >
      <Row>
      <Col><TripCard name="Cinque Terre" date="09/29/2023 - 10/01/2023" srcImg="https://lp-cms-production.imgix.net/2021-08/GettyRF_595500583.jpg?auto=format&q=75&w=1920"></TripCard></Col>
      <Col><TripCard name="Amalfi" date="10/06/2023 - 10/08/2023" srcImg="https://www.tourissimo.travel/hubfs/Blog_pictures/The%20Path%20of%20Gods/Path%20of%20the%20Gods%20Blog%20Banner.jpg"></TripCard></Col>
      </Row>
      </div>
      </div>
    </div>
  );
}
  
  export default MyTripsPage;
  
