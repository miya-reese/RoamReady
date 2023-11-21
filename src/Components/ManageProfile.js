import React from 'react';
import './css/profile.css';
import './css/UI.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ManageProfileForm from './ManageProfileForm.js';
import mainUser from '../GlobalUser.js';

function ManageProfile() {

    return (
      <Row>
        <Col>
        <div style={{ height: '1vh'}} ></div>
        <h1 className="title"> Manage Profile </h1>
        <div style={{height: '1vh'}}></div>
          <div className='manage-prof-img'>
          <img src={mainUser.profileImg} width={300} height={310} alt="profImg"/>
          </div>
        </Col>
        <Col>
        <div className='manage-form'>
        <ManageProfileForm/>
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

  export default ManageProfile;