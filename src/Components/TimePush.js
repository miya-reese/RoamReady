import TripArray from "../TripArray";

export default function TimePush(newTrip)
{
    console.log("Here");
    let i = 0;
    while (i < TripArray.length)
    {
        console.log(i);
        if((newTrip.ItineraryObject.startDate - TripArray[i].ItineraryObject.startDate) > 0)
        {
            TripArray.splice(i , 0, newTrip);
            return;
        }
        i++;

    }
}