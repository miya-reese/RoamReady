import MapObject from "./classes/MapObject";
import ItineraryObject from "./classes/ItineraryObject";
import TripObject from "./classes/TripObject";
import TripArray from "../TripArray";
import TripCardInfo from "./MyTrips";

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

    TripArray.push(userTrip);

    let cardInfo = new TripCardInfo(userTrip.name, userTrip.ItineraryObject.startDate+" - "+userTrip.ItineraryObject.endDate, '');
    console.log("HERE: ");
    console.log(userTrip.ItineraryObject.startDate+"-"+userTrip.ItineraryObject.endDate);
    //TripArray.push(cardInfo);
    console.log(cardInfo.name);
    console.log(cardInfo.name);
}

export default FormController;
