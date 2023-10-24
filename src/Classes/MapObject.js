
export default class MapObject {
    constructor(origin, destination)
    {
        // this.origin = origin;
        // this.destination = destination;
        this.locationList = [origin, destination]; //made of location strings, which should work for embed maps api
    }
}