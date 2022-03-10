//import places from '../data/places.json'
//import axios from 'axios'
const places = '';
export class PlaceService {
    getAllPlaces() {
    }
    
    getPlaceById(id) {
        const place = places.find(place => place.id === id)
        console.log(id)
        return place || null
    }
}

const placeService = new PlaceService()
export default placeService