import './App.css';
import './global.css';
import ClimaComponent from './componentes/ClimaComponent';
import VariableRio from './componentes/VariableRio';
import sunny from './ClimaIconos/sunny.svg'
import rain from './ClimaIconos/rain.svg'
import caudalcono from './VariableIconos/caudal.svg'
import temperaturaRio from './VariableIconos/temperaturaRio.svg'
import nivelAgua from './VariableIconos/nivelAgua.svg'
import Form from '../src/componentes/Elements/Forms'
import {Button, Tabs, TextField}  from '@material-ui/core';
import MuiTab from '../src/componentes/Elements/MuiTab'
import Home from '../src/componentes/Pages/Home'




function App() {
  return (
    <div className="App">
      
      <MuiTab></MuiTab>
      

      {/* <ClimaComponent
        ciudad="Cali"
        fechaYhora="14 de mayo 5:30 pm"
        temperatura="27"
        humedad="33"
        iconoclima={sunny}
      />

      <VariableRio
        iconoVariable={caudalcono}
        nombreVariable="Caudal"
        valorVariable="50 L/m"
      />

      <VariableRio
        iconoVariable={temperaturaRio}
        nombreVariable="Temperatura del río"
        valorVariable="23 °C"
      />

      <VariableRio
        iconoVariable={nivelAgua}
        nombreVariable="Nivel del agua"
        valorVariable="110 cm"
      /> */}

      <Form></Form>

    </div>
  );
}

export default App;
