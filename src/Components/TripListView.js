import {useState} from "react";
import TripFilter from "./TripFilter.js";
import TripAccordion from "./TripAccordion.js";
import TripArray from "../TripArray.js";
import PropTypes from "prop-types";

const TripListView = ({trip, index, handleAccBodyClick}) => {
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

    let itemList = trip.ItineraryObject.itineraryItemList;

    let defaultItems = itemList.map(
        (item, index) => (
            <TripAccordion key={item.description} title={item.description} content={item.startTime} type={item.type} handleAccBodyClick={handleAccBodyClick}
            highlightType={highlightType} handleItemsMod={handleItemsMod} index={index}/>
        )
    );

    const [items, setItems] = useState(defaultItems);

    function handleItemsMod(idx){
        TripArray[index].ItineraryObject.itineraryItemList.splice(idx, 1);
        itemList = TripArray[index].ItineraryObject.itineraryItemList;

        setItems(
            itemList.map(
                (item, index) => (
                    <TripAccordion key={item.description} title={item.description} content={item.startTime} type={item.type} handleAccBodyClick={handleAccBodyClick}
                    highlightType={highlightType} handleItemsMod={handleItemsMod} index={index}/>
                )
            )
        );
    }

    return(
        <div>
            <div>
                <TripFilter handleTransportClick={handleTransportClick} handleAccoClick={handleAccoClick} 
                handleActClick={handleActClick} handleNoneClick={handleNoneClick}/>
            </div>
            <div>{items}</div>
            <button>add</button>
        </div>
    )
}

TripListView.propTypes = {
    itemList: PropTypes.array,
    handleAccBodyClick: PropTypes.func,
}

export default TripListView;
