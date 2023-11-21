import ItineraryObject from "./Classes/ItineraryObject";
import MapObject from "./Classes/MapObject";
import TripObject from "./Classes/TripObject";
import ItineraryItemObject from "./Classes/ItineraryItemObject.js";

const TripArray = [];

/****** 5 Hard Coded Example Trips, 2 future *************/
let romeMap = new MapObject('Milan','Rome');
let romeItinerary = new ItineraryObject(new Date('December 13, 2023'), new Date('December 14, 2023'));

let romeItem = new ItineraryItemObject("Departure", 0, "7:30", "Dec 13", "Dec 13", "2-3 hours", "Milano Centrale");
romeItinerary.itineraryItemList.push(romeItem);
romeItem = new ItineraryItemObject("Stay", 1, "10:00", "Dec 13", "Dec 14", "All day", "Hotel Colosseum");
romeItinerary.itineraryItemList.push(romeItem);
romeItem = new ItineraryItemObject("Tour", 2, "12:00", "Dec 14", "Dec 14", "1-2 hours", "Colosseum");
romeItinerary.itineraryItemList.push(romeItem);
romeItem = new ItineraryItemObject("Return", 0, "17:30", "Dec 14", "Dec 14", "2-3 hours", "Roma Termini");
romeItinerary.itineraryItemList.push(romeItem);

let romeTrip = new TripObject('Rome', romeMap, romeItinerary, "$$", 4, 'https://www.wantedinrome.com/i/preview/storage/uploads/2019/03/Clubs_in_Rome.jpg');
TripArray.push(romeTrip);

let florenceMap = new MapObject('Rome','Florence');
let florenceItinerary = new ItineraryObject(new Date('December 22, 2023'), new Date('December 22, 2023'));

let florenceItem = new ItineraryItemObject("Departure", 0, "7:30", "Dec 22", "Dec 22", "1-2 hours", "Roma Termini");
florenceItinerary.itineraryItemList.push(florenceItem);
florenceItem = new ItineraryItemObject("Tour", 2, "12:30", "Dec 22", "Dec 22", "2-3 hours", "Cathedral of Santa Maria di Fiore");
florenceItinerary.itineraryItemList.push(florenceItem);
florenceItem = new ItineraryItemObject("Return", 0, "17:30", "Dec 22", "Dec 22", "1-2 hours", "Santa Maria Novella Station");
florenceItinerary.itineraryItemList.push(florenceItem);


let florenceTrip = new TripObject('Florence', florenceMap, florenceItinerary, "$$$", 8, 'https://media.timeout.com/images/105879414/750/422/image.jpg');
TripArray.push(florenceTrip);
/**********************************************************/

export default TripArray;
