import React from 'react';

import { Table  } from 'reactstrap';

class AgroTable extends React.Component{

  render(){

    const { usuarios } = this.props;
    console.log(usuarios);
    if(usuarios !== undefined){
      this.renderRows = function(){
        return this.state.data.map(user =>{
          return(
            <tr key={user.email}>
              <td>{user.nome}</td>
              <td>{user.email}</td>
            </tr>
          ) 
        })
      }
    }

    return(
      <Table className="table table-dark"> 
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">testes</th>
            <th scope="col">testes 2</th>
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