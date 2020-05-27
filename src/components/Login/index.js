import React from 'react';

import "./login.css";

import axios from 'axios'
import { login } from "../../services/auth";
import {ToastsContainer, ToastsStore} from 'react-toasts';

const BASE_URL = 'http://localhost:8080/';

class Login extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      usuDsEmail : '',
      usuDsSenha: ''
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
      .then((res) =>{
        console.log('sucesso');
        ToastsStore.success("Sucesso!")
        login(res.headers.authorization.replace("Bearer ", ""));
        this.props.history.push("/home");
      })
      .catch(error => {
        ToastsStore.error(error.response.data.error.message)
      });
  };

  render(){
    return(
      <div className="telaLogin"> 
        <div className="login">
          <ToastsContainer store={ToastsStore}/>
            <div className="col-md-12 img-login">
              <img src={require('./../../assets/img/logotipo.png')} alt="logo" style={{width: 160,marginBottom: 37}}/>
            </div>
            <form className="form-signin">
              <div className="form-label-group padd-10">
                <input type="email" id="inputUser" name="usuDsEmail"  onChange={this.onChange} value={this.state.usuDsEmail} className="form-control" placeholder="Nome de usuário" required></input>
              </div>

              <div className="form-label-group padd-10">
                <input type="password" id="inputPassword" name="usuDsSenha" onChange={this.onChange} value={this.state.usuDsSenha} className="form-control" placeholder="Senha" required></input>
              </div>

              <button className="buttonLogin" type="btn btn-primary" onClick={this.onSubmit} name="" value="Login">Login</button>
              
            </form>
        </div>
      </div>
    )
  }
}

export default Login;