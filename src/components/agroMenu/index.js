import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import { Link } from 'react-router-dom'

import 'bootswatch/dist/flatly/bootstrap.min.css'

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
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/home"><img src={require('./../../assets/img/logotipo.png')}  style={{width: 63}}/></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Análise Preditiva</a>
            </li>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Cadastros
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/cadastro-usuario">
                  Cadastro de Usuário
                </DropdownItem>
                <DropdownItem href="/cadastro-propriedade">
                  Cadastro de Propriedade
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <li className="nav-item">
              <a className="nav-link" href="/sobre">Sobre</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default AgroMenu;