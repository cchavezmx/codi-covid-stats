import React, { useEffect, useState } from 'react'
// import Radio from '@material-ui/core/Radio';
import './Style.css'

// ESTILOS MATERIAL UI
import { FormControl, FormHelperText, FormLabel, RadioGroup, Radio, FormControlLabel, Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { Autocomplete } from '@material-ui/lab';

// Router Dom
// TODO: CREAR UN ESPACIO DONDE ESTEN LOS USUARIOS Y SE VEA QUIEN YA CONTESTO
// import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';


// import config firebase
import { db } from '../../config/'
import  personaName  from '../../assets/personaName.js'

// import momentDate
import { momentDate } from '../../middlewares/momentDate'
import uniqueRandom from 'unique-random'


function CovidForm() {
       
    //ESTE VALOR VIENE DE LAS PROPS DE LA VENTANA DE USUARIOS
    // lA LISTA ASESINA
    // TODO: Agreagar error en el campo de nombre
    const [ nameUser, setNameUser ] = useState('Nombre')
    const handleNameChange = (_, newValue) => {
        if(newValue === null ){
            alert('Favor de Seleccionar un nombre de la lista')
        }else{
            return setNameUser(newValue)
        }        
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

    // para la temperatura 
    const [ temp, setTemp ] = useState('')
    const handleTempChange = (e) => {
        const tempNumer = Number(e.target.value)
        console.log(tempNumer)
            if(tempNumer < 0 || tempNumer > 38){
                alert('temperatura no valida')
            }else{
                return setTemp(tempNumer)
            }
    }

    // PARA GENERACION DE ID RANDOM 

    const [ idUser, setIdUser ] = useState('')
    const idUniqueUser = () =>{
        const id = uniqueRandom(1,100000)
        return id
    } 

    useEffect(() => {
       setIdUser(idUniqueUser())
    },[])

    
// OBEJTO PARA FIREBASE

    const respObjectSend = {

            id: idUser,
            nombre : nameUser.name,
            temperatura: temp,
            tos: tos,
            dolor: dolor, 
            fiebre: fiber,
            pariente: pariente,
            respiracion: resp,
            fecha: momentDate        
    }
    
// control deL boton Principal
    const [sendData, setSendDataOk] = useState(false)

    // SERVICIO PARA ENVIO DE DATOS

    const getInfoDatabase = async () => {
        const docSend = db.collection('user').doc()
        try {
        await docSend.set(respObjectSend)
        setSendDataOk(true)

        } catch (error) {
        alert('No ha ingresado su nombre')
        // console.log(error)
        }}
    
    // CONTROL DE ENVIO DE INFORMACION 

        const handleForm = async (e) => {
        e.preventDefault()

        if (temp > 0) {
              getInfoDatabase()
        } else {
            setErrorTempField(true)
        }}

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
                    {console.log(idUser)}
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
                <span className='booleanas'>
                    {/* PREGUNTAS BOOLEANAS */}
                    <FormControl component="fieldset">
                      <FormLabel component="legend">¿Ha presentado tos Seaca?</FormLabel>
                      <RadioGroup aria-label="tos" name="tos" value={tos} onChange={handleTosChange}>
                          <FormControlLabel control={<Radio color="primary" />} value={false} label="No"></FormControlLabel>
                          <FormControlLabel control={<Radio color="primary" />} value={true} label="Si"></FormControlLabel>
                      </RadioGroup>
                    </FormControl>
                </span>
                <span className='booleanas'>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">¿Dolor de garganta o extremidades?</FormLabel>
                      <RadioGroup aria-label="dolor" name="dolor" value={dolor} onChange={handleDolorChange}>
                          <FormControlLabel control={<Radio color="primary" />} value={false} label="No"></FormControlLabel>
                          <FormControlLabel control={<Radio color="primary" />} value={true} label="Si"></FormControlLabel>
                      </RadioGroup>
                    </FormControl>
                </span>
                <span className='booleanas'>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">¿Ha presentado fiebre?</FormLabel>
                      <RadioGroup aria-label="fiber" name="fiber" value={fiber} onChange={handleFiberChange}>
                          <FormControlLabel control={<Radio color="primary" />} value={false} label="No"></FormControlLabel>
                          <FormControlLabel control={<Radio color="primary" />} value={true} label="Si"></FormControlLabel>
                      </RadioGroup>
                    </FormControl>
                </span>
                <span className='booleanas'>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">¿Ha estado en contacto con un paciente diagnosticado con COVID-19?</FormLabel>
                      <RadioGroup aria-label="pariente" name="pariente" value={pariente} onChange={handleParienteChange}>
                          <FormControlLabel control={<Radio color="primary" />} value={false} label="No"></FormControlLabel>
                          <FormControlLabel control={<Radio color="primary" />} value={true} label="Si"></FormControlLabel>
                      </RadioGroup>
                    </FormControl>
                    {/* respiracion */}
                </span>
                <span className='booleanas'>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">¿Dificultad para respirar?</FormLabel>
                      <RadioGroup aria-label="resp" name="resp" value={resp} onChange={handleRespChange}>
                          <FormControlLabel control={<Radio color="primary" />} value={false} label="No"></FormControlLabel>
                          <FormControlLabel control={<Radio color="primary" />} value={true} label="Si"></FormControlLabel>
                      </RadioGroup>
                    </FormControl>
                </span>
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
