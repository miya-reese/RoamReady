export default function ItineraryObject(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.itineraryItemList = []; //made of ItineraryItems
}