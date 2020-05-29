import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const AgroCard = (props) => {
  return (
    <div>
      <Card>
        <CardImgOverlay>
          <CardTitle style={{color: "black"}}>Previsão para o Mês X</CardTitle>
          <CardText>Umidade : 213</CardText>
          <CardText>Temperatura : 21</CardText>
          <CardText>Pressão Máximo : 80</CardText>
          <CardText>Pressão Miníma : 56</CardText>
          <CardText>Precipitação : 11mm</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default AgroCard;