import React from 'react'
import './Nuevaform.css'

import AppBar from '../../Components/AppBar'

const NewForm = () => {
    return (
        <div className="container--root">
            <AppBar></AppBar>
            <h1>NUEVO FORMULARIO</h1>

            <form onSubmit={() => alert('ON SUBMIT')}>

            <div className="container--field">
                <label>Nombre</label>
                <input></input>
            </div>
            <div className="container--field">
                <label>Teléfono</label>
                <input></input>
            </div>
            <div className="container--chekbox">
            {/* aqui van los divs de las opciones */}
                
            <div className="container--field">
                <label>tos</label>
                <input></input>
            </div>
            <div className="container--field">
                <label>garganta</label>
                <input></input>
            </div>
            <div className="container--field">
                <label>fiebre</label>
                <input></input>
            </div>
            <div className="container--field">
                <label>paciente</label>
                <input></input>
            </div>
            <div className="container--field">
                <label>respirar</label>
                <input></input>
            </div>
            {/* Fin de las opciones */}
            </div>

            </form>
            
        </div>
    )

    // Ultimo corchete
}

export default NewForm
