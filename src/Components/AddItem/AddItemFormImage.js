import React from "react";
import { Image } from "react-bootstrap";

export default function AddItemFormImage()
{
    return(
        <div style={{ position: 'relative',
        width: '100%',
        height: '100vh' }}>
            <Image
                src="https://bettyonthego.com/wp-content/uploads/2018/04/IMG_8878.jpg"
                alt="Greece at night"
                style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover",
                }}
            />
            <h1
                style={{
                fontSize: '3em',
                fontFamily: 'Fira Sans',
                position: 'absolute',
                top: '7%',
                left: '65%',
                zIndex: 1,
                color: 'white',
                }}
            >
                <b>Add Item</b>
            </h1>
            <p
                style={{
                fontFamily: 'Fira Sans',
                position: 'absolute',
                fontSize: '1.1em',
                top: '15%', // Adjust the top position as needed
                left: '65%',
                zIndex: 1,
                color: 'white',
                }}
            >
            What will you discover?
            </p>
        </div>

    );
}