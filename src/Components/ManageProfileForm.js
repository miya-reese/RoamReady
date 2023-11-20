import React from 'react';
import './css/profile.css';
import User from '../Classes/UserObject.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const userTest = new User("Francisco Lachowski", "chico.lachowski", "milo123", "+1 888 123-4567", "chico_lachowski@gmail.com", "525 E 86th Street", "New York, NY 10651-78")
userTest.setProfileImg('https://www.numeromag.nl/wp-content/uploads/2023/08/Numero-Rio-de-janeiro-Brazil-7-960x1000.jpg')

// unfinished
function ManageProfileForm(user) {

    const [userData, setUserData] = React.useState({
      fullname: userTest.fullname,
      username: userTest.username,
      password: userTest.password,
      phone: userTest.phone,
      email: userTest.email,
      addrLine1: userTest.addrLine1,
      addrLine2: userTest.addrLine2
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
              defaultValue={userTest.fullname}
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
              defaultValue={userTest.username}
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
              defaultValue={userTest.password}
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
              defaultValue={userTest.phone}
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
              defaultValue={userTest.email}
              value={userData.email}
              onChange={handleInputChange}
              style={{fontFamily: 'Montserrat', color: '#737373'}}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formAddrLine1'>
              <Form.Label style={{fontSize: '20px'}}>Address Line 1</Form.Label>
              <Form.Control
              type="text"
              name="addrLine1"
              placeholder="Address Line 1"
              defaultValue={userTest.addrLine1}
              value={userData.addrLine1}
              onChange={handleInputChange}
              style={{fontFamily: 'Montserrat', color: '#737373'}}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formAddrLine2'>
              <Form.Label style={{fontSize: '20px'}}>Address Line 2</Form.Label>
              <Form.Control
              type="text"
              name="addrLine2"
              placeholder="Address Line 2"
              defaultValue={userTest.addrLine2}
              value={userData.addrLine2}
              onChange={handleInputChange}
              style={{fontFamily: 'Montserrat', color: '#737373'}}
              />
            </Form.Group>
            <Link to="/Profile"><Button style={{background: '#a4e0e1'}} variant="primary" type="button">Submit</Button></Link>
        </Form>
      </div>
    );
  };

  // type check props
ManageProfileForm.propTypes = {
    user: PropTypes.object
  };

  export default ManageProfileForm;