import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

import { Table  } from 'reactstrap';

class AgroTable extends React.Component{

  render(){

    const { data, columns, table } = this.props;
      this.renderRows = function(){
        if(table === 'usuario'){
          return data.map(item =>{
            return(
              <tr key={item.usuCdUsuario}>
                <td>{item.usuCdUsuario}</td>
                <td>{item.usuDsNome}</td>
                <td>{item.usuDsEmail}</td>
                <td><a href="/logout"><FontAwesomeIcon icon={faTrashAlt} size="2x" style={{color: "red"}}/></a></td>
                <td><a href="/logout"><FontAwesomeIcon icon={faEdit} size="2x" style={{color: "black"}}/></a></td>
              </tr>
            ) 
          })
        }else if(table === 'propriedades'){
          return data.map(item =>{
            return(
              <tr key={item.proCdPropriedade}>
                <td>{item.proCdPropriedade}</td>
                <td>{item.proDsNome}</td>
                <td>{item.proDsDescricao}</td>
                <td><a href="/logout"><FontAwesomeIcon icon={faTrashAlt} size="2x" style={{color: "red"}}/></a></td>
                <td><a href="/logout"><FontAwesomeIcon icon={faEdit} size="2x" style={{color: "black"}}/></a></td>
              </tr>
            ) 
          })
        }
      }

      this.renderColumns = function(){
        return columns.map(item =>{
          return(
            <th scope="col">{item}</th>
          ) 
        })
      }


    return(
      <Table striped borderless hover responsive> 
        <thead>
          <tr>
            {this.renderColumns()}
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </Table> 
    );
  }
}

export default AgroTable;