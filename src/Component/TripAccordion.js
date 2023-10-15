import Accordion from "react-bootstrap/Accordion";

const TripAccordion = ({title, content, transportColor, accoColor, actColor}) => {
    return (
        <>
            <Accordion>
                <Accordion.Item eventKey="0" class="testTrip">
                    <Accordion.Header>
                        <body style={{color: transportColor}}>
                        {title}
                        </body>
                    </Accordion.Header>
                    <Accordion.Body>
                        <a href="https://www.expedia.com/" target="_blank" rel="noreferrer">
                            {content}
                        </a>{" "}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default TripAccordion;