import React from 'react'
import './Styles/VariableRio.css'
import 'boxicons'
import caudalcono from '../VariableIconos/caudal.svg'
import temperaturaRio from '../VariableIconos/temperaturaRio.svg'
import nivelAgua from '../VariableIconos/nivelAgua.svg'


const VariableRio =({iconoVariable, nombreVariable,valorVariable}) => (
    <div className='variableCard'>
        <figure className='variableIcono'>
             <img  src ={iconoVariable}/>
        </figure>        
        <div className='variableDatos'>
            <h4>{nombreVariable}</h4>
            <h3>{valorVariable}</h3>
        </div>
    </div>

);

export default VariableRio;