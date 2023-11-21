import TripArray from "../TripArray";
import PastTripArray from "../PastTripArray";
import ItineraryObject from "../Classes/ItineraryObject";
import MapObject from "../Classes/MapObject";
import TripObject from "../Classes/TripObject";
import TimePush from "../Components/TimePush";

let romeMap1 = new MapObject('Milan','Rome');
let romeItinerary1 = new ItineraryObject(new Date('December 13, 2024'), new Date('December 14, 2024'));
let romeTrip1 = new TripObject('Rome', romeMap1, romeItinerary1, "$$", 4, 'https://www.wantedinrome.com/i/preview/storage/uploads/2019/03/Clubs_in_Rome.jpg');
/* loop Testing typical body execution*/
test('pushes romeTrip (future trip) to TripArray', () => {
    const initialLength = TripArray.length;
    TimePush(romeTrip1);
    expect(TripArray.length).toBe(initialLength+1);
});

let romeMap2 = new MapObject('Milan','Rome');
let romeItinerary2 = new ItineraryObject(new Date()+1, new Date()+2);
let romeTrip2 = new TripObject('Rome', romeMap2, romeItinerary2, "$$", 4, 'https://www.wantedinrome.com/i/preview/storage/uploads/2019/03/Clubs_in_Rome.jpg');
/* loop Testing typical 1 execution*/
test('pushes romeTrip (future trip) to TripArray', () => {
    const initialLength = TripArray.length;
    TimePush(romeTrip2);
    expect(TripArray.length).toBe(initialLength+1);
});

let amalfiMap = new MapObject('','');
let amalfiItinerary = new ItineraryObject(new Date('October 7, 2023'), new Date('Octobere 8, 2023'));
let amalfiTrip = new TripObject('Amalfi Coast', amalfiMap, amalfiItinerary, 0, 0, 'https://www.tourissimo.travel/hubfs/Blog_pictures/The%20Path%20of%20Gods/Path%20of%20the%20Gods%20Blog%20Banner.jpg');
/* loop Testing 2 body execution*/
test('pushes amalfiTrip (past trip) to PastTripArray', () => {
    const initialLength = PastTripArray.length;
    TimePush(amalfiTrip);
    expect(PastTripArray.length).toBe(initialLength+1);
});

/* loop Testing no body execution*/
console.log(TripArray.length);
test('tests when TimePush is used on empty TripArray, loop body isnt executed', () => {

    TripArray.pop();
    TripArray.pop();
    TripArray.pop();
    
    const initialLength = TripArray.length;
    TimePush(romeTrip1);
    expect(TripArray.length).toBe(initialLength+1);

});
console.log(TripArray.length);
