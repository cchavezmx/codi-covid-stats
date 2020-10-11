import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

// VISTAS
import CovidFrom from './Views/CovidForm'
import Home from './Views/Home'
import SettingsView from './Views/SettingsView'


export default 
    <Fragment>
        <Route 
        exact path="/" component={Home}
        />
        <Route 
        exact path="/formcovid" component={CovidFrom}
        />
        <Route
        exact path="/settings" component={SettingsView}
        /> 
    </Fragment>

