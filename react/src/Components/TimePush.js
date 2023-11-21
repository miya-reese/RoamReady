import TripArray from "../TripArray";
import PastTripArray from "../PastTripArray";

export default function TimePush(newTrip) {
    const today = new Date();
    let x = TripArray;
    if ((today - newTrip.ItineraryObject.startDate) > 0) {
        x = PastTripArray;
    }

    if (x.length === 0) {
        x.push(newTrip);
        return;
    }

    let i = 0;
    while (i < x.length && newTrip.ItineraryObject.startDate > x[i].ItineraryObject.startDate) {
        i++;
    }

    // Insert newTrip at the correct position to maintain sorted order
    x.splice(i, 0, newTrip);
}

