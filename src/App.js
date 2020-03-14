import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom' 

import Login from './components/Login/index';
import Home from './components/Home/index';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/home" component={Home}/>
    </Switch>
  </BrowserRouter>
)

export default App;
