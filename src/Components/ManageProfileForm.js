import React from 'react';
import './css/profile.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import mainUser from '../GlobalUser.js';
import ManageProfileController from './ManageProfileController.js';

function ManageProfileForm() {

    const [userData, setUserData] = React.useState({
      firstname: mainUser.firstname,
      lastname: mainUser.lastname,
      username: mainUser.username,
      password: mainUser.password,
      phone: mainUser.phone,
      email: mainUser.email,
      address: mainUser.address
    });
    
    // handle on change according to input name and setState
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserData({
        ...userData,
        [name]: value,
      });
    };
    
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formFirstname">
            <Form.Label style={{fontSize: '20px'}}>firstname</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              placeholder="First name"
              defaultValue={mainUser.firstname}
              value={userData.firstname}
              onChange={handleInputChange}
              style={{fontFamily: 'Montserrat', color: '#737373'}}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastname">
            <Form.Label style={{fontSize: '20px'}}>lastname</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              placeholder="Last name"
              defaultValue={mainUser.lastname}
              value={userData.lastname}
              onChange={handleInputChange}
              style={{fontFamily: 'Montserrat', color: '#737373'}}
            />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formUsername'>
              <Form.Label style={{fontSize: '20px'}}>Username</Form.Label>
              <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              defaultValue={mainUser.username}
              value={userData.username}
              onChange={handleInputChange}
              style={{fontFamily: 'Montserrat', color: '#737373'}}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formPassword'>
              <Form.Label style={{fontSize: '20px'}}>Password</Form.Label>
              <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              defaultValue={mainUser.password}
              value={userData.password}
              onChange={handleInputChange}
              style={{fontFamily: 'Montserrat', color: '#737373'}}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formPhone'>
              <Form.Label style={{fontSize: '20px'}}>Phone Number</Form.Label>
              <Form.Control
              type="text"
              name="phone"
              placeholder="Phone number"
              defaultValue={mainUser.phone}
              value={userData.phone}
              onChange={handleInputChange}
              style={{fontFamily: 'Montserrat', color: '#737373'}}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formEmail'>
              <Form.Label style={{fontSize: '20px'}}>Email</Form.Label>
              <Form.Control
              type="text"
              name="email"
              placeholder="Email"
              defaultValue={mainUser.email}
              value={userData.email}
              onChange={handleInputChange}
              style={{fontFamily: 'Montserrat', color: '#737373'}}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formAddress'>
              <Form.Label style={{fontSize: '20px'}}>Address</Form.Label>
              <Form.Control
              type="text"
              name="address"
              placeholder="Address"
              defaultValue={mainUser.address}
              value={userData.address}
              onChange={handleInputChange}
              style={{fontFamily: 'Montserrat', color: '#737373'}}
              />
            </Form.Group>
            <Link to="/Profile"><Button style={{background: '#a4e0e1'}} variant="primary" type="button" onClick={() => ManageProfileController(userData)}>Submit</Button></Link>
        </Form>
      </div>
    );
  };

  export default ManageProfileForm;