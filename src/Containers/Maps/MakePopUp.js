import React from 'react'
import { MapContainer, Marker, Popup, Tooltip, TileLayer } from "react-leaflet";
import { IconLocation } from "./IconLocation";
import './Syles/MakePopUp.css';
import VariableRio from './VariableRio';

import temperaturaRio from "../../Icons/temperaturaRio.svg";
import nivelAgua from "../../Icons/nivelAgua.svg";
import caudal from "../../Icons/caudal.svg";

const position1 = [3.4769177312970982, -76.47800550042865]
const position2 = [3.4667226248046528, -76.47397145810586]

const MakePopUp = () => {
    return (
        <div>
            <Marker position={position1} icon={IconLocation}>
                <Popup maxHeight="10000">
                    <VariableRio
                        iconoVariable={temperaturaRio}
                        nombreVariable={"Temperatura del rio"}
                        valorVariable={"24 °C"}
                    />
                    <VariableRio
                        iconoVariable={nivelAgua}
                        nombreVariable={"Nivel del agua"}
                        valorVariable={"110 cm"}
                    />
                    <VariableRio
                        iconoVariable={caudal}
                        nombreVariable={"Caudal"}
                        valorVariable={"50 L/m"}
                    />                        
                </Popup>
            </Marker>
            <Marker position={position2} icon={IconLocation}>
            <Popup maxHeight="10000">
                    <VariableRio
                        iconoVariable={temperaturaRio}
                        nombreVariable={"Temperatura del rio"}
                        valorVariable={"26 °C"}
                    />
                    <VariableRio
                        iconoVariable={nivelAgua}
                        nombreVariable={"Nivel del agua"}
                        valorVariable={"127 cm"}
                    />
                    <VariableRio
                        iconoVariable={caudal}
                        nombreVariable={"Caudal"}
                        valorVariable={"59 L/m"}
                    />                        
                </Popup>
            </Marker>
        </div>
    )
}

export default MakePopUp;