This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## APUNTES

### ____Para Material UI

Para poder redireccionar con el boton
Primero envolvemos nuestro componente con 

import { BrowserRouter as Router, Switch } from "react-router-dom";

y las etiquetas después del return

<Fragment>
<Router>
<!-- aqui tambien ponemos las Rutas y asi podemos ir y venir  -->
<Router>
</Fragment>

El boton debe tener las siguientes especificaciones: 

e importar el Link del react-router-dom

<Button
    component={Link}
    to="/miruta"
    variant="contained"
    >
</Button>
