import ItineraryObject from "./Classes/ItineraryObject";
import MapObject from "./Classes/MapObject";
import TripObject from "./Classes/TripObject";

const PastTripArray = [];

/*************Hard Coded Past Examples, 3 Past*************/
let amalfiMap = new MapObject('','');
let amalfiItinerary = new ItineraryObject(new Date('October 6, 2023'), new Date('Octobere 8, 2023'));
let amalfiTrip = new TripObject('Amalfi Coast', amalfiMap, amalfiItinerary, 0, 0, 'https://www.tourissimo.travel/hubfs/Blog_pictures/The%20Path%20of%20Gods/Path%20of%20the%20Gods%20Blog%20Banner.jpg');
PastTripArray.push(amalfiTrip);

let cinqueMap = new MapObject('','');
let cinqueItinerary = new ItineraryObject(new Date('September 29, 2023'), new Date('October 1, 2023'));
let cinqueTrip = new TripObject('Cinque Terre', cinqueMap, cinqueItinerary, 0, 0, 'https://lp-cms-production.imgix.net/2021-08/GettyRF_595500583.jpg?auto=format&q=75&w=1920');
PastTripArray.push(cinqueTrip);

let oktoberfestMap = new MapObject('','');
let oktoberfestItinerary = new ItineraryObject(new Date('September 22, 2023'), new Date('September 25, 2023'));
let oktoberfestTrip = new TripObject('Oktoberfest', oktoberfestMap, oktoberfestItinerary, 0, 0, 'https://static2-viaggi.corriereobjects.it/wp-content/uploads/2023/09/schuetzen_festzelt_architektur_sebastian_lehner-9665.jpg?v=1694707947');
PastTripArray.push(oktoberfestTrip);
/**************************************************/
// PastTripArray.pop();
// PastTripArray.pop();
// PastTripArray.pop();

export default PastTripArray;