import TripArray from "../TripArray";



export default function TimePush(newTrip)
{
    let i = 0;
    while (i < TripArray.length)
    {
        if((newTrip.ItineraryObject.startDate - TripArray[i].ItineraryObject.startDate) < 0)
        {
            TripArray.splice(i , 0, newTrip);
            return;
        }
        i++;
    }
}