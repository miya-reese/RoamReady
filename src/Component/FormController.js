//import TripCardInfo from "./MyTrips";
import MapObject from "./classes/MapObject";
import ItineraryObject from "./classes/ItineraryObject";
import TripObject from "./classes/TripObject";

const TripsList = [];

function FormController(formData)
{
    let userMap = new MapObject(formData.location1, formData.location2);
    let userItinerary = new ItineraryObject(formData.startDate, formData.endDate);
    let userTrip = new TripObject(formData.tripName, userMap, userItinerary, formData.budget, formData.numTravelers);

    console.log(userTrip.name);
    console.log(userTrip.MapObject.locationList[0]);
    console.log(userTrip.MapObject.locationList[1]);
    console.log(userTrip.ItineraryObject.startDate);
    console.log(userTrip.ItineraryObject.endDate);
    console.log(userTrip.budget);
    console.log(userTrip.travelers);

    TripsList.push(userTrip);
    // let cardInfo = new TripCardInfo(userTrip.name, userTrip.Itinerary.startDate+" - "+userTrip.Itinerary.endDate, '');
    // //upcomingTrips.push(cardInfo);
    // console.log(userTrip.name);
    // console.log(cardInfo.date);
}

export default FormController;
