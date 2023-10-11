import "./css/singleTrip.css";
import romeToAmsterdam from "./images/romeToAmsterdam.png";
import Accordion from "react-bootstrap/Accordion";

import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";
import AccordionButton from "react-bootstrap/AccordionButton";

console.log(romeToAmsterdam);

function BasicExample() {
    return (
        <Accordion>
            <AccordionHeader>
                <AccordionButton>
                    step 1
                </AccordionButton>
            </AccordionHeader>
            <AccordionBody>
                go to fiumincino airport
            </AccordionBody>
        </Accordion>
    );
  }

function SingleTrip() {
return (
<>
<h1>
Your Trip to Amsterdam
</h1>
<img src={romeToAmsterdam} alt="rToA"/>
<p>
    1. take plane
</p>
<BasicExample />
</>
)
}

export default SingleTrip;