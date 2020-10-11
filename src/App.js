import React, { Fragment } from 'react';

import './App.css';

import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from './Routes'

// import logo from './assets/logo.png'


function App() {
  return (
    // <div className="App">
    <Fragment>
      <div className="App-header">
      <Router>
      {/* <header className="App-header"> */}
        {/* <h1>DATOS</h1> */}
        {/* <img src={logo} alt="Logo de Grupo intecsa" className="logo"></img>  
      </header> */}
      <main className="App-center-content">
        <Switch>
          { Routes }
        </Switch>
      {/* <CovidForm></CovidForm> */}
      </main>
      
    </Router>
    </div>
    </Fragment>
  );
}

export default App;
