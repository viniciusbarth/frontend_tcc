import React from 'react';

import "./agroMenu.css";

class AgroMenu extends React.Component{

  onsubmit = () => {
    
    alert('testando 1 2 3')

  };

  render(){
    return(
      <React.Fragment>

        <div className="sidenav">
          <a onClick={this.home}>Home</a>
          <a onClick={this.onsubmit}>Cadastros</a>
          <a href="#AnalisePreditiva">Análise</a>
          <a href="#contato">Contato</a>

          <div className="version">
            <p>Versão 1.0.0.0</p>
            <p>Sistema AgroSoftware</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AgroMenu;