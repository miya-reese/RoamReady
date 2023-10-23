import "./css/singleTrip.css";

import TripListView from "./TripListView.js";
import MapUI from "./MapUI.js";
import TripArray from "../TripArray.js"

import {useLocation} from "react-router-dom";

// const tripName = TripArray[2].name;

const accordionData = [
    {
      title: "Rome Fiumincino Airport to Amsterdam Schipol Airport",
      content: "7:30, Turkish Airlines",
      type: 0
    },
    {
      title: "Metro to Hotel",
      content: "Every 15 minutes",
      type: 0
    },
    {
      title: "3 Night at Hilton Amsterdam",
      content: "October 14th to October 17th",
      type: 1
    },
    {
      title: "This is an activity",
      content: "Wake up at 4am",
      type: 2
    }
  ];

const SingleTrip = () => {
    const location = useLocation();
    const {trip} = location.state;
    return (
        <>
            <h1>
                Your Trip to {trip.name}
            </h1>
            <div className="box">
                <div className="imgParent">
                    <MapUI />
                </div>
                <div className="accFlexBox">
                    <TripListView className="accordionParent" accordionData={accordionData} />
                </div>
            </div>
        </>
);
}

export default SingleTrip;