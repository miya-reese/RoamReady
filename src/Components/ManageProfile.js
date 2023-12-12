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
        <div style={{height: '100vh'}}>
          <img className='manage-water-img' src='https://media.cntraveler.com/photos/5b33f55ed83c9262a52f005a/16:9/w_2560,c_limit/Cliffs-of-Moher_GettyImages-719869761.jpg'
          alt='Water' style={{height: '100vh', objectFit: 'cover'}}/>
        </div>
      </Col>
      </Row>
    );
  };

  export default ManageProfile;