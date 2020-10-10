import React, { Fragment } from 'react';
import CovidForm from '../src/Components/CovidForm'
import './App.css';

import logo from './assets/logo.png'


function App() {
  return (
    // <div className="App">
    <Fragment>
      <header className="App-header">
        {/* <h1>DATOS</h1> */}
        <img src={logo} alt="Logo de Grupo intecsa" className="logo"></img>  
      </header>
      <main className="App-center-content">
      <CovidForm></CovidForm>
      </main>
      
    {/* </div> */}
    </Fragment>
  );
}

export default App;
