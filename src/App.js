import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [nombre, setNombre] = useState("Ingrese su nombre");
  const cambiarNombre = (e) => {
    const value = e.target.value;
    console.log(value);
    setNombre(value);
  }
  const click = (e) => {

    console.log("Estado actual es: ", nombre);


  }
  return (
    <div className='mi_formulario'>
      <div className='mi_formulario_header'>
        <h1 className='mi_formulario_titulo'>MI Formulario</h1>
      </div>
      <div className='mi_formulario_body'>
        <div className='mi_formulario_form'>
          <label className='mi_formulario_label'>
            Nombre
          </label>
          <br></br>
          <input id="Nombre"
            name="nombres"
            value={nombre} onChange={cambiarNombre}
            className='mi_formulario_input'></input>
          <button onClick={click} className='mi_formulario_button'>guardar</button>
        </div>
      </div>
      <div className='mi_formulario_footer'>
        <div className='mi_formulario_group'>
          <span className='mi_formulario_label'>
              este es mi primer formulario con css
          </span>

        </div>
      </div>
    </div>

  );
}

export default App;
