import MapObject from "../Classes/MapObject";
import ItineraryObject from "../Classes/ItineraryObject";
import TripObject from "../Classes/TripObject";
import TimePush from "./TimePush";
// import firebaseConfig from './firebaseConfig';
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
import parseDate from "./parseDate";

function FormController(formData)
{
    let userMap = new MapObject(formData.location1, formData.location2);
    let userItinerary = new ItineraryObject(parseDate(formData.startDate), parseDate(formData.endDate));
    let userTrip = new TripObject(formData.tripName, userMap, userItinerary, formData.budget, formData.numTravelers, ''); //add formdata.imgSrc

    // const app = initializeApp(firebaseConfig);
    // const db = getFirestore(app);

    // try {
    //   // Add a test document to the 'itineraries' collection
    //   const docRef = await addDoc(collection(db, "myTrips"), {
    //     title: userTrip.name,
    //     origin: userTrip.MapObject.origin,
    //     destination: userTrip.MapObject.destination,
    //     startDate: userTrip.ItineraryObject.startDate,
    //     endDate: userTrip.ItineraryObject.endDate,
    //     budget: userTrip.budget,
    //     travelers: userTrip.travelers,
    //   });
  
    //   console.log('Document written with ID: ', docRef.id);
    // } catch (e) {
    //   console.error('Error adding document: ', e);
    // }

    console.log(userTrip.name);
    console.log(userTrip.MapObject.origin);
    console.log(userTrip.MapObject.destination);
    console.log(userTrip.ItineraryObject.startDate.toString());
    console.log(userTrip.ItineraryObject.endDate.toString());
    console.log(userTrip.budget);
    console.log(userTrip.travelers);

    TimePush(userTrip);
}

export default FormController;

