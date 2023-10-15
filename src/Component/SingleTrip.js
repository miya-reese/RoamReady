import "./css/singleTrip.css";
import romeToAmsterdam from "./images/romeToAmsterdam.png";

import Card from "react-bootstrap/Card";
import TripListView from "./TripListView.js";

const accordionData = [
    {
      title: "Rome Fiumincino Airport to Amsterdam Schipol Airport",
      content: "7:30, Turkish Airlines"
    },
    {
      title: "Metrot to Hotel",
      content: "Every 15 minutes"
    },
    {
      title: "3 Night at Hilton Amsterdam",
      content: "October 14th to October 17th"
    }
  ];

function Map() {
    return (
        <div class='container'>
          <iframe
            title="mapframe"
            width="600"
            height="400"
            style={{border:0}}
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJVXealLU_xkcRja_At0z9AGY&key=
            AIzaSyBe_wtXmNC3d5nEaUZGuORqjFH1oF50eeY">
          </iframe>
        </div>
    );
  }

function SingleTrip() {
    return (
        <>
            <h1>
                Your Trip to Amsterdam
            </h1>
            <div className="box">
                <div className="imgParent">
                    <Card style={{width: 500, height: 400}}>
                    <img className="routeImg" src={romeToAmsterdam} alt="rToA" style={{objectFit: "cover"}}/>
                    </Card>
                    <Card style={{width: 500}}><Map /></Card>
                </div>
                <div className="accFlexBox">
                    <TripListView className="accordionParent" accordionData={accordionData} />
                </div>
            </div>
        </>
);
}

export default SingleTrip;