import React from 'react';
import './css/profile.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import mainUser from '../GlobalUser';

function ProfileCard() {
  return (
    <Row>
      <Col>
      <div style={{ height: '1vh'}} ></div>
        <h1 className="title"> Profile </h1>
        <div style={{height: '1vh'}}></div>
      <div className='prof-col1'>
      <img src={mainUser.profileImg} width={300} height={310} alt="profImg"/>
      <br></br>
      <h1 className='prof-name'>{mainUser.fullname}</h1>
      <br></br>
      <br></br>
      <Link to="/Profile/ManageProfile"><Button style={{background: '#a4e0e1'}} variant="primary" type="button">Edit</Button></Link>
      </div>
      </Col>
      <Col>
        <div className='prof-col2'>
        <div>
        <h2 className='prof-subtitle'>Account Information</h2>
        <h2 className='prof-info'>{formatInfo("Username", mainUser.username)}</h2>
        <h2 className='prof-info'>{formatInfo("Password", "*************")}</h2>
        </div>
        <br></br>
        <br></br>
        <div>
          <h2 className='prof-subtitle'>Contact Information</h2>
          <h2 className='prof-info'>{formatInfo("Phone", mainUser.phone)}</h2>
          <h2 className='prof-info'>{formatInfo("Email", mainUser.email)}</h2>
          <h2 className='prof-info'>{formatInfo("Address", mainUser.addrLine1)}</h2>
          <h2 className='prof-info'>{"                    " + mainUser.addrLine2}</h2>
        </div>
        </div>    
    </Col>
    <Col>
      <div>
        <img className='water-img' src='https://images.unsplash.com/photo-1555412654-72a95a495858?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D' 
        height={625} alt='Water'/>
      </div>
    </Col>
    </Row>
  );
};

function formatInfo(title, info) {
  return title + ":    " + info;
}

export default ProfileCard;
