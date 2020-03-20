import React from 'react';

import "./login.css";

import axios from 'axios'


class Login extends React.Component{

  state = {
    user : '',
    password: ''
  }

  onChange = (event) =>{
    const valor = event.target.value;
    const nomeDoCampo = event.target.name;

    this.setState({
      [nomeDoCampo] : valor
    })
  }

  onSubmit = (event) => {
    event.preventEvent();
  }

  render(){
    return(
      <div className="telaLogin"> 
        <div className="login">
            <h1 className="card-title">AgroSoftware</h1>
            <form className="form-signin">
              <div className="form-label-group padd-10">
                <input type="text" id="inputUser" name="user" onChange={this.onChange} value={this.state.user} className="form-control" placeholder="Nome de usuario" required></input>
              </div>

              <div className="form-label-group padd-10">
                <input type="password" id="inputPassword" name="password" onChange={this.onChange} value={this.state.password} className="form-control" placeholder="Password" required></input>
              </div>

              <button className="buttonLogin" type="submit" onClick={this.onSubmit} name="" value="Login">Login</button>
              
              <span className="subtext">
              <a href="#">Esqueceu a sua senha?</a><br></br>
              </span>
              <span className="subtext">
              <a href="#">Ainda não possui uma conta?</a>
              </span>
            </form>
        </div>
      </div>
    )
  }
}

export default Login;