import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FormController from './FormController';
import { useState } from 'react';

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
    <Container fluid>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>New Trip Name</Form.Label>
          <Form.Control
            type="text"
            name="tripName"
            placeholder="Enter trip name:"
            value={formData.tripName}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLocation1">
          <Form.Label>First Location</Form.Label>
          <Form.Control
            type="text"
            name="location1"
            placeholder="Enter location:"
            value={formData.location1}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLocation2">
          <Form.Label>Second Location</Form.Label>
          <Form.Control
            type="text"
            name="location2"
            placeholder="Enter location:"
            value={formData.location2}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            placeholder="dd/mm/yyyy"
            value={formData.startDate}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEndDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            placeholder="dd/mm/yyyy"
            value={formData.endDate}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBudget">
          <Form.Label>Trip Budget</Form.Label>
          <Form.Select
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
          >
            <option>Please Select</option>
            <option>$</option>
            <option>$$</option>
            <option>$$$</option>
            <option>$$$$</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTravelers">
          <Form.Label>Number of Travelers</Form.Label>
          <Form.Control
            type="number"
            name="numTravelers"
            placeholder="Enter Number:"
            value={formData.numTravelers}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={() => FormController(formData)}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ScratchForm;
