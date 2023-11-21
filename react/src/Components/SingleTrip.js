import "./css/singleTrip.css";

import TripListView from "./TripListView.js";
import MapUI from "./MapUI.js";

import {useLocation} from "react-router-dom";
import {useState} from "react";

const SingleTrip = () => {
    const location = useLocation();
    const {trip, index, handleItemDelete} = location.state;


    const [placeMode, setPlaceMode] = useState(false);
    const [place, setPlace] = useState("");

    function handleAccBodyClick(place) {
            setPlaceMode(true);
            setPlace(place);
    }

    return (
        <div className="single-trip-flex">
            <div className="map-ui">
                <h1 className="single-trip-text" style={{fontWeight: "bold"}}>Your trip to {trip.MapObject.destination}</h1>
                <MapUI startLoc={trip.MapObject.origin} endLoc={trip.MapObject.destination} placeMode={placeMode} place={place}/>  
                <div className="single-trip-text" style={{color: "blue", textDecorationLine: "underline", textAlign: "center"}} onClick={() => {
                        setPlaceMode(false);
                        }} onKeyDown={() => {
                            setPlaceMode(false);
                        }}>
                        FullTripView
                </div>
            </div>
            <div className="trip-list-view">
                <TripListView trip={trip} index={index} handleItemDelete={handleItemDelete} handleAccBodyClick={handleAccBodyClick} />
            </div>
        </div>
);
}

export default SingleTrip;