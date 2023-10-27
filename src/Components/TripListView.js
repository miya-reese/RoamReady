import {useState} from "react";
import TripFilter from "./TripFilter.js";
import TripAccordion from "./TripAccordion.js";
import PropTypes from "prop-types";

const TripListView = ({itemList, handleAccBodyClick}) => {
    const [highlightType, setHighlightType] = useState(-1);
    function handleTransportClick() {
        setHighlightType(0);
    }
    function handleAccoClick() {
        setHighlightType(1);
    }
    function handleActClick() {
        setHighlightType(2);
    }
    function handleNoneClick() {
        setHighlightType(-1);
    }

    return(
        <div>
            <div>
                <TripFilter handleTransportClick={handleTransportClick} handleAccoClick={handleAccoClick} 
                handleActClick={handleActClick} handleNoneClick={handleNoneClick}/>
            </div>
            {itemList.map((item) => (
                <TripAccordion title={item.description} content={item.startTime} type={item.type} handleAccBodyClick={handleAccBodyClick}
                highlightType={highlightType}/>
            ))}
        </div>
    )
}

TripListView.propTypes = {
    itemList: PropTypes.array,
    handleAccClick: PropTypes.func,
}

export default TripListView;