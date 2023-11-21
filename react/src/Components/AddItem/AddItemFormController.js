import ItineraryItem from "../../Classes/ItineraryItemObject";
import TripArray from "../../TripArray";

function AddItemFormController(formData, index)
{
    const getType = (string) => {
        let typeNum;
        if(string === "Transportation"){
            typeNum = 0;
        }
        else if(string === "Accomodation"){
            typeNum = 1;
        }
        else {
            typeNum = 2;
        }
        return typeNum;
    }

    let userItem = new ItineraryItem(formData.title, getType(formData.type), formData.startTime, formData.startDate, formData.endDate, formData.duration, formData.location);
    TripArray[index].ItineraryObject.itineraryItemList.push(userItem);
}

export default AddItemFormController;
