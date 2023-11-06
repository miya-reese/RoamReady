import React from 'react';
import logo from './images/welcome1.jpg';
import './css/Welcome.css'; // Import your CSS file

function Welcome(props) {
    return (
        <div className="welcomeStyle">
            <img src={logo} alt="Logo" className="centered-image" />
        </div>
    );
}

export default Welcome;
