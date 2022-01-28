import React from 'react'
import './Syles/VariableRio.css'
import 'boxicons'

const VariableRio =({iconoVariable, nombreVariable,valorVariable}) => (
    <div className='variableCard'>
        <figure className='variableIcono'>
             <img  src ={iconoVariable}/>
        </figure>        
        <div className='variableDatos'>
            <p className='nombreVariable'>{nombreVariable}</p>
            <h4 className='valorVariable'>{valorVariable}</h4>
        </div>
    </div>

);

export default VariableRio;