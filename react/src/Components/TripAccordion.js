import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";

function TripAccordion (props) {

    const accView = (type, endDate, duration) => {
        if(type === 1){
            return(
                "Checkout: " + endDate
            );
        }
        else {
            return(
                "Duration: " + duration
            );
        }
    }

    return (
        <Accordion>
            <Accordion.Item eventKey="0" class="testTrip">
                <Accordion.Header>
                    <body className="single-trip-text" style={{color: "black"}}>
                    {props.title}
                    </body>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="single-trip-text">
                        Start Time: {props.startTime}
                    </div>
                    <div className="single-trip-text">
                        Start Date: {props.startDate}
                    </div>
                    <div className="single-trip-text">
                        {accView(props.type, props.endDate, props.duration)}
                    </div>
                    <div className="single-trip-text" style={{color: "blue", textDecorationLine: "underline"}} onClick={() => {
                        props.handleAccBodyClick(props.location)
                    }} onKeyDown={() => {
                        props.handleAccBodyClick(props.location)
                    }}>
                        Location: {props.location}
                    </div>
                    <button className="single-trip-button" style={{position: "relative", left: "90%"}} onClick={() => {props.handleItemsMod(props.index)}}>Delete</button>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

TripAccordion.propTypes = {
    title: PropTypes.string,
    type: PropTypes.number,
    startTime: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    duration: PropTypes.string,
    handleAccBodyClick: PropTypes.func,
    location: PropTypes.string,
    handleItemsMod: PropTypes.func,
    index: PropTypes.number
};

export default TripAccordion;
