import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function TripCard(props) {
    return (
      <Container style={{width: '30vw'}}>
        <Card bg={"ligth"} border="light">
        <Card.Header></Card.Header>
        <Card.Img variant="top" src={props.srcImg}
        style={{objectFit: "contain"}}
        alt={props.name}/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
          <Link to="/MyTrips/SingleTrip" state={{trip: props}}>View details</Link>
        </Card.Body>
      </Card>
      </Container>
    );
  }

export default TripCard;