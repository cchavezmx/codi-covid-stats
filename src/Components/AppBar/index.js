import React, { Fragment } from 'react'
import './Styles.css'

// Estilos de UI
import { AppBar, Toolbar, Typography } from '@material-ui/core'


function AppBAr() {
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
        <Typography variant="h3" className="toolbar--appbar">
          Settings
        </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

export default AppBAr
