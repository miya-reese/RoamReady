
import {React, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FormController from './FormController';
import { Link } from 'react-router-dom';
import firebaseConfig from './firebaseConfig';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const handleClick = async () => {
  try {
    // Add a test document to the 'itineraries' collection
    const docRef = await addDoc(collection(db, 'itineraries'), {
      title: 'Test Itinerary',
      places: ['Place 1', 'Place 2', 'Place 3'],
    });

    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

function ScratchForm() {
  const [formData, setFormData] = useState({
    tripName: '',
    location1: '',
    location2: '',
    startDate: '',
    endDate: '',
    budget: '',
    numTravelers: '',
    // imgSrc: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container fluid className="p-0" style={{fontFamily: 'Fira Sans', background: 'white', height:'100vh'}}>
      <Form style={{ height: '100%', overflowY: 'auto' }}>
        <br></br>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label style={{fontSize: '20px'}}>Trip Name</Form.Label>
          <Form.Control
            type="text"
            name="tripName"
            placeholder="Name"
            value={formData.tripName}
            onChange={handleInputChange}
            style={{fontFamily: 'Montserrat', color: '#737373'}}
          />
        </Form.Group>

        <br></br>
        <br></br>

        <Form.Group className="mb-3" controlId="formBasicLocation1">
          <Form.Label style={{fontSize: '20px'}}>First Location</Form.Label>
          <Form.Control
            type="text"
            name="location1"
            placeholder="Location"
            value={formData.location1}
            onChange={handleInputChange}
            style={{fontFamily: 'Montserrat', color: '#737373'}}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLocation2">
          <Form.Label style={{fontSize: '20px'}}>Second Location</Form.Label>
          <Form.Control
            type="text"
            name="location2"
            placeholder="Location"
            value={formData.location2}
            onChange={handleInputChange}
            style={{fontFamily: 'Montserrat', color: '#737373'}}
          />
        </Form.Group>

        <br></br>
        <br></br>

        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label style={{fontSize: '20px'}}>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            placeholder="dd/mm/yyyy"
            value={formData.startDate}
            onChange={handleInputChange}
            style={{fontFamily: 'Montserrat', color: '#737373'}}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEndDate">
          <Form.Label style={{fontSize: '20px'}}>End Date</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            placeholder="dd/mm/yyyy"
            value={formData.endDate}
            onChange={handleInputChange}
            style={{fontFamily: 'Montserrat', color: '#737373'}}
          />
        </Form.Group>

        <br></br>
        <br></br>

        <Form.Group className="mb-3" controlId="formBudget">
          <Form.Label style={{fontSize: '20px'}}>Budget</Form.Label>
          <Form.Select
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            style={{fontFamily: 'Montserrat', color: '#737373'}}
          >
            <option>Please Select</option>
            <option>$</option>
            <option>$$</option>
            <option>$$$</option>
            <option>$$$$</option>
          </Form.Select>
        </Form.Group>

        <br></br>

        <Form.Group className="mb-3" controlId="formTravelers">
          <Form.Label style={{fontSize: '20px'}}>Number of Travelers</Form.Label>
          <Form.Control
            type="number"
            name="numTravelers"
            placeholder="Enter Number"
            style={{fontFamily: 'Montserrat', color: '#737373'}}
            value={formData.numTravelers}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Link to="/MyTrips"><Button style={{background: '#a4e0e1'}} variant="primary" type="button" onClick={() => FormController(formData)}>Submit</Button></Link>
        <br></br>
        <br></br>
        <Button onClick={handleClick}>Test Button</Button>
        </Form>
      </Container>
  );
}

export default ScratchForm;
