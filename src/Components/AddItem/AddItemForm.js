
import {React, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import AddItemFormController from './AddItemFormController';
import { Link } from 'react-router-dom';
import TripArray from '../../TripArray'

function AddItemForm({index, handleItemDelete}) {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    startTime: '',
    startDate: '',
    endDate: '',
    duration: '',
    location: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const durationOption1 = "< 1 hour";
  const durationOption2 = "1-2 hours";
  const durationOption3 = "2-4 hours";
  const durationOption4 = "5-8 hours";
  const durationOption5 = "All day";
  const durationOption6 = "Multiple days";

  return (
    <Container fluid className="p-0" style={{fontFamily: 'Fira Sans', background: 'white', height:'100vh'}}>
      <Form style={{ height: '100%', overflowY: 'auto' }}>
        <br></br>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label style={{fontSize: '20px'}}>Item Name</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Name"
            value={formData.title}
            onChange={handleInputChange}
            style={{fontFamily: 'Montserrat', color: '#737373'}}
          />
        </Form.Group>

        <br></br>
        <br></br>

        <Form.Group className="mb-3" controlId="formType">
          <Form.Label style={{fontSize: '20px'}}>Item Type</Form.Label>
          <Form.Select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            style={{fontFamily: 'Montserrat', color: '#737373'}}
          >
            <option>Please Select</option>
            <option>Transportation</option>
            <option>Accomodation</option>
            <option>Activity</option>
          </Form.Select>
        </Form.Group>

        <br></br>
        <br></br>


        <Form.Group className="mb-3" controlId="formStartTime">
          <Form.Label style={{fontSize: '20px'}}>Start Time</Form.Label>
          <Form.Control
            type="text"
            name="startTime"
            placeholder="hh:mm"
            value={formData.startTime}
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

        <Form.Group className="mb-3" controlId="formDuration">
          <Form.Label style={{fontSize: '20px'}}>Duration</Form.Label>
          <Form.Select
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            style={{fontFamily: 'Montserrat', color: '#737373'}}
          >
            <option>Please Select</option>
            <option>{durationOption1}</option>
            <option>{durationOption2}</option>
            <option>{durationOption3}</option>
            <option>{durationOption4}</option>
            <option>{durationOption5}</option>
            <option>{durationOption6}</option>
          </Form.Select>
        </Form.Group>

        <br></br>
        <br></br>

        <Form.Group className="mb-3" controlId="formLocation">
          <Form.Label style={{fontSize: '20px'}}>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleInputChange}
            style={{fontFamily: 'Montserrat', color: '#737373'}}
          />
        </Form.Group>

        <br></br>
        <br></br>

        <Link to="/MyTrips/SingleTrip" state={{trip: TripArray[index], index: index, handleItemDelete: handleItemDelete}}><Button style={{background: '#a4e0e1'}} variant="primary" type="button" onClick={() => AddItemFormController(formData, index)}>Submit</Button></Link>
        <br></br>
        <br></br>
      </Form>
      </Container>
    // </Col>
  );
}

export default AddItemForm;
