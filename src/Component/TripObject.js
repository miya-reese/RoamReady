class TripObject {
    constructor(name, MapObject, Itinerary, budget, travelers) 
    {
        this.name = name;
        this.MapObject = MapObject;
        this.Itinerary = Itinerary;
        this.budget = budget;
        this.travelers = travelers;
        //this.TripCardInfo = TripCardInfo;
    }
}

class MapObject {
    constructor(origin, destination)
    {
        this.locationList = [origin, destination]; //made of location strings, which should work for embed maps api
    }
}

class Itinerary {
    constructor()
    {
        this.itineraryItemList = []; //made of ItineraryItems
    }
}

class ItineraryItem {
    constructor(type, startTime, endTime, date1, date2, description)
    {
        this.type = type;
        this.startTime = startTime;
        this.endTime = endTime;
        this.date1 = date1;
        this.date2 = date2;
        this.description = description;
    }
}

let userMap1 = new MapObject("Rome", "Munich");
let userItinerary1 = new Itinerary()
let userTrip1 = new TripObject("Trip to Rome", userMap1, userItinerary1, 4, 1);
