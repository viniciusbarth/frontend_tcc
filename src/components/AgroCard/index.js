import React from 'react';

import "./agroCard.css";

class AgroCard extends React.Component{

  onsubmit = () => {
    
    alert('testando 1 2 3')

  };

  render(){
    return(
      <React.Fragment>
          <div className="agro-card">
            <div style={{backgroundColor: "red", width: "250px"}}>
                
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default AgroCard;