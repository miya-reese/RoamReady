import MapObject from "../Classes/MapObject";
import ItineraryObject from "../Classes/ItineraryObject";
import TripObject from "../Classes/TripObject";
//import TripArray from "../TripArray";
import TimePush from "./TimePush";

function parseDate(inputDate) 
{
    const dateParts = inputDate.split('-'); // Split the input into day, month, and year
    if (dateParts.length === 3) {
      const year = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1; // Subtract 1 from the month because months in JavaScript are zero-indexed (0-11)
      const day = parseInt(dateParts[2], 10);
      
      // Create a Date object
      const parsedDate = new Date(year, month, day);
      
      // Check if the parsed date is valid
      if (isValidDate(parsedDate)) {
        return parsedDate;
      }
    }
    
    // Return null or any other value to indicate an invalid date
    return null;
}

function isValidDate(date) 
{
    return !isNaN(date.getTime()); // Check if the date is a valid Date object
}

function FormController(formData)
{
    let userMap = new MapObject(formData.location1, formData.location2);
    let userItinerary = new ItineraryObject(parseDate(formData.startDate), parseDate(formData.endDate));
    let userTrip = new TripObject(formData.tripName, userMap, userItinerary, formData.budget, formData.numTravelers, '');

    console.log(userTrip.name);
    console.log(userTrip.MapObject.locationList[0]);
    console.log(userTrip.MapObject.locationList[1]);
    console.log(userTrip.ItineraryObject.startDate);
    console.log(userTrip.ItineraryObject.endDate);
    console.log(userTrip.budget);
    console.log(userTrip.travelers);

    //TripArray.push(userTrip);
    TimePush(userTrip);
}

export default FormController;
