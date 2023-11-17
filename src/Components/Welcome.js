import React from 'react';
import backgroundImage from './images/welcome2.jpg';

import './css/Welcome.css'; // Import your CSS file;
import {NavLink} from 'react-router-dom';


function Welcome(props) {
    return (
        <div style={{height: '100vh', backgroundImage: `url(${backgroundImage})`, objectFit: 'fill'}}>
            <div className="welcome-page-message">Where to?</div>
            {/* <button className="create-button"> */}
            <NavLink to="/FormScreen" style={{textDecorationLine: 'none'}}><button className="create-button">Create trip</button></NavLink>
            {/* </button> */}
        </div>
    );
}

export default Welcome;
