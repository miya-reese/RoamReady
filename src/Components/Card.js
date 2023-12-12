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
      <h1 className='prof-name'>{mainUser.getFullname()}</h1>
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
          <h2 className='prof-info'>{formatInfo("Address", mainUser.getAddrLine1())}</h2>
          <h2 className='prof-info'>{"                    " + mainUser.getAddrLine2()}</h2>
        </div>
        </div>    
    </Col>
    <Col>
      <div style={{height: '100vh'}}>
        <img className='water-img' src='https://media.cntraveler.com/photos/5b33f55ed83c9262a52f005a/16:9/w_2560,c_limit/Cliffs-of-Moher_GettyImages-719869761.jpg' 
        style={{height: '100vh', objectFit: 'cover'}} alt='Water'/>
      </div>
    </Col>
    </Row>
  );
};

function formatInfo(title, info) {
  return title + ":    " + info;
}

export default ProfileCard;
