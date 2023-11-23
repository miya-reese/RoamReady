import AddItemController from "../Components/AddItem/AddItemFormController";
import TripArray from "../TripArray";

test("items list length increases by 1", () => {
    const initialLength = TripArray[0].ItineraryObject.itineraryItemList.length;
    const testData = {
        title: "Aperitivo",
        type: "Activity",
        startTime: "5:30",
        startDate: "Dec 8th, 2023",
        endDate: "Dec 8th, 2023",
        duration: "1-2 hours",
        location: "Scholar's Pub"
    }
    AddItemController(testData, 0);
    const finalLength = TripArray[0].ItineraryObject.itineraryItemList.length;
    expect(finalLength).toBe(initialLength + 1);
})

test("item name correct", () => {
    let nameFound = false;
    let i;
    for(i = 0; i < TripArray[0].ItineraryObject.itineraryItemList.length; i++){
        if(TripArray[0].ItineraryObject.itineraryItemList[i].title === "Aperitivo")
            nameFound = true;
    }
    expect(nameFound).toBe(true);
})