import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/UI.css'

function TripCard(props) {
    return (
      <Container style={{width: '30vw'}}>
        <Card className='custom-class'>
        <Card.Img variant="top" src={props.srcImg}
        style={{objectFit: "contain"}}
        alt={props.name}/>
        <Card.Body>
          <Card.Title className='card-title'>{props.name}</Card.Title>
          <Card.Subtitle className="custom-date">{props.date}</Card.Subtitle>
          {/* <Card.Link href={"/MyTrips/SingleTrip"} state={{tripID: 0}}>Viewy Details</Card.Link> */}
          <Link to="/MyTrips/SingleTrip" state={{trip: props}} className='card-details'>View details</Link>
        </Card.Body>
      </Card>
      </Container>
    );
  }

  TripCard.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string,
    srcImg: PropTypes.string
  };

export default TripCard;