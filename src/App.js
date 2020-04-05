import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './components/Login/index';
import Home from './components/views/Home/index';
import AgroPropriedade from './components/views/Cadastro';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/login" component={Login}/>
      <Route path="/home" component={Home}/>
      <Route path="/cadastros" component={AgroPropriedade}/>
    </Switch>
  </BrowserRouter>
)

export default App;
