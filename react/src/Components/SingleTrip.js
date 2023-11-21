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
        <>
            <h1>
                {trip.name}
            </h1>
            <div className="box">
                <div className="imgParent">
                    <MapUI startLoc={trip.MapObject.origin} endLoc={trip.MapObject.destination} placeMode={placeMode} 
                    place={place}/>
                    <div style={{color: "blue", textDecorationLine: "underline", textAlign: "center"}} onClick={() => {
                      setPlaceMode(false);
                    }} onKeyDown={() => {
                        setPlaceMode(false);
                    }}>
                      FullTripView
                    </div>
                </div>
                <div className="accFlexBox">
                    <TripListView trip={trip} index={index} handleItemDelete={handleItemDelete} handleAccBodyClick={handleAccBodyClick} />
                </div>
            </div>
        </>
);
}

export default SingleTrip;