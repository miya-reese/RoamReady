import {useState} from "react";
import TripFilter from "./TripFilter.js";
import TripAccordion from "./TripAccordion.js";
import TripArray from "../TripArray.js";
import PropTypes from "prop-types";

const TripListView = ({trip, index, handleAccBodyClick}) => { 

    function mapItems(itemList) {
        return (
            itemList.map(
                (item, index) => (
                    <TripAccordion title={item.description} content={item.startTime} type={item.type} handleAccBodyClick={handleAccBodyClick} handleItemsMod={handleItemsMod} index={index}/>
                )
            )
        );
    }

    let itemList = trip.ItineraryObject.itineraryItemList;
    let defaultItems = mapItems(itemList);
    const [items, setItems] = useState(defaultItems);

    function handleItemsMod(idx){
        TripArray[index].ItineraryObject.itineraryItemList.splice(idx, 1);
        itemList = TripArray[index].ItineraryObject.itineraryItemList;
        setItems(
            mapItems(itemList)
        );
    }

    function handleFilterClick(typeNum){
        itemList = TripArray[index].ItineraryObject.itineraryItemList;
        if(typeNum !== -1){
            itemList = itemList.filter(item => item.type === typeNum);
        }
        setItems(mapItems(itemList));
    }

    return(
        <>
            <TripFilter handleFilterClick={handleFilterClick}/>
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