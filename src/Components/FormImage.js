import React from "react";
import { Image } from "react-bootstrap";

export default function FormImage()
{
    return(
        <div style={{ position: 'relative',
        width: '100%',
        height: '100vh' }}>
            <Image
                src="https://www.greeka.com/photos/greece/hero/athens-greece-1920.jpg"
                alt="Greece at night"
                style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover",
                }}
            />
            <h1
                style={{
                fontSize: '50px',
                fontFamily: 'Fira Sans',
                position: 'absolute',
                top: '5%',
                left: '10%',
                zIndex: 1,
                color: 'white',
                }}
            >
                <b>New Trip</b>
            </h1>
            <p
                style={{
                fontFamily: 'Fira Sans',
                position: 'absolute',
                fontSize: '18px',
                top: '15%', // Adjust the top position as needed
                left: '10%',
                zIndex: 1,
                color: 'white',
                }}
            >
            Time to kick back and relax as we tailor the ultimate experience for you.
            <br></br>
            <br></br>
            Enter your trip details and get ready to roam!
            </p>
        </div>

    );
}