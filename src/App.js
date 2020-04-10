import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { logout, isAuthenticated } from "./services/auth";
import Login from './components/Login/index';
import Home from './components/views/Home/index';
import FormPropriedade from './components/views/Cadastro/formPropriedade';
import FormUser from './components/views/Cadastro/formUser';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <>
          <Component {...props} />
        </>
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const NoAuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Redirect to={{ pathname: "/home", state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <PrivateRoute exact path="/home" component={Home} />
        <NoAuthRoute path="/login" component={Login} />
        <PrivateRoute exact path="/cadastro-propriedade" component={FormPropriedade} />
        <PrivateRoute exact path="/cadastro-usuario" component={FormUser} />
        <PrivateRoute
          exact
          path="/sobre"
          component={() => {
            return <Redirect to={{ pathname: "/" }} />;
          }}
        />
        <Route
          path="/logout"
          component={() => {
            logout();
            return <Redirect to={{ pathname: "/" }} />;
          }}
        />
        <Route path="*" component={() => <h1>Página não encontrada</h1>} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
