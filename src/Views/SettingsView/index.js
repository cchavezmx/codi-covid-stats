import React, { Fragment, useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import './Styles.css'

// COMPONENTES
import AppBar from '../../Components/AppBar'
import { Container } from '@material-ui/core';

// import FireStore
import db from '../../config'

const columns = [
    { field: 'nombre', headerName: 'Nombre', width: 350 },
    { field: 'temperatura', headerName: 'C°', width: 80 },
    { field: 'fecha', headerName: 'Tos', width: 130 },
  ];
  

function SettingsView() {

    const [ dataCovidInfo, setDataCovidInfo ] = useState([])
    const laListaAsesina = []
        
    const dataCovidUser = async () => {

        const doc = db.collection('user')

         await doc.get()
            .then( snap => snap.forEach(doc => laListaAsesina.push(doc.data())))
            .catch( err => console.log(err))

        // if(dataCovid) return setDataCovidInfo(dataCovid)
        return setDataCovidInfo(laListaAsesina)

    }

    useEffect(() => {
        dataCovidUser()
    }, [])

    return (
    <Fragment>
        {console.log(dataCovidInfo)}
        <AppBar></AppBar>
        <Container maxWidth="xl">
        <div lassName="container--viwsettings" style={{ background: 'white', top:120, height: 600, width: '100%',}}>
            <DataGrid rows={dataCovidInfo} columns={columns} pageSize={10} checkboxSelection />
        </div>
        </Container>
    </Fragment>
    )
}

export default SettingsView
