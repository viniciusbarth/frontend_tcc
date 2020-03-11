import React from 'react';

import "./login.css";

const Login = () => (
    <div class="container boxLogin">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title textLogin">Login</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <label for="inputEmail">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus></input>
              </div>

              <div class="form-label-group">
                <label for="inputPassword">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <label class="custom-control-label" for="customCheck1">Remember password</label>
                <input type="checkbox" class="custom-control-input" id="customCheck1"></input>
              </div>

              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Entrar</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;