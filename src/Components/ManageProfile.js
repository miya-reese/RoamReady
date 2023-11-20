import React from 'react';
import './css/profile.css';
import './css/UI.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../Classes/UserObject.js';
import PropTypes from 'prop-types';
import ManageProfileForm from './ManageProfileForm.js';

const userTest = new User("Francisco Lachowski", "chico.lachowski", "milo123", "+1 888 123-4567", "chico_lachowski@gmail.com", "525 E 86th Street", "New York, NY 10651-78")
userTest.setProfileImg('https://www.numeromag.nl/wp-content/uploads/2023/08/Numero-Rio-de-janeiro-Brazil-7-960x1000.jpg')

// unfinished
function ManageProfile(user) {
    
    return (
      <Row>
        <Col>
        <div style={{ height: '1vh'}} ></div>
        <h1 className="title"> Manage Profile </h1>
        <div style={{height: '1vh'}}></div>
          <div className='manage-prof-img'>
          <img src={userTest.profileImg} width={300} height={310} alt="profImg"/>
          </div>
        </Col>
        <Col>
        <div className='manage-form'>
        <ManageProfileForm />
        </div>
        </Col>
      <Col>
        <div>
          <img className='manage-water-img' src='https://images.unsplash.com/photo-1555412654-72a95a495858?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D' 
          height={700} alt='Water'/>
        </div>
      </Col>
      </Row>
    );
  };

  // type check props
ManageProfile.propTypes = {
    user: PropTypes.object
  };

  export default ManageProfile;