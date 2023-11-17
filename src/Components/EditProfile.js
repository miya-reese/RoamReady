import React from 'react';
import './css/profile.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import User from '../Classes/UserObject';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import formatInfo from './Card.js';

const userTest = new User("Francisco Lachowski", "chico.lachowski", "milo123", "+1 888 123-4567", "chico_lachowski@gmail.com", "525 E 86th Street", "New York, NY 10651-78")
userTest.setProfileImg('https://www.numeromag.nl/wp-content/uploads/2023/08/Numero-Rio-de-janeiro-Brazil-7-960x1000.jpg')

// unfinished
function EditProfile(user) {

    const [data, setData] = React.useState({
      name: userTest.username,
      password: "*************",
      phone: userTest.phone,
      email: userTest.email,
      addrLine1: userTest.addrLine1,
      addrLine2: userTest.addrLine2
    });
    
    // handle on change according to input name and setState
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
      e.preventDefault()
      // take data to submit
    };
  
    const [username, setUsername] = React.useState(userTest.username);
    const[pass, setPass] = React.useState("*************");
    const [showUsername, setShowUsername] = React.useState(false);
    const [showPass, setShowPass] = React.useState(false);
    
    return (
      <Row>
        <Col>
        <div className='prof-col1'>
        <img src={userTest.profileImg} width={300} height={310} alt='Profile Image'/>
        <div>
          <h1 className='prof-name'>{userTest.fullname}</h1>
          <h2 className='prof-subtitle'>Account Information</h2>
          <div>
          <table>
            <tr>
            <h2 className='prof-info'>{formatInfo("Username", userTest.username)}</h2>
            </tr>
            <tr>
            <h2 className='prof-info'>{formatInfo("Password", "*************")}</h2>
            </tr>
          </table>
          </div>
        </div>
          <br></br>
          <br></br>
          <Link to="*" state={{user: user}} className='edit-profile'>Edit</Link>
        </div>
        </Col>
        <Col>
          <div className='prof-col2'>
            <form onSubmit={handleSubmit}>
          <table>
            <tr>
              <th className='prof-info'>{"Phone:   "}</th>
              <th><input
              className='prof-info'
              type="text"
              name="phone"
              value={data.phone}    // inject state correspond to input and so on
              onChange={handleChange}
              />
              </th>
            </tr>
            <tr>
              <th className='prof-info'>{"Email:   "}</th>
              <th><input
              className='prof-info'
              type="text"
              name="email"
              value={data.email}    // inject state correspond to input and so on
              onChange={handleChange}
              />
              </th>
            </tr>
            <tr>
              <th className='prof-info'>{"Address:   "}</th>
              <th><input
              className='prof-info'
              type="text"
              name="addrline1"
              value={data.addrLine1}    // inject state correspond to input and so on
              onChange={handleChange}
              />
              </th>
            </tr>
            <tr>
              <th className='prof-info'>{"           "}</th>
              <th><input
              className='prof-info'
              type="text"
              name="addrline2"
              value={data.addrLine2}    // inject state correspond to input and so on
              onChange={handleChange}
              />
              </th>
            </tr>
          </table>
          <button className='prof-info' type="submit">
            Submit
          </button>
        </form>
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

  // type check props
EditProfile.propTypes = {
    user: PropTypes.object
  };

  export default EditProfile;