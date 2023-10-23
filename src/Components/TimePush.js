import TripArray from "../TripArray";
import PastTripArray from "../PastTripArray";

export default function TimePush(newTrip)
{
    const today = new Date();
    let x = TripArray;
    if((today - newTrip.ItineraryObject.startDate) > 0)  //if trip is in past
    {
        x = PastTripArray;
    }

    console.log(x);

    if (x.length===0)
    {
        x.push(newTrip);
        return;
    }

    let i = 0;
    while (i < x.length)
    {
        console.log(i);
        if((x===TripArray && ((newTrip.ItineraryObject.startDate - x[i].ItineraryObject.startDate) <= 0)) || (x===PastTripArray && ((newTrip.ItineraryObject.startDate - x[i].ItineraryObject.startDate) > 0)))
        {

            x.splice(i , 0, newTrip);
            return;
        }
        i++;
    }

    console.log(x);
}