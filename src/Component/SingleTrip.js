import "./css/singleTrip.css";
import romeToAmsterdam from "./images/romeToAmsterdam.png";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

console.log(romeToAmsterdam);

function TripSteps() {
    return (
        // <div className="singleTripAccordion" style={{float: "right"}}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Fiumincino Airport to Schipol Amsterdam Airport</Accordion.Header>
            <Accordion.Body>
                <Link to="https://www.expedia.com/">
                7:30, Turkish Airlines
                </Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Metro to Hotel</Accordion.Header>
            <Accordion.Body>
              Every 15 minutes
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>3 nights at Hilton Amsterdam</Accordion.Header>
            <Accordion.Body>
              October 11th to October 14th
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        // </div>
      );
}

function FilterByDropDown() {
    return (
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter by:
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Transportation</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Accommodations</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Activities</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
            <img className= "imgChild" src={romeToAmsterdam} alt="rToA"/>
        </div>
        <div className="accordionParent">
            <h1>
                <FilterByDropDown />
            </h1>
            <div className="accordionChild">
                <TripSteps />
            </div>
        </div>
    </div>
</>
);
}

export default SingleTrip;