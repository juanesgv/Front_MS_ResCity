import React from 'react'
import './VariableRio.css'
import 'boxicons'

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