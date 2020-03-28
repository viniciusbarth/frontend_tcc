import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './components/Login/index';
import Home from './components/Home/index';
import AgroMenu from './components/agroMenu';
import AgroPropriedade from './components/agroPropriedade';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/login" component={Login}/>
      <Route path="/home" component={Home}/>
      <Route path="/home" component={AgroMenu}/>
      <Route path="/propriedade" component={AgroPropriedade}/>
    </Switch>
  </BrowserRouter>
)

export default App;
