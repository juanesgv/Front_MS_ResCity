import React, { Component, useEffect, useState } from 'react'
import { Box, Grid } from '@material-ui/core';
import Weather from '../../components/Weather/Weather';
import sunny from '../../Icons/sunny.svg'
import "./Home.css";
import { MapContainer, TileLayer, Marker, position, Popup } from "react-leaflet";
import { } from "leaflet";
import 'leaflet/dist/leaflet.css';
import MapNode from '../Maps/MapNode';
import MakePopUp from '../Maps/MakePopUp'
import { IconLocation } from "../Maps/IconLocation"
import Enumerable from 'linq';
import VariableRio from '../Maps/VariableRio';
import { CAUDAL, NIVELAGUA, CAUDAL_ICON } from '../../Constants/ConstantsVariables';

//Actions
import {
    GetDataFromOpenWeather,
    getSensors,
    getVariablesInformation,
    getDatos,
    getInformationSensor
} from './Actions';

var fecha = new Date;
let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
let mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let fechaActual = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mes[fecha.getMonth()]} de ${fecha.getFullYear()}`;
export class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
            dataWeather: [],
            data_nodo_sensores: [],
            data_nodo_variables: [],
            data_nodo_joined: []
        };
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString(),
            });
        }, 1000);

        GetDataFromOpenWeather()
            .then(res => {
                this.setState({ dataWeather: res });
            }).catch(err => {
                console.log(err)
            });

        getSensors()
            .then(sensores => {
                getVariablesInformation()
                    .then(variables => {
                        getDatos()
                            .then(datos => {
                                let dataJoined = Enumerable.from(sensores)
                                    .groupJoin(
                                        Enumerable.from(datos), pk => pk.ID_NODO_SENSOR, fk => fk.ID_NODO_SENSOR, (sensores, data) => {
                                            let variableJoined = Enumerable.from(data).groupJoin(
                                                Enumerable.from(variables), pk => pk.ID_VARIABLE, fk => fk.ID_VARIABLE, (data, variable) => ({
                                                    ...data, VARIABLE: variable.toArray()
                                                })
                                            )
                                            return {
                                                ...sensores, DATA: variableJoined.toArray()
                                            }
                                        }
                                    ).toArray().map((x, i) => (
                                        {
                                            ID_NODO_SENSOR: x.ID_NODO_SENSOR,
                                            LATITUD: x.LATITUD,
                                            LONGITUD: x.LONGITUD,
                                            DATA: x.DATA.map((a, b) => (
                                                {
                                                    ID_VARIABLE: a.ID_VARIABLE,
                                                    NOMBRE_VARIABLE: a.VARIABLE[0].NOMBRE_VARIABLE,
                                                    UNIDAD_MEDIDA: a.VARIABLE[0].UNIDAD_MEDIDA,
                                                    VALOR: a.PROM_VALOR_DATO
                                                }
                                            )),
                                        }
                                    ));
                                this.setState({
                                    data_nodo_joined: dataJoined
                                });
                            }).catch(err => {
                                console.log(err)
                            })
                    }).catch(err => {
                        console.log(err)
                    });
            }).catch(err => {
                console.log(err)
            });

    };


    render() {
        const { time } = this.state;
        const { temp, humidity } = this.state.dataWeather;
        const tempCelcius = temp - 273.15;
        const celsius = tempCelcius.toFixed();

        return (
            <div className='homeContainer'>
                <h1 className='TituloHome'>Dashboard</h1>
                <h3 className='ClimaHoy'>Clima hoy</h3>

                <Box sx={{ m: "0 0 32px 0" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Weather
                                ciudad="Cali"
                                fechaYhora={`${fechaActual}  ${time}`}
                                temperatura={celsius}
                                humedad={humidity}
                                iconoclima={sunny}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <h3 className='ClimaHoy'>Estado del rio</h3>
                <Box sx={{ m: "0 0 32px 0" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} >
                            <div className='MapaRio'>
                                <MapContainer center={[3.4277513506172137, -76.51947281125118]} zoom={12}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    {/* <MakePopUp></MakePopUp> */}

                                    {
                                        this.state.data_nodo_joined.map((item, idx) => {
                                            return (
                                                <Marker key={idx} position={[item.LATITUD, item.LONGITUD]} icon={IconLocation} >
                                                    <Popup maxHeight="10000" >        
                                                        {
                                                            item.DATA.length !== 0 ?
                                                                item.DATA?.map((x, i) => {
                                                                    return(
                                                                        // <VariableRio nombreVariable={x.NOMBRE_VARIABLE.toLowerCase().replace(/\w\S*/g, function(t) { return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(); })} valorVariable={`${x.VALOR} ${x.UNIDAD_MEDIDA}`} />
                                                                        <VariableRio nombreVariable={x.NOMBRE_VARIABLE.toLowerCase().replace("_", " ").replace(/\w\S*/g, function(t) { return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(); })} valorVariable={`${x.VALOR.toFixed(1)} ${x.UNIDAD_MEDIDA}`} />
                                                                    )
                                                                })
                                                            :
                                                            <p>Soy una perra</p>
                                                        }
                                                    </Popup>
                                                </Marker>
                                            )
                                        })
                                    }
                                </MapContainer>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div >
        )
    };
}

export default Home;