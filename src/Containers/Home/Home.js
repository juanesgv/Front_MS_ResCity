import React, { Component } from 'react'
import { Box, Grid } from '@material-ui/core';
import Weather from '../../components/Weather/Weather';
import sunny from '../../Icons/sunny.svg'
import "./Home.css";
import { MapContainer, TileLayer,Marker,position,Popup } from "react-leaflet";
import { } from "leaflet";
import 'leaflet/dist/leaflet.css';
import MapNode from '../Maps/MapNode';

export class Home extends Component {
    render() {
        return (
            <div className='homeContainer'>
                <h1 className='TituloHome'>Dashboard</h1>
                <h3 className='ClimaHoy'>Clima hoy</h3>
                <Box sx={{ m: "0 0 32px 0" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Weather
                                ciudad="Cali"
                                fechaYhora="14 de mayo 5:30 pm"
                                temperatura="27"
                                humedad="33"
                                iconoclima={sunny}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <h3 className='ClimaHoy'>Estado del rio</h3>
                <Box sx={{ m: "0 0 32px 0" }}>
                    <Grid container spacing={3}>

                        <Grid item xs={12}>
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