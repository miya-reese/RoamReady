import MapObject from "./MapObject";
import ItineraryObject from "./ItineraryObject";

export default class TripObject {
    constructor(name, MapObject, ItineraryObject, budget, travelers) 
    {
        this.name = name;
        this.MapObject = MapObject;
        this.ItineraryObject = ItineraryObject;
        this.budget = budget;
        this.travelers = travelers;
        this.srcImg = '';
    };
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

