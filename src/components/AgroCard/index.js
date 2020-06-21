import React from 'react';
// import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const AgroCard = (props) => {
  let {preDsMesAno, preVlPrecipitacao, preVlTemperaturaMedia, preTxObservacaoTempMedia,preTxObservacaoPrecipitacao} = props.config;
  return (
    <div>
      <div>
        <p style={{display:"flex",justifyContent:"center",fontSize:"20px"}}><span style={{color:"black",fontWeight:"bold"}}>Mês: </span> {preDsMesAno}</p>
        <p><span style={{color:"black",fontWeight:"bold"}}>Milímetros de chuva: </span>{preVlPrecipitacao}</p>
        <p><span style={{color:"black",fontWeight:"bold"}}>Temperatura Média: </span>{preVlTemperaturaMedia}</p>
        <p><span style={{color:"black",fontWeight:"bold"}}>Resumo: </span>{preTxObservacaoPrecipitacao}</p>
        <p><span style={{color:"black",fontWeight:"bold"}}></span>{preTxObservacaoTempMedia}</p>
      </div>
    </div>
  );
};

export default AgroCard;