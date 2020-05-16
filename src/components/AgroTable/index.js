import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import {ToastsStore, ToastsContainer} from 'react-toasts';

import { Table  } from 'reactstrap';

class AgroTable extends React.Component{

  render(){

    let { columns, table, removeUser,editUser,removePropriedade, data } = this.props;

    // usuLsFuncoes

    this.disabledButton = (usuLsFuncoes) =>{
      return usuLsFuncoes.indexOf("ADMIN") === -1 ? false : true 
    };

    const TableBody = props => {
      let linhas;
        if(table === 'usuario'){
          linhas = data.map((item) => {
            return (
                <tr key={item.usuCdUsuario}>
                    <td>{item.usuCdUsuario}</td>
                    <td>{item.usuDsNome}</td>
                    <td>{item.usuDsEmail}</td>
                    <td><button onClick = { () => { props.removeUser(item.usuCdUsuario) }}  disabled={this.disabledButton(item.usuLsFuncoes)} className="waves-effect waves-light indigo lighten-2 btn">Remover</button></td>
                    <td><a href onClick = { () => { props.editUser(item) }}><FontAwesomeIcon icon={faEdit} size="2x" style={{color: "black"}}/></a></td>
                </tr>
            );
        });
      }else if(table === 'propriedade'){
        linhas = data.map((item) => {
          return (
              <tr key={item.proCdPropriedade}>
                <td>{item.proCdPropriedade}</td>
                <td>{item.proDsNome}</td>
                <td>{item.proDsDescricao}</td>
                <td><button onClick = { () => { props.removePropriedade(item.proCdPropriedade) }} className="waves-effect waves-light indigo lighten-2 btn">Remover</button></td>
                <td><a href="/logout"><FontAwesomeIcon icon={faEdit} size="2x" style={{color: "black"}}/></a></td>
              </tr>
          );
      });
      }
        return(
            <tbody>
                {linhas}
            </tbody>
        );
    }

    this.renderColumns = function(){
      return columns.map(item =>{
        return(
          <th scope="col">{item}</th>
        ) 
      })
    }


    return(
      <div>
      <ToastsContainer store={ToastsStore}/>
      <Table striped hover bordered> 
        <thead>
          <tr>
            {this.renderColumns()}
          </tr>
        </thead>
        <TableBody removeUser = {removeUser} editUser = {editUser} removePropriedade = {removePropriedade}></TableBody>
      </Table> 
      </div>
    );
  }
}

export default AgroTable;