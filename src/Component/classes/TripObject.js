
export default class TripObject {
    constructor(name, MapObject, ItineraryObject, budget, travelers, srcImg) 
    {
        this.name = name;
        this.MapObject = MapObject;
        this.ItineraryObject = ItineraryObject;
        this.budget = budget;
        this.travelers = travelers;
        if (srcImg==='')
        {
            this.srcImg = 'https://images.squarespace-cdn.com/content/v1/5bd41e12b914497adad38ad1/91d52a9e-ea73-4ff5-9bf6-d6ecebe45bfc/DSCF8252.jpg';
        }
        else
        {
            this.srcImg = srcImg;
        }
    };
}
