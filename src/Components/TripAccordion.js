import Accordion from "react-bootstrap/Accordion";

const TripAccordion = ({title, content, type, transportColor, accoColor, actColor}) => {
    let color;
    if(type === 0)
        color = transportColor;
    else if(type === 1)
        color = accoColor;
    else
        color = actColor;
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
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default TripAccordion;