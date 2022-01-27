import React, { Component } from 'react'
import { Box, Grid } from '@material-ui/core';
import ClimaComponent from '../ClimaComponent.js'
import VariableRio from '../VariableRio'
import caudalcono from '../../VariableIconos/caudal.svg'
import temperaturaRio from '../../VariableIconos/temperaturaRio.svg'
import nivelAgua from '../../VariableIconos/nivelAgua.svg'
import sunny from '../../ClimaIconos/sunny.svg'
import './Styles/Home.css'
import Forms from '../Elements/Forms'



export class Home extends Component {
    render() {
        return (
            <div className='homeContainer'>
                <h1 className='TituloHome'>Dashboard</h1>
                <h3 className='ClimaHoy'>Clima hoy</h3>
                <Box sx={{ m: "0 0 32px 0" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <ClimaComponent
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
                                <h1>Mapa de los nodos</h1>
                            </div>
                        </Grid>
                        {/* <Grid item xs={4}>
                        
                            <div className='VariablesRio'>
                                <VariableRio
                                    iconoVariable={temperaturaRio}
                                    nombreVariable="Temperatura del rio"
                                    valorVariable="24 °C"
                                />
                                <VariableRio
                                    iconoVariable={nivelAgua}
                                    nombreVariable="Nivel del agua"
                                    valorVariable="110 cm"
                                />

                                <VariableRio
                                    iconoVariable={caudalcono}
                                    nombreVariable="Caudal"
                                    valorVariable="50 L/m"
                                />
                            </div>
                        </Grid> */}
                    </Grid>
                </Box>
               
                
            </div>
        )
    };

}

export default Home;