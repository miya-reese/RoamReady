import "./css/singleTrip.css";
// import romeToAmsterdam from "./images/romeToAmsterdam.png";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from 'react-bootstrap/Dropdown';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useState } from "react";

function Map() {
    return (
        <div class='container'>
          <iframe
            title="mapframe"
            width="500"
            height="400"
            style={{border:0}}
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer"
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
                </Dropdown.Menu>
            </Dropdown>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <Card style={{backgroundColor: transportColor}}>
                            Fiumincino Airport to Schipol Amsterdam Airport
                        </Card>
                    </Accordion.Header>
                    <Accordion.Body>
                        <a href="https://www.expedia.com/" target="_blank" rel="noreferrer">
                            7:30, Turkish Airlines
                        </a>{" "}
                        {/* <Link to="https://www.expedia.com/">
                            7:30, Turkish Airlines
                        </Link> */}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <Card style={{backgroundColor: transportColor}}>
                            Metro to Hotel
                        </Card>
                    </Accordion.Header>
                    <Accordion.Body>
                        Every 15 minutes
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <Card style={{backgroundColor: accoColor}}>
                            3 nights at Hilton Amsterdam
                        </Card>
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
                    {/* <img className= "imgChild" src={romeToAmsterdam} alt="rToA"/> */}
                    <div className="imgChild">
                        <Map />
                    </div>
                </div>
                <div className="accordionParent">
                    <div className>
                        <FilterByDropDown />
                    </div>
                </div>
            </div>
        </>
);
}

export default SingleTrip;