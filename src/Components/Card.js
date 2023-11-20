import React from 'react';
import './css/profile.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../Classes/UserObject';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const userTest = new User("Francisco Lachowski", "chico.lachowski", "milo123", "+1 888 123-4567", "chico_lachowski@gmail.com", "525 E 86th Street", "New York, NY 10651-78")
userTest.setProfileImg('https://www.numeromag.nl/wp-content/uploads/2023/08/Numero-Rio-de-janeiro-Brazil-7-960x1000.jpg')

function ProfileCard(user) {
  return (
    <Row>
      <Col>
      <div style={{ height: '1vh'}} ></div>
        <h1 className="title"> Profile </h1>
        <div style={{height: '1vh'}}></div>
      <div className='prof-col1'>
      <img src={userTest.profileImg} width={300} height={310} alt="profImg"/>
      <br></br>
      <h1 className='prof-name'>{userTest.fullname}</h1>
      <br></br>
      <br></br>
      <Link to="/Profile/ManageProfile"><Button style={{background: '#a4e0e1'}} variant="primary" type="button" state={{user: user}}>Edit</Button></Link>
      </div>
      </Col>
      <Col>
        <div className='prof-col2'>
        <div>
        <h2 className='prof-subtitle'>Account Information</h2>
        <h2 className='prof-info'>{formatInfo("Username", userTest.username)}</h2>
        <h2 className='prof-info'>{formatInfo("Password", "*************")}</h2>
        </div>
        <br></br>
        <br></br>
        <div>
          <h2 className='prof-subtitle'>Contact Information</h2>
          <h2 className='prof-info'>{formatInfo("Phone", userTest.phone)}</h2>
          <h2 className='prof-info'>{formatInfo("Email", userTest.email)}</h2>
          <h2 className='prof-info'>{formatInfo("Address", userTest.addrLine1)}</h2>
          <h2 className='prof-info'>{"                    " + userTest.addrLine2}</h2>
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

// type check props
ProfileCard.propTypes = {
  user: PropTypes.object
};


// trying out editing text/form
function TestEdit() {
   // declare your data as initial state
 const [data, setData] = React.useState({
  name: userTest.username,
  email: userTest.addrLine1,
  phone: 123456789,
});

// handle on change according to input name and setState
const handleChange = (e) => {
  setData({ ...data, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault()
  // take data to submit
};
return (
  <div>
    <form onSubmit={handleSubmit}>
      <table>
        <tr>
          <th>Username:</th>
          <th><input
        type="text"
        name="name"
        value={data.name}    // inject state correspond to input and so on
        onChange={handleChange}
      /></th>
        </tr>
      </table>
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
);
}

export default ProfileCard;
