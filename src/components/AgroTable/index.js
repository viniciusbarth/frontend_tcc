import React from 'react';

import { Table  } from 'reactstrap';

class AgroTable extends React.Component{

  render(){

    const { usuarios } = this.props;
    console.log(usuarios);
      this.renderRows = function(){
        return usuarios.map(user =>{
          return(
            <tr key={user.email}>
              <td>{user.nome}</td>
              <td>{user.email}</td>
            </tr>
          ) 
        })
      }

    return(
      <Table className="table table-dark"> 
        <thead>
          <tr>
            <th scope="col">nome</th>
            <th scope="col">email</th>
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