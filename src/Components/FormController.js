import MapObject from "../Classes/MapObject";
import ItineraryObject from "../Classes/ItineraryObject";
import TripObject from "../Classes/TripObject";
import TimePush from "./TimePush";
import parseDate from "./parseDate";

async function FormController(formData)
{
    let userMap = new MapObject(formData.location1, formData.location2);
    let userItinerary = new ItineraryObject(parseDate(formData.startDate), parseDate(formData.endDate));
    let userTrip = new TripObject(formData.tripName, userMap, userItinerary, formData.budget, formData.numTravelers, ''); //add formdata.imgSrc

    TimePush(userTrip);
}

export default FormController;

