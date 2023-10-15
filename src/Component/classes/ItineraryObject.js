
export default class ItineraryObject {
    constructor(startDate, endDate)
    {
        this.startDate = startDate;
        this.endDate = endDate;
        this.itineraryItemList = []; //made of ItineraryItems
    }
}