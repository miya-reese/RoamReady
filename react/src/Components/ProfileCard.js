import React from 'react'
import './css/profile.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../Classes/UserObject';

const userTest = new User("Francisco", "Lachowski", "milo123", "+1 888 123-4567", "chico_lachowski@gmail.com")
userTest.setProfileImg('https://www.numeromag.nl/wp-content/uploads/2023/08/Numero-Rio-de-janeiro-Brazil-7-960x1000.jpg')

function ProfileCard(user) {
  return (
    <Row>
      <Col>
      <div className='prof-col1'>
      <img src={userTest.profileImg} width={300} height={310} alt='Profile Image'/>
      <div>
        <h1 className='prof-name'>{formatName(userTest.firstname, userTest.lastname)}</h1>
        <h2 className='prof-subtitle'>Account Information</h2>
        <h2 className='prof-info'>{formatInfo("Password", "*************")}</h2>
      </div>
      </div>
    </Col>
    <Col>
      <div className='prof-col2'>
        <h2 className='prof-subtitle'>Contact Information</h2>
        <h2 className='prof-info'>{formatInfo("Phone", userTest.phone)}</h2>
        <h2 className='prof-info'>{formatInfo("Email", userTest.email)}</h2>
      </div>
    </Col>
    <Col>
      <div>
        <img className='water-img' src='https://images.unsplash.com/photo-1555412654-72a95a495858?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D' 
        height={580} alt='Water'/>
      </div>
    </Col>
    </Row>
  );
};

function formatName(firstname, lastname) {
  return firstname + ' ' + lastname;
}

function formatInfo(title, info) {
  return title + ":    " + info;
}

export default ProfileCard;
