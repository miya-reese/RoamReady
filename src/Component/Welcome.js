import React from 'react';
import logo from './images/ROAM.png';
import './css/Welcome.css'; // Import your CSS file

function Welcome(props) {
    return (
        <div className="center">
            <img src={logo} width={600} height={600} alt="Logo" />
        </div>
    );
}

export default Welcome;
