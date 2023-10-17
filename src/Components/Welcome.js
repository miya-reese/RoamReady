import React from 'react';
import logo from './images/ROAM.png';
import './css/Welcome.css'; // Import your CSS file

function Welcome(props) {
    return (
        <div className="center">
            <img src={logo} alt="Logo" className="centered-image" />
        </div>
    );
}

export default Welcome;
