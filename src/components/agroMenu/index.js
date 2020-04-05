import React from 'react';

import 'bootswatch/dist/cerulean/bootstrap.min.css'

class AgroMenu extends React.Component{

  constructor(props) {
    super(props);
  }

  onClick = () => {
    
    this.props.history.push("/home");

  };

  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">AgroSoftware</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/cadastros">Cadastros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Análise Preditiva</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default AgroMenu;