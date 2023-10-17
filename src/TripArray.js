import ItineraryObject from "./Classes/ItineraryObject";
import MapObject from "./Classes/MapObject";
import TripObject from "./Classes/TripObject";

const TripArray = [];

/****** 5 Hard Coded Example Trips, 2 future, 3 past ******/
let romeMap = new MapObject('','');
let romeItinerary = new ItineraryObject('11/13/2023','11/14/2023');
let romeTrip = new TripObject('Clubbing in Roma', romeMap, romeItinerary, 0, 0, 'https://www.wantedinrome.com/i/preview/storage/uploads/2019/03/Clubs_in_Rome.jpg');
TripArray.push(romeTrip);

let florenceMap = new MapObject('','');
let florenceItinerary = new ItineraryObject('11/20/2023','11/22/2023');
let florenceTrip = new TripObject('Clubbing in Roma', florenceMap, florenceItinerary, 0, 0, 'https://media.timeout.com/images/105879414/750/422/image.jpg');
TripArray.push(florenceTrip);

let amalfiMap = new MapObject('','');
let amalfiItinerary = new ItineraryObject('10/06/2023','10/08/2023');
let amalfiTrip = new TripObject('Amalfi Coast', amalfiMap, amalfiItinerary, 0, 0, 'https://www.tourissimo.travel/hubfs/Blog_pictures/The%20Path%20of%20Gods/Path%20of%20the%20Gods%20Blog%20Banner.jpg');
TripArray.push(amalfiTrip);

let cinqueMap = new MapObject('','');
let cinqueItinerary = new ItineraryObject('9/29/2023','10/01/2023');
let cinqueTrip = new TripObject('Cinque Terre', cinqueMap, cinqueItinerary, 0, 0, 'https://lp-cms-production.imgix.net/2021-08/GettyRF_595500583.jpg?auto=format&q=75&w=1920');
TripArray.push(cinqueTrip);

let oktoberfestMap = new MapObject('','');
let oktoberfestItinerary = new ItineraryObject('9/22/2023','9/25/2023');
let oktoberfestTrip = new TripObject('Cinque Terre', oktoberfestMap, oktoberfestItinerary, 0, 0, 'https://static2-viaggi.corriereobjects.it/wp-content/uploads/2023/09/schuetzen_festzelt_architektur_sebastian_lehner-9665.jpg?v=1694707947');
TripArray.push(oktoberfestTrip);
/**********************************************************/
// TripArray.pop();
// TripArray.pop();
// TripArray.pop();
// TripArray.pop();
// TripArray.pop();

export default TripArray;