import ItineraryObject from "./Classes/ItineraryObject";
import MapObject from "./Classes/MapObject";
import TripObject from "./Classes/TripObject";
import ItineraryItemObject from "./Classes/ItineraryItemObject.js";

const TripArray = [];

/****** 5 Hard Coded Example Trips, 2 future *************/
let romeMap = new MapObject('Milan','Rome');
let romeItinerary = new ItineraryObject(new Date('December 13, 2023'), new Date('December 14, 2023'));

let romeItem = new ItineraryItemObject(0, "7:30", "10:30", "Dec 13", "Dec 13", "Milano Centrale");
romeItinerary.itineraryItemList.push(romeItem);
romeItem = new ItineraryItemObject(1, "19:00", "10:00", "Dec 13", "Dec 14", "Hotel Colosseum");
romeItinerary.itineraryItemList.push(romeItem);
romeItem = new ItineraryItemObject(2, "12:00", "14:00", "Dec 14", "Dec 14", "Colosseum");
romeItinerary.itineraryItemList.push(romeItem);
romeItem = new ItineraryItemObject(0, "17:30", "20:30", "Dec 16", "Dec 18", "Roma Termini");
romeItinerary.itineraryItemList.push(romeItem);

let romeTrip = new TripObject('Rome', romeMap, romeItinerary, "$$", 4, 'https://www.wantedinrome.com/i/preview/storage/uploads/2019/03/Clubs_in_Rome.jpg');
TripArray.push(romeTrip);

let florenceMap = new MapObject('Rome','Florence');
let florenceItinerary = new ItineraryObject(new Date('December 22, 2023'), new Date('December 22, 2023'));

let florenceItem = new ItineraryItemObject(0, "7:30", "9:00", "Dec 22", "Dec 22", "Roma Termini");
florenceItinerary.itineraryItemList.push(florenceItem);
florenceItem = new ItineraryItemObject(2, "12:30", "14:00", "Dec 22", "Dec 22", "Cathedral of Santa Maria di Fiore");
florenceItinerary.itineraryItemList.push(florenceItem);
florenceItem = new ItineraryItemObject(0, "17:30", "19:00", "Dec 22", "Dec 22", "Santa Maria Novella Station");
florenceItinerary.itineraryItemList.push(florenceItem);


let florenceTrip = new TripObject('Florence', florenceMap, florenceItinerary, "$$$", 8, 'https://media.timeout.com/images/105879414/750/422/image.jpg');
TripArray.push(florenceTrip);
/**********************************************************/

export default TripArray;
