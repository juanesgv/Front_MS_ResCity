import React from 'react';
import './Styles/Forms.css'
import { Button, ThemeProvider,TextField, Grid, Box } from '@material-ui/core';
import theme from '../../temaConfig';




const Forms = () => (

    <ThemeProvider theme={theme}>

        <div className='container-registro'>
            <form className='formResgistro'>
                <h2>Suscríbete y mantente informado sobre el estado de los rios</h2>
                <Grid container spacing={3} >
                    <Grid item xs={6}>
                        <TextField fullWidth label="Nombre" margin="normal"  />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Apellido" margin="normal" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Correo electrónico" margin="normal" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Número de celular" margin="normal" />
                    </Grid>
                </Grid>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: "24px 0px",
                    m: 0,
                }}>
                    <Button color="primary" variant='contained'>Suscribirse</Button>
                </Box>
            </form>
        </div>

    </ThemeProvider>

);

export default Forms;





