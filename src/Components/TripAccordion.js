import Accordion from "react-bootstrap/Accordion";

const TripAccordion = ({title, content, type, handleAccBodyClick, highlightType}) => {
    let color = "black";
    if(type === highlightType)
        color = "green";
    return (
        <>
            <Accordion>
                <Accordion.Item eventKey="0" class="testTrip">
                    <Accordion.Header>
                        <body style={{color: color}}>
                        {title}
                        </body>
                    </Accordion.Header>
                    <Accordion.Body>
                        <a href="https://www.expedia.com/" target="_blank" rel="noreferrer">
                            {content}
                        </a>{" "}
                        <div style={{color: "blue", textDecorationLine: "underline"}} onClick={() => {
                            handleAccBodyClick(title)
                        }}>
                            MapView
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default TripAccordion;