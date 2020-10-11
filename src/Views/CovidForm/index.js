import React, { useState } from 'react'
// import Radio from '@material-ui/core/Radio';
import './Style.css'

// ESTILOS MATERIAL UI
import { FormControl, FormHelperText, FormLabel, RadioGroup, Radio, FormControlLabel, Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Autocomplete from '@material-ui/lab/Autocomplete';


// Router Dom
// TODO: CREAR UN ESPACIO DONDE ESTEN LOS USUARIOS Y SE VEA QUIEN YA CONTESTO
// import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';


// import config firebase
import { db } from '../../config/'

import  personaName  from '../../assets/personaName.js'



function CovidForm() {

        
    //ESTE VALOR VIENE DE LAS PROPS DE LA VENTANA DE USUARIOS
    // lA LISTA ASESINA
    const [ nameUser, setNameUser ] = useState('Nombre')
    const handleNameChange = (e, newValue) => {
        console.log(e, newValue)
        setNameUser(newValue)
        
    }

    // PARA LA TOS
    const [tos, setTos] = useState(false)
    const handleTosChange = (e) => {
        if(e.target.value === 'false') return setTos(false)
        if(e.target.value === 'true' ) return setTos(true)
    }

    // PARA LOS DOLORES
    const [dolor, setDolor] = useState(false)
    const handleDolorChange = (e) => {
        if(e.target.value === 'false') return setDolor(false)
        if(e.target.value === 'true' ) return setDolor(true)
    }

    // PARA LA FIBRE
    const [fiber, setFiber] = useState(false)
    const handleFiberChange = (e) => {
        if(e.target.value === 'false') return setFiber(false)
        if(e.target.value === 'true' ) return setFiber(true)
    }

    // PARA EL PARIENTE
    const [pariente, setPariente] = useState(false)
    const handleParienteChange = (e) => {
        if(e.target.value === 'false') return setPariente(false)
        if(e.target.value === 'true' ) return setPariente(true)
    }

    // PARA LA RESPIRACION
    const [resp, setResp] = useState(false)
    const handleRespChange = (e) => {
        if(e.target.value === 'false') return setResp(false)
        if(e.target.value === 'true' ) return setResp(true)
    }

    // para nombre de la persona
    // const [ name, setName ] = useState('')
    // const handleNameChage = (e) =>{
    //     setName(e.target.value)
    // }


    // para la temperatura 
    const [ temp, setTemp ] = useState('')
    const handleTempChange = (e) => {
        const tempNumer = Number(e.target.value)
        console.log(tempNumer)
            if(tempNumer < 0){
                alert('temperatura no valida')
            }else{
                return setTemp(tempNumer)
            }
    }


// OBEJTO PARA FIREBASE

    const respObjectSend = {
        
            nombre : nameUser.name,
            temperatura: temp,
            tos: tos,
            dolor: dolor, 
            fiebre: fiber,
            pariente: pariente,
            respiracion: resp,
            fecha: Date.now()
        
    }
// control de boton

    const [sendData, setSendDataOk] = useState(false)

        const getInfoDatabase = async () => {
            const docSend = db.collection('user').doc()

            try {
            await docSend.set(respObjectSend)
            setSendDataOk(true)
            } catch (error) {
            console.log('nel pastel')
            }
        }
    
        const handleForm = async (e) => {
        e.preventDefault()

        if (temp > 0) {
              getInfoDatabase()
        } else {
            setErrorTempField(true)
        }    
    }

    // control de error de temperatura 
    const [errorTempField, setErrorTempField] = useState(false)


    // redireccionamos al terminar de mandar los datos
    if(sendData) 
    return <Redirect to="/" />
    
    return (

        <div className="container">
        <form>
            <div className="container">
                <div className="center--div">
                    {/* NOMBRE DE LA PERSONA COMBO */}
                    <FormControl>
                        <Autocomplete
                        value={nameUser}
                        onChange={handleNameChange}
                        id="combo-box-demo"
                        options={personaName}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Nombre" variant="outlined" />}
                        />
                        <FormHelperText id="nombre-helper-text" >Revisa que sea Correcto tu nombre antes de continuar</FormHelperText>
                    </FormControl>
                </div>
                {/* TEMPERATURA */}
                <div center--div>
                    <FormControl>
                      <TextField style={{ width: 300 }} error={errorTempField} helperText={errorTempField ? "Anota tu temperatura" : null } type="number" value={temp} id="temp" aria-labelledby="temp-helper-text" onChange={handleTempChange}></TextField>
                      <FormHelperText id="temp-helper-text">Anota tu temperatura</FormHelperText> 
                    </FormControl>  
                </div>
                <div>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Tos Seca</FormLabel>
                      <RadioGroup aria-label="tos" name="tos" value={tos} onChange={handleTosChange}>
                          <FormControlLabel control={<Radio color="primary" />} value={false} label="No"></FormControlLabel>
                          <FormControlLabel control={<Radio color="primary" />} value={true} label="Si"></FormControlLabel>
                      </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Dolor</FormLabel>
                      <RadioGroup aria-label="dolor" name="dolor" value={dolor} onChange={handleDolorChange}>
                          <FormControlLabel control={<Radio color="primary" />} value={false} label="No"></FormControlLabel>
                          <FormControlLabel control={<Radio color="primary" />} value={true} label="Si"></FormControlLabel>
                      </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">fiebre</FormLabel>
                      <RadioGroup aria-label="fiber" name="fiber" value={fiber} onChange={handleFiberChange}>
                          <FormControlLabel control={<Radio color="primary" />} value={false} label="No"></FormControlLabel>
                          <FormControlLabel control={<Radio color="primary" />} value={true} label="Si"></FormControlLabel>
                      </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Pariente</FormLabel>
                      <RadioGroup aria-label="pariente" name="pariente" value={pariente} onChange={handleParienteChange}>
                          <FormControlLabel control={<Radio color="primary" />} value={false} label="No"></FormControlLabel>
                          <FormControlLabel control={<Radio color="primary" />} value={true} label="Si"></FormControlLabel>
                      </RadioGroup>
                    </FormControl>
                    {/* respiracion */}
                </div>
                <div>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Respiracion</FormLabel>
                      <RadioGroup aria-label="resp" name="resp" value={resp} onChange={handleRespChange}>
                          <FormControlLabel control={<Radio color="primary" />} value={false} label="No"></FormControlLabel>
                          <FormControlLabel control={<Radio color="primary" />} value={true} label="Si"></FormControlLabel>
                      </RadioGroup>
                    </FormControl>
                </div>
                <span className="container--boton">
                  <Button
                    // component={ Redirect }
                    // to="/"
                    type="submit"
                    onClick={handleForm}
                    variant="contained"
                    color="primary"
                    className="button"
                    endIcon={<SendIcon />}
                    >Enviar
                    </Button>
                </span>
            </div>
        </form>
        {/* // </Container> */}
        </div>
        
    )
}

export default CovidForm
