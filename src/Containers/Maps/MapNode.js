import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {IconLocation} from "./IconLocation";
import MakePopUp from './MakePopUp';


function MapNode() {
    return (
        <MapContainer center={[3.4769177312970982, -76.47800550042865]} zoom={15}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MakePopUp></MakePopUp>
        </MapContainer>
    )
}

export default MapNode;