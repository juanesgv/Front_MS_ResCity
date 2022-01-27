import React from 'react'
import './Styles/ClimaComponent.css'
import 'boxicons'
import sunny from '../ClimaIconos/sunny.svg'
import rain from '../ClimaIconos/rain.svg'

const ClimaComponent = ({ciudad,fechaYhora,temperatura,humedad,iconoclima}) => (
    
    <div className='ClimaCard'>
        <div className='ciudad' >
            <box-icon type='solid' name='map' color="#4723D9" ></box-icon>
            <h4 className="NombreCiudad">{ciudad}</h4>
        </div>

        <p className='fechaYhora'>{fechaYhora}</p>

        <div className='temperaturayhumudad'>
            <div className='Temperaturadiv'>
                <img className='imagenClima' src={iconoclima}></img>
                <h1> {temperatura} °C</h1>
            </div>

            <div className='humedad'>
                    <h4>Humedad</h4>
                <div>
                    <box-icon type='solid' name='droplet' color="#4723D9"></box-icon>
                    <h3>{humedad} %</h3>
                </div>
                
            </div>
        </div>
    </div>
);

export default ClimaComponent;