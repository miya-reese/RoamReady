import React from 'react'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';

function TripExample() {
  return (
    <Container style={{ height: '50vh', width: '30vw' }}>
      <Card bg={"ligth"} border="light">
      <Card.Header></Card.Header>
      <Card.Img variant="top" src="https://lp-cms-production.imgix.net/2021-08/GettyRF_595500583.jpg?auto=format&q=75&w=1920"
      width={20}
      height={200}
      alt="Trip 1" />
      <Card.Body>
        <Card.Title>Cinque Terre</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">09/29/2023 - 10/01/2023</Card.Subtitle>
        <Card.Link href="#">View Details</Card.Link>
      </Card.Body>
    </Card>
    </Container>
  );
}

function MyTripsPage() {
  return (
    <div>
      <center>
        <h1 class="text-center">My Trips</h1>
      </center>
      <div class="row no-gutters">
      <Row>Trips</Row>
      <Row>
        <Col><TripExample></TripExample></Col>
        <Col><TripExample></TripExample></Col>
        <Col><TripExample></TripExample></Col>
      </Row>
      <Row>Past Trips</Row>
      <Row>
        <Col><TripExample></TripExample></Col>
      </Row>
      </div>
    </div>
  );
}

function test() {
    return (
      <Container>
        <center>
          <h1 class="text-center">My Trips</h1>
        </center>
        <ul>
          <li>
            <TripExample></TripExample>
          </li>
          <li>
          <TripExample></TripExample>
          </li>
          <li>
          <TripExample></TripExample>
          </li>
        </ul>
      </Container>
    );
  }

  
  export default MyTripsPage;
  
