import React from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom'

import Login from './components/Login/index';
import Home from './components/views/Home/index';
import FormPropriedade from './components/views/Cadastro/formPropriedade';
import FormUser from './components/views/Cadastro/formUser';

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/login" component={Login}/>
      <Route path="/home" component={Home}/>
      <Route path="/cadastro-propriedade" component={FormPropriedade}/>
      <Route path="/cadastro-usuario" component={FormUser}/>
    </Switch>
  </HashRouter>
)

export default App;
