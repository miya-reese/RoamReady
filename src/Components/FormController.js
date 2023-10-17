import MapObject from "../Classes/MapObject";
import ItineraryObject from "../Classes/ItineraryObject";
import TripObject from "../Classes/TripObject";
import TripArray from "../TripArray";

function FormController(formData)
{
    let userMap = new MapObject(formData.location1, formData.location2);
    let userItinerary = new ItineraryObject(formData.startDate, formData.endDate);
    let userTrip = new TripObject(formData.tripName, userMap, userItinerary, formData.budget, formData.numTravelers, '');

    console.log(userTrip.name);
    console.log(userTrip.MapObject.locationList[0]);
    console.log(userTrip.MapObject.locationList[1]);
    console.log(userTrip.ItineraryObject.startDate);
    console.log(userTrip.ItineraryObject.endDate);
    console.log(userTrip.budget);
    console.log(userTrip.travelers);

    TripArray.TimePush(userTrip);
}

export default FormController;
