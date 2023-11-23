import ItineraryItem from "../../Classes/ItineraryItemObject";
import TripArray from "../../TripArray";
import getItemType from "./getItemType";

function AddItemFormController(formData, index)
{
    let userItem = new ItineraryItem(formData.title, getItemType(formData.type), formData.startTime, formData.startDate, formData.endDate, formData.duration, formData.location);
    TripArray[index].ItineraryObject.itineraryItemList.push(userItem);
}

export default AddItemFormController;
