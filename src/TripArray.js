import ItineraryObject from "./Classes/ItineraryObject";
import MapObject from "./Classes/MapObject";
import TripObject from "./Classes/TripObject";

const TripArray = [];

/****** 5 Hard Coded Example Trips, 2 future *************/
let romeMap = new MapObject('','');
let romeItinerary = new ItineraryObject(new Date('December 13, 2023'), new Date('December 14, 2023'));
let romeTrip = new TripObject('Clubbing in Roma', romeMap, romeItinerary, 0, 0, 'https://www.wantedinrome.com/i/preview/storage/uploads/2019/03/Clubs_in_Rome.jpg');
TripArray.push(romeTrip);

let florenceMap = new MapObject('','');
let florenceItinerary = new ItineraryObject(new Date('December 20, 2023'), new Date('December 22, 2023'));
let florenceTrip = new TripObject('Florence Trip', florenceMap, florenceItinerary, 0, 0, 'https://media.timeout.com/images/105879414/750/422/image.jpg');
TripArray.push(florenceTrip);
/**********************************************************/
// TripArray.pop();
// TripArray.pop();

export default TripArray;