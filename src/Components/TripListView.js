import {useState} from "react";
import TripFilter from "./TripFilter.js";
import TripAccordion from "./TripAccordion.js";

const TripListView = ({accordionData}) => {
    const offColor = "black";
    const onColor = "green";
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

    function handleNoneClick() {
        setTransportColor(offColor);
        setAccoColor(offColor);
        setActColor(offColor);
    }

    return(
        <div>
            <div>
                <TripFilter handleTransportClick={handleTransportClick} handleAccoClick={handleAccoClick} 
                handleActClick={handleActClick} handleNoneClick={handleNoneClick}/>
            </div>
            {accordionData.map(({ title, content, type }) => (
                <TripAccordion title={title} content={content} type={type} transportColor={transportColor} accoColor={accoColor}
                actColor={actColor}/>
            ))}
        </div>
    )
}

export default TripListView;