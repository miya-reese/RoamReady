import React from 'react';
import './css/profile.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import mainUser from '../GlobalUser.js';
import ManageProfileController from './ManageProfileController.js';

function ManageProfileForm(user) {

    const [userData, setUserData] = React.useState({
      fullname: mainUser.fullname,
      username: mainUser.username,
      password: mainUser.password,
      phone: mainUser.phone,
      email: mainUser.email,
      addrLine1: mainUser.addrLine1,
      addrLine2: mainUser.addrLine2
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
          <Form.Group className="mb-3" controlId="formFullname">
            <Form.Label style={{fontSize: '20px'}}>Fullname</Form.Label>
            <Form.Control
              type="text"
              name="fullname"
              placeholder="Fullname"
              defaultValue={mainUser.fullname}
              value={userData.fullname}
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
            <Form.Group className='mb-3' controlId='formAddrLine1'>
              <Form.Label style={{fontSize: '20px'}}>addrLine1</Form.Label>
              <Form.Control
              type="text"
              name="addrLine1"
              placeholder="Address Line 1"
              defaultValue={mainUser.addrLine1}
              value={userData.addrLine1}
              onChange={handleInputChange}
              style={{fontFamily: 'Montserrat', color: '#737373'}}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formAddrLine2'>
              <Form.Label style={{fontSize: '20px'}}>addrLine2</Form.Label>
              <Form.Control
              type="text"
              name="addrLine2"
              placeholder="Address Line 2"
              defaultValue={mainUser.addrLine2}
              value={userData.addrLine2}
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