const express = require('express');
const favicon = require('express-favicon')
const path = require('path')
const PORT = process.env.PORT || 8000;

// Creamos la instancia
const webapp = express();

// Agreagamos el iconito
webapp.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

// dirname se refiere al directorio donde esta corriendo la aplicacion
webapp.use(express.static(__dirname))
webapp.use(express.static(path.join(__dirname, 'build')));


webapp.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


webapp.listen(PORT, () => {console.log('Esta vivo!!!')})