import React from 'react'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';

function TripCard(props) {
    return (
      <Container style={{width: '30vw'}}>
        <Card bg={"ligth"} border="light">
        <Card.Header></Card.Header>
        <Card.Img variant="top" src={props.srcImg}
        width={20}
        height={11}
        alt={props.name}/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
          <Card.Link href="#">View Details</Card.Link>
        </Card.Body>
      </Card>
      </Container>
    );
  }

export default TripCard;