import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //SIGUIENTE: CAPÍTULO 19

import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/projects/Proyectos';

import ProyectoState from './context/proyectos/proyectoState';

function App() {
  return (
    <ProyectoState>
        <Router>
          <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
              <Route exact path="/proyectos" component={Proyectos} />
          </Switch>
        </Router>
    </ProyectoState>
  );
}

export default App;
