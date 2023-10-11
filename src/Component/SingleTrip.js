import "./css/singleTrip.css";
import romeToAmsterdam from "./images/romeToAmsterdam.png";
import Accordion from "react-bootstrap/Accordion";

import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";
import AccordionButton from "react-bootstrap/AccordionButton";

console.log(romeToAmsterdam);

function BasicExample() {
    return (
        <div className="singleTripAccordion" style={{float: "right"}}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est labor
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              LZ
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </ div>
    );
  }

function SingleTrip() {
    return (
    <>
    <h1>
    Your Trip to Amsterdam
    </h1>
    <div className="imgParent">
    <img className= "imgChild" src={romeToAmsterdam} alt="rToA"/>
    </div>
    <BasicExample />
    </>
    );
}

export default SingleTrip;