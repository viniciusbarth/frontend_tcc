import React from 'react';

class AgroTable extends React.Component{
  render(){
    return(
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
          </tr>
        </tbody>
      </table> 
    );
  }
}

export default AgroTable;