import Icon from "../../Icons/venue_location_icon.svg";
import L from 'leaflet';

export const IconLocation = L.icon({
    iconUrl: Icon,
    iconRetinaUrl: null,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [50,40],
    className: "leaflet-venue-icon",
})