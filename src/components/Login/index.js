import React from 'react';

import "./login.css";

const Login = () => (
    <div class="login">
        <h1 class="card-title textLogin">Login</h1>
        <form class="form-signin">
          <div class="form-label-group padd-10">
            <input type="text" id="inputUser" class="form-control" placeholder="Nome de usuario" required autofocus></input>
          </div>

          <div class="form-label-group padd-10">
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
          </div>

          <input type="submit" name="" value="Login"></input>
          <a href="#">Esqueceu a sua senha?</a><br></br>
          <a href="#">Ainda não possui uma conta?</a>
        </form>
    </div>
);

export default Login;