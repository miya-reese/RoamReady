import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

// import { useState } from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// export default function Form() {
//   const [answer, setAnswer] = useState('');
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState('typing');

// if (status === 'success') {
//   return <h1>That's right!</h1>
// }

// async function handleSubmit(e) {
//   e.preventDefault();
//   setStatus('submitting');
//   try {
//     await submitForm(answer);
//     setStatus('success');
//   } catch (err) {
//     setStatus('typing');
//     setError(err);
//   }
// }

//const userInput = [];

function ScratchForm(props) 
{

  

    return (
      <Container fluid>
        <h1 class="text-center">New Trip From Scratch</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>New Trip Name</Form.Label>
            <Form.Control type="name" placeholder="Enter trip name:" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Label>First Location</Form.Label>
            <Form.Control type="location" placeholder="Enter location:" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Label>Second Location</Form.Label>
            <Form.Control type="location" placeholder="Enter location:" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" placeholder="dd/mm/yyyy" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" placeholder="dd/mm/yyyy" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBudget">
            <Form.Label>Trip Budget</Form.Label>
            <Form.Select>
              <option>Please Select</option>
              <option>$</option>
              <option>$$</option>
              <option>$$$</option>
              <option>$$$$</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTravelers">
            <Form.Label>Number of Travelers</Form.Label>
            <Form.Control type="number" placeholder="Enter Number:" />
          </Form.Group>
          <Link to="/SingleTrip"><Button variant="primary" type="submit">Submit</Button></Link>
          {/* <Button variant="primary" type="submit">Submit</Button> */}
        </Form>
      </Container>
    );
}

export default ScratchForm;