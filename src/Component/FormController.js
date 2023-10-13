
class TripObject {
    constructor(name, MapObject, Itinerary, budget, travelers) 
    {
        this.name = name;
        this.MapObject = MapObject;
        this.Itinerary = Itinerary;
        this.budget = budget;
        this.travelers = travelers;
    }
}

class MapObject {
    constructor(origin, destination)
    {
        this.locationList = [origin, destination]; //made of location strings, which should work for embed maps api
    }
}

class Itinerary {
    constructor(startDate, endDate)
    {
        this.startDate = startDate;
        this.endDate = endDate;
        this.itineraryItemList = []; //made of ItineraryItems
    }
}

// class ItineraryItem {
//     constructor(type, startTime, endTime, date1, date2, description)
//     {
//         this.type = type;
//         this.startTime = startTime;
//         this.endTime = endTime;
//         this.date1 = date1;
//         this.date2 = date2;
//         this.description = description;
//     }
// }

function FormController(formData)
{
    let userMap = new MapObject(formData.location1, formData.location2);
    let userItinerary = new Itinerary(formData.startDate, formData.endDate);
    let userTrip = new TripObject(formData.tripName, userMap, userItinerary, formData.budget, formData.numTravelers);

    console.log(userTrip.name);
    console.log(userTrip.MapObject.locationList[0]);
    console.log(userTrip.MapObject.locationList[1]);
    console.log(userTrip.Itinerary.startDate);
    console.log(userTrip.Itinerary.endDate);
    console.log(userTrip.budget);
    console.log(userTrip.travelers);
}

export default FormController;