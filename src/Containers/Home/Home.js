import React, { Component, useEffect, useState } from 'react'
import { Box, Grid } from '@material-ui/core';
import Weather from '../../components/Weather/Weather';
import sunny from '../../Icons/sunny.svg'
import "./Home.css";
import { MapContainer, TileLayer, Marker, position, Popup } from "react-leaflet";
import { } from "leaflet";
import 'leaflet/dist/leaflet.css';
import MapNode from '../Maps/MapNode';
import Enumerable from 'linq';

//Actions
import { 
    GetDataFromOpenWeather, 
    getSensors, 
    getVariablesInformation,
    getDatos,
    getInformationSensor
} from './Actions';

const axios = require('axios').default;

const cityname = 'Cali';
const apiKey = 'b873cff701de99b0c4201f63c80f0d93';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
const api_weather = `${baseURL}?q=${cityname}&appid=${apiKey}`;

var fecha = new Date;
let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
let mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let fechaActual = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mes[fecha.getMonth()]} de ${fecha.getFullYear()}`;
export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
            data: {},
            data_nodo_sensores: {},
            data_nodo_variables: {},
            data_nodo_joined: {}
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
                this.setState({ data: res });
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
                    console.log(this.state.data_nodo_joined)
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
        const { temp, humidity } = this.state.data;
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
                                <MapNode></MapNode>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div >
        )
    };
}

export default Home;