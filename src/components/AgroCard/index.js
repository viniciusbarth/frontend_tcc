import React from 'react';
// import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const AgroCard = (props) => {
  let {preDsMesAno, preVlPrecipitacao, preVlTemperaturaMedia, preTxObservacao} = props.config;
  return (
    <div>
      <div>
        <p>Mês: {preDsMesAno}</p>
        <p>Milímetros de chuva:{preVlPrecipitacao}</p>
        <p>Temperatura Média:{preVlTemperaturaMedia}</p>
        <p>Observação:{preTxObservacao}</p>
      </div>
    </div>
  );
};

export default AgroCard;