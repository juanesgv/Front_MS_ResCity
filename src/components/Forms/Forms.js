import React, { Component, useState } from 'react';
import './Forms.css'
import { Button, ThemeProvider, TextField, Grid, Box, Snackbar } from '@material-ui/core';
// import { Stack, Alert } from '@mui/material';
import theme from '../../temaConfig';
import { Axios } from 'axios';
import { render } from '@testing-library/react';
import MuiAlert from '@mui/material/Alert';
import { EnviromentVariables } from '../../Constants/Constants'
import { postUsers } from "../../Containers/Home/Actions"
import {CustomizedSnackbars} from '../../components/Alerts/Alert'
import { Pattern } from '@mui/icons-material';


const axios = require('axios').default;



export class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {

            name: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            whatsAppFlag: true,
            
            messageAlert : {
                type : "",
                message : "",
                alerTitle : "",
                show : false
            }
        };

    }
    

    changeHandler = (e) => {
        this.setState({ 
            [e.target.id] : e.target.value
        })
        console.log(this.state)
    }

    mailIsValid({email}){
        email = this.state.email;
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var isValid = expReg.test(email)
    }

    submitHandler = e => {
        e.preventDefault()
        postUsers({
            name: this.state.name,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: `+57${this.state.phoneNumber}`,
            whatsAppFlag: true
        })
            .then(response => { 
                console.log(response)
                // window.alert("¡Te has registrado con éxtito!"); 
                this.setState({
                    messageAlert: {
                        type : "success",
                        alerTitle : "¡Te has registrado con éxtito!",
                        message : "Ahora recibirás reportes y notificaciones sobre el estado del río de nuestra ciudad",
                        show : true
                    }
                })
                console.log(this.state)   
            })
            .catch(error => {
                console.log(error.response.data.errors.Otros)
                // window.alert(error); 
                this.setState({
                    messageAlert: {
                        type : "error",
                        message : error.response.data.errors.Otros,
                        show : true
                    }
                })
            })

            if (this.state.messageAlert.show == true){
                this.setState({
                    messageAlert :{
                        show: false
                    }
                })
            }
    }

    isValid (){
        const { name, lastName, phoneNumber, email } = this.state
        if((name && lastName && phoneNumber && email) === ''){
            return false
        }
        return true;
    }    


    render() {
        const { name, lastName, phoneNumber, email } = this.state
        return (
            <ThemeProvider theme={theme}>
                <div className='container-registro'>
                    <form className='formResgistro' onSubmit={this.submitHandler} >
                        <h2>Suscríbete y mantente informado sobre el estado de los rios</h2>
                        <Grid container spacing={3}  >
                            <Grid item xs={6}>
                                <TextField fullWidth label="Nombre" margin="normal" id='name' onChange={this.changeHandler} value={name} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth label="Apellido" margin="normal" id='lastName' onChange={this.changeHandler} value={lastName} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField type={"email"} fullWidth label="Correo electrónico" margin="normal" id='email' onChange={this.changeHandler} value={email} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField type={"number"} fullWidth label="Número de celular" margin="normal" id='phoneNumber' onChange={this.changeHandler} value={phoneNumber} />
                            </Grid>
                        </Grid>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            p: "24px 0px",
                            m: 0,
                        }}>
                            <Button disabled={!this.isValid()} type='submit' color="primary" variant='contained'>Suscribirse</Button>
                        </Box>
                    </form>
                </div>
                
                
                {
                 this.state.messageAlert.show ? <CustomizedSnackbars type={this.state.messageAlert.type} message ={this.state.messageAlert.message} alerTitle ={this.state.messageAlert.alerTitle} show ={this.state.messageAlert.show} /> :''
                }
                
            
            </ThemeProvider>
        )
    }

}

export default Forms;





