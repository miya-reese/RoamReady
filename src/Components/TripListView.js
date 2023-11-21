import {useState} from "react";
import TripFilter from "./TripFilter.js";
import TripAccordion from "./TripAccordion.js";
import TripArray from "../TripArray.js";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const TripListView = ({trip, index, handleItemDelete, handleAccBodyClick}) => { 

    function mapItems(itemList) {
        return (
            itemList.map(
                (item, index) => (
                    <TripAccordion key={"item"} title={item.title} type={item.type} startTime={item.startTime} startDate={item.startDate} endDate={item.endDate} duration={item.duration} location={item.location} handleAccBodyClick={handleAccBodyClick} handleItemsMod={handleItemsMod} index={index}/>
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
            <Link to="AddItem" state={{index: index, handleItemDelete: handleItemDelete}}>
            <button className="single-trip-button" style={{float:'right'}}>Add</button>
            </Link>
        </>
    )
}

TripListView.propTypes = {
    handleItemDelete: PropTypes.func,
    handleAccBodyClick: PropTypes.func,
    trip: PropTypes.object,
    index: PropTypes.number
}

export default TripListView;
