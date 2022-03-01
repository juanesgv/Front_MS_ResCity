import React from 'react'
import './Syles/VariableRio.css'
import 'boxicons'
import nivelAguaIcon from "../../Icons/nivelAgua.svg";
import caudalIcon from "../../Icons/caudal.svg";
import { CAUDAL, NIVELAGUA, CAUDAL_ICON } from '../../Constants/ConstantsVariables'

const iconsVariables = {
    [CAUDAL] : {caudalIcon},
    [NIVELAGUA] : {nivelAguaIcon},
    [CAUDAL_ICON] : "icono caudal"
}

const getVariableIcon = function(iconoVariable){
    const iconV = iconsVariables[iconoVariable] ? iconsVariables[CAUDAL_ICON] : console.log(iconsVariables[CAUDAL])
    return <img src={iconV}/>;
    
}

const VariableRio =({iconoVariable, nombreVariable,valorVariable}) => (
    <div className='variableCard'>     
        <div className='variableDatos'>
            <p className='nombreVariable'>{nombreVariable}</p>
            <h4 className='valorVariable'>{valorVariable}</h4>
        </div>
    </div>

);

export default VariableRio;