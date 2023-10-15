import "./css/singleTrip.css";
import romeToAmsterdam from "./images/romeToAmsterdam.png";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";
import Card from "react-bootstrap/Card";

function Map() {
    return (
        <div class='container'>
          <iframe
            title="mapframe"
            width="600"
            height="400"
            style={{border:0}}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJVXealLU_xkcRja_At0z9AGY&key=
            AIzaSyBe_wtXmNC3d5nEaUZGuORqjFH1oF50eeY">
          </iframe>
        </div>
    );
  }

function FilterByDropDown() {
    const offColor = "white";
    const onColor = "darkseagreen";
    const [transportColor, setTransportColor] = useState(offColor);
    const [accoColor, setAccoColor] = useState(offColor);
    const [actColor, setActColor] = useState(offColor);

    function handleTransportClick() {
        setTransportColor(onColor);
        setAccoColor(offColor);
        setActColor(offColor);
    }

    function handleAccoClick() {
        setTransportColor(offColor);
        setAccoColor(onColor);
        setActColor(offColor);
    }

    function handleActClick() {
        setTransportColor(offColor);
        setAccoColor(offColor);
        setActColor(onColor);
    }

    function handleNoneClick() {
        setTransportColor(offColor);
        setAccoColor(offColor);
        setActColor(offColor);
    }

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter by:
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={handleTransportClick} href="#/action-1">Transportation</Dropdown.Item>
                    <Dropdown.Item onClick={handleAccoClick} href="#/action-2">Accommodations</Dropdown.Item>
                    <Dropdown.Item onClick={handleActClick} href="#/action-3">Activities</Dropdown.Item>
                    <Dropdown.Item onClick={handleNoneClick} href="#/action-4">None</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Accordion>
                <Accordion.Item eventKey="0" style={{backgroundColor: transportColor}}>
                    <Accordion.Header>
                        Fiumincino Airport to Schipol Amsterdam Airport
                    </Accordion.Header>
                    <Accordion.Body>
                        <a href="https://www.expedia.com/" target="_blank" rel="noreferrer">
                            7:30, Turkish Airlines
                        </a>{" "}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={{backgroundColor: transportColor}}>
                    <Accordion.Header>
                        Metro to Hotel
                    </Accordion.Header>
                    <Accordion.Body>
                        Every 15 minutes
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" style={{backgroundColor: accoColor}}>
                    <Accordion.Header>
                        3 nights at Hilton Amsterdam
                    </Accordion.Header>
                    <Accordion.Body>
                        October 11th to October 14th
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

function SingleTrip() {
    return (
        <>
            <h1>
                Your Trip to Amsterdam
            </h1>
            <div className="box">
                <div className="imgParent">
                    <Card style={{width: 500, height: 400}}>
                    <img className="routeImg" src={romeToAmsterdam} alt="rToA" style={{objectFit: "cover"}}/>
                    </Card>
                    <Card style={{border: 0, width: 600}}><Map/></Card>
                </div>
                <div className="accordionParent">
                    <FilterByDropDown />
                </div>
            </div>
        </>
);
}

export default SingleTrip;