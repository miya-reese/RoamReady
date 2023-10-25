import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";

function TripAccordion (props) {
    let color = "black";
    if(props.type === props.highlightType)
        color = "green";
    return (
        <Accordion>
            <Accordion.Item eventKey="0" class="testTrip">
                <Accordion.Header>
                    <body style={{color: color}}>
                    {props.title}
                    </body>
                </Accordion.Header>
                <Accordion.Body>
                    <a href="https://www.expedia.com/" target="_blank" rel="noreferrer">
                        {props.content}
                    </a>{" "}
                    <div style={{color: "blue", textDecorationLine: "underline"}} onClick={() => {
                        props.handleAccBodyClick(props.title)
                    }}>
                        MapView
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

TripAccordion.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    type: PropTypes.number,
    highlightType: PropTypes.number,
    handleAccBodyClick: PropTypes.func
};

export default TripAccordion;