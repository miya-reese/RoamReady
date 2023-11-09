import {useState} from "react";
import TripFilter from "./TripFilter.js";
import TripAccordion from "./TripAccordion.js";
import TripArray from "../TripArray.js";
import PropTypes from "prop-types";

const TripListView = ({trip, index, handleAccBodyClick}) => {
    const [transportColor, setTransportColor] = useState("black");
    const [accoColor, setAccoColor] = useState("black");
    const [actColor, setActColor] = useState("black");
    function handleTransportClick() {
        setTransportColor("green");
        setAccoColor("black");
        setActColor("black");
    }
    function handleAccoClick() {
        setTransportColor("black");
        setAccoColor("black");
        setActColor("green");
    }
    function handleActClick() {
        setTransportColor("black");
        setAccoColor("green");
        setActColor("black");
    }
    function handleNoneClick() {
        setTransportColor("black");
        setAccoColor("black");
        setActColor("black");
    }

    let itemList = trip.ItineraryObject.itineraryItemList;

    let defaultItems = itemList.map(
        (item, index) => (
            <TripAccordion title={item.description} content={item.startTime} type={item.type} handleAccBodyClick={handleAccBodyClick}
            transportColor={transportColor} accoColor={accoColor} actColor={actColor} handleItemsMod={handleItemsMod} index={index}/>
        )
    );

    const [items, setItems] = useState(defaultItems);

    function handleItemsMod(idx){
        TripArray[index].ItineraryObject.itineraryItemList.splice(idx, 1);
        itemList = TripArray[index].ItineraryObject.itineraryItemList;

        setItems(
            itemList.map(
                (item, index) => (
                    <TripAccordion title={item.description} content={item.startTime} type={item.type} handleAccBodyClick={handleAccBodyClick}
                    transportColor={transportColor} accoColor={accoColor} actColor={actColor} handleItemsMod={handleItemsMod} index={index}/>
                )
            )
        );
    }

    return(
        <>
            <TripFilter handleTransportClick={handleTransportClick} handleAccoClick={handleAccoClick} 
            handleActClick={handleActClick} handleNoneClick={handleNoneClick}/>
            <div>{items}</div>
            <button className="single-trip-button" style={{float:'right'}}>Add</button>
        </>
    )
}

TripListView.propTypes = {
    itemList: PropTypes.array,
    handleAccBodyClick: PropTypes.func,
}

export default TripListView;