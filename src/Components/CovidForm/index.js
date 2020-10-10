import React, { useState } from 'react'
// import Radio from '@material-ui/core/Radio';
import './Style.css'

// STILOS MATERIAL UI
import { FormControl, InputLabel, Input, FormHelperText, FormLabel, RadioGroup, Radio, FormControlLabel, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


function CovidForm( { personName = 'carlos chavez '} ) {

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
    const [ temp, setTemp ] = useState(Number)
    const handleTempChange = (e) => {
        setTemp(Number(e.target.value))
    }


// OBEJTO PARA FIREBASE

    const respObjectSend = {
        
            nombre : personName,
            temperatura: temp,
            tos: tos,
            dolor: dolor, 
            fiebre: fiber,
            pariente: pariente,
            respiracion: resp,
            fecha: Date.now()
        
    }

    
    
    //ESTE VALOR VIENE DE LAS PROPS DE LA VENTANA DE USUARIOS
    
    return (

        <div className="container">
        
         {console.log(respObjectSend)}

            <form>
            <div className="container">
                <div className="center--div">
                    <FormControl>
                        <InputLabel htmlFor="nombre">Nombre</InputLabel>
                        <Input disabled="true" value={personName} id="nombre" aria-describedby="nombre-helper-text"></Input>
                        <FormHelperText id="nombre-helper-text" >Revisa que sea Correcto tu nombre antes de continuar</FormHelperText>
                    </FormControl>
                </div>
                {/* TEMPERATURA */}
                <div center--div>
                    <FormControl>
                      <Input type="number" required="true" id="temp" aria-labelledby="temp-helper-text" onChange={handleTempChange}></Input>
                      <FormHelperText id="temp-helper-text">Anota tu temperatura</FormHelperText>
                    </FormControl>  
                </div>
                <div>
                    <FormControl component="fieldset">
                        {console.log(typeof(tos), tos)}
                      <FormLabel component="legend">Tos Seca</FormLabel>
                      <RadioGroup aria-label="tos" name="tos" value={tos} onChange={handleTosChange}>
                          <FormControlLabel control={<Radio color="primary" />} value={false} label="No"></FormControlLabel>
                          <FormControlLabel control={<Radio color="primary" />} value={true} label="Si"></FormControlLabel>
                      </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <FormControl component="fieldset">
                        {console.log(typeof(dolor), dolor)}
                      <FormLabel component="legend">Dolor</FormLabel>
                      <RadioGroup aria-label="dolor" name="dolor" value={dolor} onChange={handleDolorChange}>
                          <FormControlLabel control={<Radio color="primary" />} value={false} label="No"></FormControlLabel>
                          <FormControlLabel control={<Radio color="primary" />} value={true} label="Si"></FormControlLabel>
                      </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <FormControl component="fieldset">
                        {console.log(typeof(fiber), fiber)}
                      <FormLabel component="legend">fiebre</FormLabel>
                      <RadioGroup aria-label="fiber" name="fiber" value={fiber} onChange={handleFiberChange}>
                          <FormControlLabel control={<Radio color="primary" />} value={false} label="No"></FormControlLabel>
                          <FormControlLabel control={<Radio color="primary" />} value={true} label="Si"></FormControlLabel>
                      </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <FormControl component="fieldset">
                        {console.log(typeof(pariente), pariente)}
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
                        {console.log(typeof(resp), resp)}
                      <FormLabel component="legend">Respiracion</FormLabel>
                      <RadioGroup aria-label="resp" name="resp" value={resp} onChange={handleRespChange}>
                          <FormControlLabel control={<Radio color="primary" />} value={false} label="No"></FormControlLabel>
                          <FormControlLabel control={<Radio color="primary" />} value={true} label="Si"></FormControlLabel>
                      </RadioGroup>
                    </FormControl>
                </div>
                <span className="container--boton">
                  <Button
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
