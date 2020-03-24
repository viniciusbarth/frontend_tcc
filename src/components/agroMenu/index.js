import React from 'react';

import "./agroMenu.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

class AgroMenu extends React.Component{

  onsubmit = () => {
    
    alert('testando 1 2 3')

  };

  render(){
    return(
      <React.Fragment>

        <div class="sidenav">
          <a onClick={this.home}>Home</a>
          <a onClick={this.onsubmit}>Cadastros</a>
          <a href="#AnalisePreditiva">Análise Preditiva</a>
          <a href="#contato">Contato</a>

          <p>Versão 1.0.0.0</p>
          <p>Sistema AgroSoftware</p>
        </div>

        <div class="main">
          <div class="topnav">
            <span href="" className="iconLogout">
            <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AgroMenu;