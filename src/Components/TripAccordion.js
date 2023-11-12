import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";

function TripAccordion (props) {
    return (
        <Accordion>
            <Accordion.Item eventKey="0" class="testTrip">
                <Accordion.Header>
                    <body className="single-trip-text" style={{color: "black"}}>
                    {props.title}
                    </body>
                </Accordion.Header>
                <Accordion.Body>
                    <a className="single-trip-time" href="https://www.expedia.com/" target="_blank" rel="noreferrer" style={{color:"blue"}}>
                        {props.content}
                    </a>{" "}
                    <button className="single-trip-button" style={{float: "right"}} onClick={() => {props.handleItemsMod(props.index)}}>Delete</button>
                    <div className="single-trip-text" style={{color: "blue", textDecorationLine: "underline", position: "relative", left: "45%"}} onClick={() => {
                        props.handleAccBodyClick(props.title)
                    }} onKeyDown={() => {
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