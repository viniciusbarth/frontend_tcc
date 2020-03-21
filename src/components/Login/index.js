import React from 'react';

import "./login.css";

import axios from 'axios'

const BASE_URL = 'http://localhost:8080/';

class Login extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      email : '',
      senha: ''
    }
  }


  onChange = (event) =>{
    const valor = event.target.value;
    const nomeDoCampo = event.target.name;

    this.setState({
      [nomeDoCampo] : valor
    })
  }

  onSubmit = async e => {
    e.preventDefault();

    await axios.post(BASE_URL+"login", this.state)
    .catch(error => {
      console.log(error.response)
    });

  };

  // .then((res) =>{
  //   console.log('sucesso');
  //   this.props.history.push("/home");
  // })

  render(){
    return(
      <div className="telaLogin"> 
        <div className="login">
            <h1 className="card-title">AgroSoftware</h1>
            <form className="form-signin">
              <div className="form-label-group padd-10">
                <input type="text" id="inputUser" name="email" onChange={this.onChange} value={this.state.email} className="form-control" placeholder="Nome de usuario" required></input>
              </div>

              <div className="form-label-group padd-10">
                <input type="password" id="inputPassword" name="senha" onChange={this.onChange} value={this.state.senha} className="form-control" placeholder="Password" required></input>
              </div>

              <button className="buttonLogin" type="btn btn-primary" onClick={this.onSubmit} name="" value="Login">Login</button>
              
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